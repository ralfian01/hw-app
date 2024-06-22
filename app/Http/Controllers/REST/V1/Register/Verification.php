<?php

namespace App\Http\Controllers\REST\V1\Register;

use App\Http\Controllers\REST\BaseREST;
use App\Http\Controllers\REST\Errors;

class Verification extends BaseREST
{
    public function __construct(
        ?array $payload = [],
        ?array $file = [],
        ?array $auth = []
    ) {
        $this->payload = $payload;
        $this->file = $file;
        $this->auth = $auth;
    }

    /**
     * @var array Property that contains the payload rules
     */
    protected $payloadRules = [
        "token" => "required",
        "uuid" => "required",
        "signature" => "required",
    ];

    /**
     * @var array Property that contains the privilege data
     */
    protected $privilegeRules = [];


    /**
     * The method that starts the main activity
     * @return null
     */
    protected function mainActivity($id = null)
    {
        return $this->nextValidation();
    }

    /**
     * Handle the next step of payload validation
     * @return void
     */
    private function nextValidation()
    {
        $dbRepo = new DBRepo($this->payload, $this->file, $this->auth);

        // Make sure client has valid token
        if (!DBRepo::validateRegisterToken(
            $this->payload['uuid'],
            $this->payload['token'],
            $this->payload['account_id']
        )) {
            return $this->error(
                (new Errors)
                    ->setMessage(409, 'Token is invalid')
                    ->setStatus('INVALID_TOKEN')
            );
        }

        return $this->verify();
    }

    /** 
     * Function to verify
     * @return object
     */
    public function verify()
    {
        $dbRepo = new DBRepo($this->payload, $this->file, $this->auth);

        $insert = $dbRepo->verifyData();

        if ($insert->status) {

            ## Send email
            // Code here...

            if (env('APP_ENV') == 'local') {
                return $this->respond(200, $insert->send_mail);
            }

            return $this->respond(200);
        }

        return $this->error(500, [
            'reason' => $insert->message
        ]);
    }
}
