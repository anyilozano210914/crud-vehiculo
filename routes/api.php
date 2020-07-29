<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'car'], function() {
    Route::get('/getCar', 'CarController@getCar');
    Route::get('/getTypeCar', 'CarController@getTypeCar');
    Route::get('/getBrandCar', 'CarController@getBrandCar');
    Route::get('/getModelCar', 'CarController@getModelCar');
    Route::post('/CreateCar', 'CarController@CreateCar');
    Route::delete('/deleteCar/{id}', 'CarController@deleteCar');
    Route::post('/EditCar', 'CarController@EditCar');

});