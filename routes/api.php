<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\REST\V1 as RESTV1;
use App\Http\Controllers\REST\Errors;

## Authorization
Route::post('auth/account', [RESTV1\Auth\Account::class, 'index']);
Route::get('auth/google', [RESTV1\Auth\Account::class, 'index']);

## Registration
Route::post('register/account', [RESTV1\Register\Account::class, 'index']);
Route::get('register/account/verification', [RESTV1\Register\Verification::class, 'index']);

## Manage
### Manage Client
Route::get('manage/client', [RESTV1\Manage\Client\Get::class, 'index'])
    ->middleware('auth:bearer');

### Manage Package
Route::get('manage/package', [RESTV1\Manage\Package\Get::class, 'index'])
    ->middleware('auth:bearer');
Route::post('manage/package', [RESTV1\Manage\Package\Post::class, 'index'])
    ->middleware('auth:bearer');

## Custom 404
$custom404 = function () {
    return (new Errors)
        ->setInternal(false)
        ->setMessage(404, "Endpoint or HTTP method not available")
        ->sendError();
};
Route::any('/', $custom404);
Route::any('{any}', $custom404);
