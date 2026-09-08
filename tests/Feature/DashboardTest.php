<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_the_login_page()
    {
        $response = $this->get(route('dashboard'));
        $response->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_visit_the_dashboard()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get(route('dashboard'));
        $response->assertOk();
    }

    public function test_guests_cannot_visit_admin_pages(): void
    {
        foreach (['dashboard.inventory', 'dashboard.inquiries'] as $route) {
            $this->get(route($route))->assertRedirect(route('login'));
        }
    }

    public function test_authenticated_users_can_visit_admin_pages(): void
    {
        $this->actingAs(User::factory()->create());

        foreach (['dashboard.inventory', 'dashboard.inquiries'] as $route) {
            $this->get(route($route))->assertOk();
        }
    }
}
