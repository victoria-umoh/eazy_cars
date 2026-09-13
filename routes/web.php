<?php

use App\Http\Controllers\InquiryController;
use App\Models\Inquiry;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Front-End Routes matching eazyscars.be & static HTML templates
Route::inertia('/', 'welcome')->name('home');
Route::inertia('inventory', 'inventory')->name('inventory');
Route::inertia('cars-for-sale', 'inventory')->name('cars-for-sale');
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

// Authenticated Admin Dashboard Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard', [
            'vehicleCount' => 8,
            'inquiryCount' => Inquiry::count(),
            'newInquiryCount' => Inquiry::where('status', 'new')->count(),
            'recentInquiries' => Inquiry::latest()->take(5)->get(),
        ]);
    })->name('dashboard');
    Route::inertia('dashboard/inventory', 'admin/inventory')->name('dashboard.inventory');
    Route::get('dashboard/inquiries', [InquiryController::class, 'index'])->name('dashboard.inquiries');
    Route::patch('dashboard/inquiries/{inquiry}/status', [InquiryController::class, 'updateStatus'])->name('dashboard.inquiries.status');
});

require __DIR__.'/settings.php';
