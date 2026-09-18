<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class VehicleCrudTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_can_view_vehicles_from_database(): void
    {
        $vehicle = Vehicle::factory()->create([
            'name' => 'Custom Test Mercedes',
            'brand' => 'Mercedes-Benz',
            'model' => 'S500',
        ]);

        $response = $this->get('/cars-for-sale');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('inventory')
            ->has('vehicles', 1)
            ->where('vehicles.0.name', 'Custom Test Mercedes')
        );
    }

    public function test_guest_cannot_access_admin_inventory_or_mutate_vehicles(): void
    {
        $response = $this->get('/dashboard/inventory');
        $response->assertRedirect('/login');

        $postResponse = $this->post('/dashboard/inventory', [
            'brand' => 'Audi',
            'model' => 'RS6',
        ]);
        $postResponse->assertRedirect('/login');
    }

    public function test_admin_can_create_vehicle_with_photo(): void
    {
        Storage::fake('public');
        $user = User::factory()->create();

        $photo = UploadedFile::fake()->image('car.jpg');

        $response = $this->actingAs($user)->post('/dashboard/inventory', [
            'brand' => 'BMW',
            'model' => 'M5',
            'name' => 'BMW M5 Competition',
            'tag' => 'Europe / Germany',
            'year_range' => '2021–2023',
            'transmission' => 'Automatic',
            'fuel' => 'Petrol',
            'price' => '€85,000',
            'status' => 'AVAILABLE',
            'image' => $photo,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('vehicles', [
            'brand' => 'BMW',
            'model' => 'M5',
            'name' => 'BMW M5 Competition',
        ]);

        $vehicle = Vehicle::where('model', 'M5')->first();
        $this->assertNotNull($vehicle);
        $this->assertIsString($vehicle->id);
        $this->assertTrue(strlen($vehicle->id) === 36); // Verify UUID length
        $this->assertStringStartsWith('/storage/vehicles/', $vehicle->image_url);
    }

    public function test_admin_can_update_vehicle(): void
    {
        $user = User::factory()->create();
        $vehicle = Vehicle::factory()->create([
            'brand' => 'Lexus',
            'model' => 'LX600',
            'price' => 'On Request',
            'status' => 'SOURCE ON REQUEST',
        ]);

        $response = $this->actingAs($user)->post("/dashboard/inventory/{$vehicle->id}", [
            'brand' => 'Lexus',
            'model' => 'LX600',
            'name' => 'Lexus LX600 Ultra Luxury',
            'tag' => 'Japan / USA',
            'year_range' => '2022–2024',
            'transmission' => 'Automatic',
            'fuel' => 'Petrol',
            'price' => '$120,000',
            'status' => 'RESERVED',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('vehicles', [
            'id' => $vehicle->id,
            'price' => '$120,000',
            'status' => 'RESERVED',
        ]);
    }

    public function test_admin_can_delete_vehicle(): void
    {
        $user = User::factory()->create();
        $vehicle = Vehicle::factory()->create();

        $response = $this->actingAs($user)->delete("/dashboard/inventory/{$vehicle->id}");

        $response->assertRedirect();
        $this->assertDatabaseMissing('vehicles', [
            'id' => $vehicle->id,
        ]);
    }
}
