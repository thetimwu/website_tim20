<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('{reactRoutes}', function () {
//     return view('layouts.appTim');
// })->where('reactRoutes', '^((?!api).)*$'); // except 'api' word;

// Route::view('/{path?}', 'layouts.appTim')->where('path', '^((?!api).)*$')->name('react');

Route::view('/{path?}', 'layouts.appTim')->name('react');

// $name = request('name');

// Route::view('/tim', 'tim.tim', ['name' => $name]);

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
