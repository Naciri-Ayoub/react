<?php

use App\Http\Controllers\IncidentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CharacterController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/incidents',[IncidentController::class, 'index']);
Route::get('/incidents/{id}',[IncidentController::class, 'show']);
Route::post('/incidents/store',[IncidentController::class, 'store']);
Route::put('/incidents/update/{id}',[IncidentController::class, 'update']);
Route::delete('incidents/delete/{id}',[IncidentController::class, 'destroy']);

