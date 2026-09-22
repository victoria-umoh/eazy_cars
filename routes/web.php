<?php

use App\Http\Controllers\InquiryController;
use App\Http\Controllers\VehicleController;
use App\Models\Inquiry;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

// Public Front-End Routes matching eazyscars.be & static HTML templates
Route::inertia('/', 'welcome')->name('home');
Route::get('inventory', [VehicleController::class, 'index'])->name('inventory');
Route::get('cars-for-sale', [VehicleController::class, 'index'])->name('cars-for-sale');
Route::inertia('find-your-car', 'find-your-car')->name('find-your-car');
Route::inertia('markets', 'markets')->name('markets');
Route::inertia('europe', 'europe')->name('europe');
Route::inertia('usa-canada', 'usa-canada')->name('usa-canada');
Route::inertia('japan', 'japan')->name('japan');
Route::inertia('auctions', 'auctions')->name('auctions');
Route::inertia('export', 'export')->name('export');
Route::inertia('about', 'about')->name('about');
Route::inertia('contact', 'contact')->name('contact');

// Direct redirects for visitors coming from legacy .html links
Route::redirect('index.html', '/');
Route::redirect('cars-for-sale.html', '/cars-for-sale');
Route::redirect('find-your-car.html', '/find-your-car');
Route::redirect('markets.html', '/markets');
Route::redirect('europe.html', '/europe');
Route::redirect('usa-canada.html', '/usa-canada');
Route::redirect('japan.html', '/japan');
Route::redirect('auctions.html', '/auctions');
Route::redirect('export.html', '/export');
Route::redirect('about.html', '/about');
Route::redirect('contact.html', '/contact');

// Public Inquiry Submission Route
Route::post('inquiries', [InquiryController::class, 'store'])->name('inquiries.store');

// Secure Database Setup Route (run migrations & seeders via browser on Easyhost)
Route::get('setup-database', function (Request $request) {
    if (! auth()->check() && $request->query('key') !== 'eazyscars_setup_2026') {
        abort(403, 'Unauthorized. Please log in or provide secret key.');
    }

    try {
        Artisan::call('migrate', ['--force' => true]);
        $migrateOutput = Artisan::output();

        Artisan::call('db:seed', ['--force' => true]);
        $seedOutput = Artisan::output();

        return response("<div style='font-family: system-ui, -apple-system, sans-serif; padding: 2.5rem; max-width: 680px; margin: 40px auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);'>
            <h2 style='color: #059669; margin-top: 0;'>✅ Database Setup Successful!</h2>
            <p style='color: #4b5563; font-size: 1.05rem;'>All database tables (<code>vehicles</code>, <code>inquiries</code>, etc.) and seed data have been generated in your Easyhost MySQL database.</p>
            <h4 style='margin-bottom: 0.5rem; color: #374151;'>Output:</h4>
            <pre style='background: #0f172a; color: #38bdf8; padding: 1.25rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; line-height: 1.5;'>{$migrateOutput}\n{$seedOutput}</pre>
            <div style='margin-top: 1.5rem;'>
                <a href='/dashboard' style='display: inline-block; padding: 0.75rem 1.5rem; background: #2563eb; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;'>Go to Dashboard &rarr;</a>
                <a href='/cars-for-sale' style='display: inline-block; margin-left: 0.75rem; padding: 0.75rem 1.5rem; background: #f3f4f6; color: #1f2937; text-decoration: none; border-radius: 8px; font-weight: 600;'>View Showroom</a>
            </div>
        </div>");
    } catch (Throwable $e) {
        report($e);

        return response("<div style='font-family: system-ui, sans-serif; padding: 2rem; max-width: 650px; margin: 40px auto; color: #991b1b; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px;'>
            <h3>Database Setup Error</h3>
            <p>{$e->getMessage()}</p>
        </div>", 500);
    }
})->name('setup-database');

// Authenticated Admin Dashboard Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        if (! Schema::hasTable('vehicles')) {
            try {
                Artisan::call('migrate', ['--force' => true]);
                Artisan::call('db:seed', ['--force' => true]);
            } catch (Throwable $e) {
                report($e);
            }
        }

        return Inertia::render('dashboard', [
            'vehicleCount' => Vehicle::count(),
            'inquiryCount' => Inquiry::count(),
            'newInquiryCount' => Inquiry::where('status', 'new')->count(),
            'recentInquiries' => Inquiry::latest()->take(5)->get(),
        ]);
    })->name('dashboard');

    // Admin Inventory CRUD Routes
    Route::get('dashboard/inventory', [VehicleController::class, 'adminIndex'])->name('dashboard.inventory');
    Route::post('dashboard/inventory', [VehicleController::class, 'store'])->name('dashboard.inventory.store');
    Route::post('dashboard/inventory/{vehicle}', [VehicleController::class, 'update'])->name('dashboard.inventory.update');
    Route::delete('dashboard/inventory/{vehicle}', [VehicleController::class, 'destroy'])->name('dashboard.inventory.destroy');

    // Admin Inquiries Routes
    Route::get('dashboard/inquiries', [InquiryController::class, 'index'])->name('dashboard.inquiries');
    Route::patch('dashboard/inquiries/{inquiry}/status', [InquiryController::class, 'updateStatus'])->name('dashboard.inquiries.status');
});

require __DIR__.'/settings.php';
