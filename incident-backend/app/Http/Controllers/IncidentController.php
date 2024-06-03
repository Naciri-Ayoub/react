<?php

namespace App\Http\Controllers;

use App\Models\Incident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IncidentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $incidents = Incident::all();
        return response()->json($incidents);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info($request);
        Incident::create([
            'title' => $request->title,
            'description' => $request->description,
            'affected_person' => $request->affected_person,
            'status' => $request->status,
        ]);
        return response()->json([
            'message' => 'Incident Created',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $incident = Incident::find($id);
        return response()->json($incident);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $incident = Incident::find($id);
        $incident -> update([
            'title' => $request->title,
            'description' => $request->description,
            'affected_person' => $request->affected_person,
            'status' => $request->status,
        ]);
        return response()->json([
            'message' => 'Incident Update',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $incident=Incident::find ($id);
        $incident->delete();
        return response()->json([
            'message' =>"incident Deleted"
        ]);
    }
}
