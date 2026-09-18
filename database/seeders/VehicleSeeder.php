<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehicles = [
            [
                'brand' => 'Mercedes-Benz',
                'model' => 'GLE350',
                'name' => 'Mercedes-Benz GLE350',
                'tag' => 'Europe / USA',
                'year_range' => '2016–2019',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-gle350',
                'image_url' => '/images/vehicles/gle350.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Mercedes-Benz',
                'model' => 'GLE43',
                'name' => 'Mercedes-Benz GLE43',
                'tag' => 'Europe / USA',
                'year_range' => '2017–2020',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-gle43',
                'image_url' => '/images/vehicles/gle43.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Mercedes-Benz',
                'model' => 'GLC300',
                'name' => 'Mercedes-Benz GLC300',
                'tag' => 'Europe / USA',
                'year_range' => '2016–2020',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-glc300',
                'image_url' => '/images/vehicles/glc300.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Lexus',
                'model' => 'RX350',
                'name' => 'Lexus RX350',
                'tag' => 'Japan / USA',
                'year_range' => '2015–2019',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-rx350',
                'image_url' => '/images/vehicles/rx350.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Toyota',
                'model' => 'Highlander',
                'name' => 'Toyota Highlander',
                'tag' => 'USA / Canada',
                'year_range' => '2014–2020',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-highlander',
                'image_url' => '/images/vehicles/highlander.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Toyota',
                'model' => 'Camry',
                'name' => 'Toyota Camry',
                'tag' => 'USA / Japan',
                'year_range' => '2012–2020',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-camry',
                'image_url' => '/images/vehicles/camry.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Toyota',
                'model' => 'Corolla',
                'name' => 'Toyota Corolla',
                'tag' => 'USA / Japan',
                'year_range' => '2012–2020',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-corolla',
                'image_url' => '/images/vehicles/corolla.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
            [
                'brand' => 'Mercedes-Benz',
                'model' => 'ML350',
                'name' => 'Mercedes-Benz ML350',
                'tag' => 'Europe / USA',
                'year_range' => '2013–2015',
                'transmission' => 'Automatic',
                'fuel' => 'Petrol',
                'price' => 'On Request',
                'status' => 'SOURCE ON REQUEST',
                'image_class' => 'vehicle-ml350',
                'image_url' => '/images/vehicles/ml350.jpg',
                'description' => 'Available for sourcing and international export.',
                'is_featured' => true,
            ],
        ];

        foreach ($vehicles as $data) {
            Vehicle::firstOrCreate(
                ['name' => $data['name'], 'model' => $data['model']],
                $data
            );
        }
    }
}
