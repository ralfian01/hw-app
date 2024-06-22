<?php

namespace App\Http\Controllers\REST\V1\Register;

use App\Http\Libraries\BaseDBRepo;
use App\Models\AccountMetaModel;
use App\Models\AccountModel;
use App\Models\ProfileModel;
use App\Models\RoleModel;
use Exception;
use Firebase\JWT\JWT;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

/**
 * 
 */
class DBRepo extends BaseDBRepo
{
    // public function __construct(?array $payload = [], ?array $file = [], ?array $auth = [])
    // {
    //     parent::__construct($payload, $file, $auth);
    // }

    /*
     * ---------------------------------------------
     * TOOLS
     * ---------------------------------------------
     */

    /**
     * Function to check email duplication
     * @return bool
     */
    public static function checkEmailDuplicate($email)
    {
        $data = AccountModel::where('pa_username', '=', $email)
            ->get();

        return $data->isEmpty();
    }

    /**
     * Function to validate register token
     * @return bool
     */
    public static function validateRegisterToken($uuid, $token, &$returnId)
    {
        $objectToken = [
            'token' => $token,
            'uuid' => $uuid,
        ];

        $signature = hash_hmac('SHA256',  base64_encode(json_encode($objectToken)), env('APP_KEY'));

        $data = AccountMetaModel::select('pa_id')
            ->where('pam_code', '=', 'EMAIL_CONFIRMATION')
            ->where('pam_value', '=', $signature)
            ->get();

        if ($data->isEmpty()) {
            return false;
        }

        $returnId = $data->toArray()[0]['pa_id'];
        return true;
    }


    /*
     * ---------------------------------------------
     * DATABASE TRANSACTION
     * ---------------------------------------------
     */

    /**
     * Function to insert data from database
     * @return object|bool
     */
    public function insertData()
    {
        ## Formatting additional data which not payload
        // # Get role id from role code
        $role = RoleModel::select('pr_id')
            ->where('pr_code', '=', 'MEMBER')
            ->get();

        if ($role->isEmpty()) {
            return (object) [
                'status' => false,
                'message' => 'There is no role code named "MEMBER"'
            ];
        }

        $roleId = $role[0]['pr_id'];

        ## Formatting payload
        // Code here...

        try {

            return DB::transaction(function () use ($roleId) {

                $uuid = Uuid::uuid4();

                // If id found and Delete keys that have a null value
                $dbPayload = Arr::whereNotNull([
                    'pa_uuid' => $uuid,
                    'pa_username' => $this->payload['email'],
                    'pa_password' => hash('SHA256', $this->payload['password']),
                    'pr_id' => $roleId,
                ]);

                ## Insert account data
                $insertAccount = AccountModel::create($dbPayload);

                if (!$insertAccount) {
                    $tableName = AccountModel::tableName();
                    throw new Exception("Failed when insert data into table \"{$tableName}\"");
                }

                ## Insert account profile
                $profileData = Arr::whereNotNull([
                    'pa_id' => $insertAccount->pa_id,
                    'ppr_name' => $this->payload['full_name'],
                    'ppr_phoneNumber' => $this->payload['phone_number'],
                ]);

                $insertProfile = ProfileModel::insert($profileData);

                if (!$insertProfile) {
                    $tableName = ProfileModel::tableName();
                    throw new Exception("Failed when insert data into table \"{$tableName}\"");
                }

                ## Insert account meta for email validation
                $metaValue = [
                    'token' => hash('SHA256', Str::random(60)),
                    'uuid' => base64_encode($uuid),
                ];
                $metaValue['signature'] = hash_hmac('SHA256', base64_encode(json_encode($metaValue)), env('APP_KEY'));

                $accountMetaData = Arr::whereNotNull([
                    'pa_id' => $insertAccount->pa_id,
                    'pam_code' => "EMAIL_CONFIRMATION",
                    'pam_value' => $metaValue['signature'],
                ]);

                $insertAccMeta = AccountMetaModel::insert($accountMetaData);

                if (!$insertAccMeta) {
                    $tableName = AccountMetaModel::tableName();
                    throw new Exception("Failed when insert data into table \"{$tableName}\"");
                }

                // Return transaction status
                return (object) [
                    'status' => true,
                    'data' => [
                        'meta_register' => $metaValue
                    ],
                    'send_mail' => [
                        'email' => $this->payload['email']
                    ]
                ];
            });
        } catch (Exception $e) {

            return (object) [
                'status' => false,
                'message' => $e->getMessage(),
            ];
        }
    }


    /**
     * Function to verify new user
     * @return object|bool
     */
    public function verifyData()
    {
        ## Formatting additional data which not payload
        // Code here...

        ## Formatting payload
        // Code here...

        try {

            return DB::transaction(function () {

                // If id found and Delete keys that have a null value
                $dbPayload = Arr::whereNotNull([
                    'pa_statusActive' => true
                ]);

                ## Update account data
                $account = AccountModel::find($this->payload['account_id']);
                $updateAccount = $account->update($dbPayload);

                if (!$updateAccount) {
                    $tableName = AccountModel::tableName();
                    throw new Exception("Failed when update data into table \"{$tableName}\"");
                }

                ## Delete account meta data
                $deleteAccMeta = AccountMetaModel::where('pa_id', $this->payload['account_id'])
                    ->where('pam_code', 'EMAIL_CONFIRMATION')
                    ->delete();

                if (!$deleteAccMeta) {
                    $tableName = AccountMetaModel::tableName();
                    throw new Exception("Failed when delete data from table \"{$tableName}\"");
                }

                // Return transaction status
                return (object) [
                    'status' => true,
                    'send_mail' => [
                        'email' => $account->get()[0]->pa_username
                    ]
                ];
            });
        } catch (Exception $e) {

            return (object) [
                'status' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
