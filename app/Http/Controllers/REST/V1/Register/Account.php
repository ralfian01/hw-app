<?php

namespace App\Http\Controllers\REST\V1\Register;

use App\Http\Controllers\REST\BaseREST;
use App\Http\Controllers\REST\Errors;

class Account extends BaseREST
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
        "email" => "required|email",
        "password" => "required",
        "full_name" => "required",
        "phone_number" => "required|regex:/^628\d{3,}$/",
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

        // Make sure email not registered
        if (!DBRepo::checkEmailDuplicate($this->payload['email'])) {
            return $this->error(
                (new Errors)
                    ->setMessage(409, 'Email already registered')
            );
        }

        return $this->insert();
    }

    /** 
     * Function to get data 
     * @return object
     */
    public function insert()
    {
        $dbRepo = new DBRepo($this->payload, $this->file, $this->auth);

        $insert = $dbRepo->insertData();

        if ($insert->status) {

            ## Send email
            // Code here...

            if (env('APP_ENV') == 'local') {
                return $this->respond(200, $insert->data);
            }

            return $this->respond(200);
        }

        return $this->error(500, [
            'reason' => $insert->message
        ]);
    }
}
