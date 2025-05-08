<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Conductor;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ConductorController extends Controller
{
    /**
     * Display a listing of the resource.
     */ 
    public function index(): JsonResponse
    {
        $conductores = Conductor::all(); // Obtiene todos los conductores
        return response()->json($conductores); // Devuelve JSON
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'cedula' => 'required|unique:conductores',
            'primer_nombre' => 'required|string|max:50',
            'segundo_nombre' => 'nullable|string|max:50',
            'apellidos' => 'required|string|max:100',
            'direccion' => 'required|string|max:100',
            'telefono' => 'required|string|max:20',
            'ciudad' => 'required|string|max:50',
        ]);
    
        $conductor = Conductor::create($validated);
    
        return response()->json(['message' => 'Conductor registrado correctamente', 'data' => $conductor], 201);
    }
    
    
    /**
     * Display the specified resource.
     */
    public function show(Conductor $conductor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Conductor $conductor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conductor $conductor)
    {
        //
    }
}
