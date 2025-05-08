<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\VehiculoController;
use App\Http\Controllers\API\ConductorController;
use App\Http\Controllers\API\PropietarioController;

// Ruta de prueba SUPER simple
Route::get('/ping', function() {
    return response()->json(['status' => '¡API conectada!']);
});

// Rutas de los recursos
Route::apiResource('vehiculos', VehiculoController::class);
Route::get('/vehiculos', [VehiculoController::class, 'index']);
Route::apiResource('conductores', ConductorController::class);
Route::get('/conductores', [ConductorController::class, 'index']);
Route::apiResource('propietarios', PropietarioController::class);
Route::get('/propietarios', [PropietarioController::class, 'index']);
