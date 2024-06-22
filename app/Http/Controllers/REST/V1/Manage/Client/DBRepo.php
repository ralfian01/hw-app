<?php

namespace App\Http\Controllers\REST\V1\Manage\Package;

use App\Http\Libraries\BaseDBRepo;
use App\Models\AccountModel;
use App\Models\PackageCategoryModel;
use Exception;

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


    /*
     * ---------------------------------------------
     * DATABASE TRANSACTION
     * ---------------------------------------------
     */

    /**
     * Function to get data from database
     * @return array|bool
     */
    public function getData()
    {
        ## Formatting additional data which not payload
        // Code here...

        ## Formatting payload
        // Code here...

        try {

            $data = PackageCategoryModel::getWithProfile();

            print_r($data);

            if ($data->isEmpty()) {
                return $data = null;
            }

            return $data->toArray();
        } catch (Exception $e) {

            return (object) [
                'status' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
