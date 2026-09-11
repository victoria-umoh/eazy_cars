<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function test_returns_a_successful_response()
    {
        $response = $this->get(route('home'));

        $response->assertOk();
    }

    public function test_public_showroom_pages_are_available(): void
    {
        foreach (['inventory', 'cars-for-sale', 'about', 'contact', 'find-your-car', 'markets', 'europe', 'auctions', 'export'] as $route) {
            $this->get(route($route))->assertOk();
        }
    }
}
