<?php

namespace Database\Seeders;

use App\Models\Inquiry;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Admin User
        User::updateOrCreate(
            ['email' => 'admin@eazyscars.be'],
            [
                'name' => "Eazy's Cars Admin",
                'email' => 'admin@eazyscars.be',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Also keep test user if needed
        User::updateOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Create initial sample sourcing inquiries
        if (Inquiry::count() === 0) {
            Inquiry::create([
                'name' => 'Jean-Luc Dupont',
                'phone' => '+32 491 23 45 67',
                'email' => 'jeanluc.dupont@example.be',
                'make' => 'Mercedes-Benz',
                'model' => 'GLE 43 AMG Coupe',
                'year' => '2018–2020',
                'budget' => '€48,000',
                'destination' => 'Brussels, Belgium',
                'requirements' => 'Night package, panoramic roof, under 75,000 km, black or obsidian metallic.',
                'type' => 'sourcing',
                'status' => 'new',
            ]);

            Inquiry::create([
                'name' => 'Emeka Okafor',
                'phone' => '+234 803 123 4567',
                'email' => 'emeka.okafor@example.com',
                'make' => 'Toyota',
                'model' => 'Highlander Limited',
                'year' => '2019–2021',
                'budget' => '$36,000',
                'destination' => 'Lagos, Nigeria',
                'requirements' => 'Clean CarFax, USA specs, AWD, brown leather interior.',
                'type' => 'sourcing',
                'status' => 'in_progress',
            ]);
        }
    }
}
