<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Propietario;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
class PropietarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $propietarios = Propietario::all(); // Obtiene todos los propietarios
        return response()->json($propietarios); // Devuelve JSON
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'cedula' => 'required|unique:propietarios',
            'primer_nombre' => 'required|string|max:50',
            'segundo_nombre' => 'nullable|string|max:50',
            'apellidos' => 'required|string|max:100',
            'direccion' => 'required|string|max:100',
            'telefono' => 'required|string|max:20',
            'ciudad' => 'required|string|max:50',
        ]);
    
        $propietario = Propietario::create($validated);
    
        return response()->json(['message' => 'Propietario registrado correctamente', 'data' => $propietario], 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(Propietario $propietario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Propietario $propietario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Propietario $propietario)
    {
        //
    }
}
