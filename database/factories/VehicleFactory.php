<?php

namespace Database\Factories;

use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $brand = fake()->randomElement(['Mercedes-Benz', 'Toyota', 'Lexus', 'BMW', 'Audi']);
        $model = fake()->word();

        return [
            'brand' => $brand,
            'model' => $model,
            'name' => "{$brand} {$model}",
            'tag' => fake()->randomElement(['Europe / USA', 'USA / Canada', 'Japan / USA']),
            'year_range' => '2018–2022',
            'transmission' => 'Automatic',
            'fuel' => 'Petrol',
            'price' => 'On Request',
            'status' => 'AVAILABLE',
            'image_class' => null,
            'image_url' => null,
            'description' => fake()->sentence(),
            'is_featured' => true,
        ];
    }
}
