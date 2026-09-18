<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class VehicleController extends Controller
{
    /**
     * Display a listing of vehicles on the public showroom.
     */
    public function index(): Response
    {
        $vehicles = Vehicle::query()
            ->orderBy('created_at', 'asc')
            ->get();

        return Inertia::render('inventory', [
            'vehicles' => $vehicles,
        ]);
    }

    /**
     * Display a listing of vehicles on the admin dashboard.
     */
    public function adminIndex(): Response
    {
        $vehicles = Vehicle::query()
            ->latest()
            ->get();

        return Inertia::render('admin/inventory', [
            'vehicles' => $vehicles,
        ]);
    }

    /**
     * Store a newly created vehicle in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'brand' => ['required', 'string', 'max:100'],
            'model' => ['required', 'string', 'max:100'],
            'name' => ['nullable', 'string', 'max:255'],
            'tag' => ['required', 'string', 'max:100'],
            'year_range' => ['required', 'string', 'max:50'],
            'transmission' => ['required', 'string', 'max:50'],
            'fuel' => ['required', 'string', 'max:50'],
            'price' => ['nullable', 'string', 'max:100'],
            'status' => ['required', 'string', 'max:50'],
            'description' => ['nullable', 'string', 'max:2000'],
            'image' => ['nullable', 'image', 'max:5120'],
            'image_url' => ['nullable', 'string', 'max:500'],
            'image_class' => ['nullable', 'string', 'max:100'],
            'is_featured' => ['nullable', 'boolean'],
        ]);

        if (empty($validated['name'])) {
            $validated['name'] = trim("{$validated['brand']} {$validated['model']}");
        }

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('vehicles', 'public');
            $validated['image_url'] = '/storage/'.$path;
        }

        $validated['price'] = $validated['price'] ?? 'On Request';
        $validated['is_featured'] = $request->boolean('is_featured', true);

        Vehicle::create($validated);

        return back()->with('success', 'Vehicle added to inventory successfully.');
    }

    /**
     * Update the specified vehicle in storage.
     */
    public function update(Request $request, Vehicle $vehicle): RedirectResponse
    {
        $validated = $request->validate([
            'brand' => ['required', 'string', 'max:100'],
            'model' => ['required', 'string', 'max:100'],
            'name' => ['nullable', 'string', 'max:255'],
            'tag' => ['required', 'string', 'max:100'],
            'year_range' => ['required', 'string', 'max:50'],
            'transmission' => ['required', 'string', 'max:50'],
            'fuel' => ['required', 'string', 'max:50'],
            'price' => ['nullable', 'string', 'max:100'],
            'status' => ['required', 'string', 'max:50'],
            'description' => ['nullable', 'string', 'max:2000'],
            'image' => ['nullable', 'image', 'max:5120'],
            'image_url' => ['nullable', 'string', 'max:500'],
            'image_class' => ['nullable', 'string', 'max:100'],
            'is_featured' => ['nullable', 'boolean'],
        ]);

        if (empty($validated['name'])) {
            $validated['name'] = trim("{$validated['brand']} {$validated['model']}");
        }

        if ($request->hasFile('image')) {
            // Delete old uploaded image if present
            if ($vehicle->image_url && str_starts_with($vehicle->image_url, '/storage/vehicles/')) {
                $oldPath = str_replace('/storage/', '', $vehicle->image_url);
                Storage::disk('public')->delete($oldPath);
            }

            $path = $request->file('image')->store('vehicles', 'public');
            $validated['image_url'] = '/storage/'.$path;
        }

        if (isset($validated['is_featured'])) {
            $validated['is_featured'] = $request->boolean('is_featured');
        }

        $vehicle->update($validated);

        return back()->with('success', 'Vehicle updated successfully.');
    }

    /**
     * Remove the specified vehicle from storage.
     */
    public function destroy(Vehicle $vehicle): RedirectResponse
    {
        if ($vehicle->image_url && str_starts_with($vehicle->image_url, '/storage/vehicles/')) {
            $path = str_replace('/storage/', '', $vehicle->image_url);
            Storage::disk('public')->delete($path);
        }

        $vehicle->delete();

        return back()->with('success', 'Vehicle removed from inventory.');
    }
}
