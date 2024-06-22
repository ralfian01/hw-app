<?php

namespace App\Http\Libraries;

use Exception;

class BaseDBRepo
{
    /**
     * @var array Payload
     */
    protected $payload;

    /**
     * @var array|object File
     */
    protected $file;

    /**
     * @var array|object Authentication
     */
    protected $auth;

    protected static $instance;

    public function __construct(?array $payload = [], ?array $file = [], ?array $auth = [])
    {
        $this->payload = $payload;
        $this->file = $file;
        $this->auth = $auth;
    }

    public static function __callStatic($methodName, $arguments)
    {
        $className = static::class;

        if (!method_exists($className, $methodName)) {
            throw new Exception("There is no method {$methodName}() in class {$className}");
        }

        $class = new $className();
        return call_user_func_array([$class, $methodName], $arguments);
    }

    /**
     * Function to print detail of database exception
     * @return void
     */
    protected static function printDBException($exception)
    {
        // If project not in production environment, print error detail
        if (env('APP_ENV') != 'production')
            print_r($exception);
    }
}
