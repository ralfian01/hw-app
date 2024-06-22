<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrivilegeSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'pp_code' => 'CLIENT_MANAGE_VIEW',
                'pp_description' => 'View client list',
            ],
            [
                'pp_code' => 'CLIENT_MANAGE_SUSPEND',
                'pp_description' => 'Suspend or activate client',
            ],
            [
                'pp_code' => 'CLIENT_MANAGE_PRIVILEGE',
                'pp_description' => 'Set client privileges',
            ],
            [
                'pp_code' => 'ADMIN_MANAGE_VIEW',
                'pp_description' => 'View admin list',
            ],
            [
                'pp_code' => 'ADMIN_MANAGE_SUSPEND',
                'pp_description' => 'Suspend or activate admin',
            ],
            [
                'pp_code' => 'ADMIN_MANAGE_PRIVILEGE',
                'pp_description' => 'Set admin privileges',
            ],
            [
                'pp_code' => 'ADMIN_MANAGE_ADD',
                'pp_description' => 'Add or delete admin',
            ],
        ];

        DB::table('privilege')->insert($data);
    }
}
