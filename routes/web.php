<?php

use App\Http\Controllers\InquiryController;
use Illuminate\Support\Facades\Route;

// Public Front-End Routes matching eazyscars.be
Route::inertia('/', 'welcome')->name('home');
Route::inertia('inventory', 'inventory')->name('inventory');
Route::inertia('cars-for-sale', 'inventory')->name('cars-for-sale');
Route::inertia('find-your-car', 'contact')->name('find-your-car');
Route::inertia('about', 'about')->name('about');
Route::inertia('contact', 'contact')->name('contact');

// Public Inquiry Submission Route
Route::post('inquiries', [InquiryController::class, 'store'])->name('inquiries.store');

// Authenticated Admin Dashboard Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('dashboard/inventory', 'admin/inventory')->name('dashboard.inventory');
    Route::get('dashboard/inquiries', [InquiryController::class, 'index'])->name('dashboard.inquiries');
    Route::patch('dashboard/inquiries/{inquiry}/status', [InquiryController::class, 'updateStatus'])->name('dashboard.inquiries.status');
});

require __DIR__.'/settings.php';
