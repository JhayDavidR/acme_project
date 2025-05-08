<?php

use Illuminate\Support\Facades\Route;
Route::get('/emergency-vehiculos', function() {
    return response()->json([
        ['id' => 1, 'placa' => 'ABC123'],
        ['id' => 2, 'placa' => 'XYZ789']
    ]);
});