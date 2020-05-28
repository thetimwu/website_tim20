<?php

use Illuminate\Http\Request;
use Laravel\Passport\Http\Controllers\AccessTokenController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('users', 'UserController');

Route::prefix('user')->group(function () {
    Route::post('/login', [AccessTokenController::class, 'issueToken'])
        ->middleware(['api-login', 'throttle'])->name('login');
    Route::post('/logout', 'api\LoginController@logout')->name('logout');
    Route::post('/register', 'api\RegisterController@register')->name('register');
});

Route::apiResource('tags', 'TagController');
Route::apiResource('articles', 'ArticleController');
