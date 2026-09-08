<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InquiryController extends Controller
{
    /**
     * Display a listing of the inquiries for admin dashboard.
     */
    public function index(): Response
    {
        $inquiries = Inquiry::query()
            ->latest()
            ->get();

        return Inertia::render('admin/inquiries', [
            'inquiries' => $inquiries,
        ]);
    }

    /**
     * Store a newly created inquiry / sourcing request.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255'],
            'make' => ['nullable', 'string', 'max:100'],
            'model' => ['nullable', 'string', 'max:100'],
            'year' => ['nullable', 'string', 'max:50'],
            'budget' => ['nullable', 'string', 'max:100'],
            'destination' => ['nullable', 'string', 'max:100'],
            'requirements' => ['nullable', 'string', 'max:2000'],
            'type' => ['nullable', 'string', 'in:sourcing,general,auction,export'],
        ]);

        $validated['type'] = $validated['type'] ?? 'sourcing';
        $validated['status'] = 'new';

        Inquiry::create($validated);

        return back()->with('success', 'Your vehicle request has been received. We will contact you shortly!');
    }

    /**
     * Update status of an inquiry.
     */
    public function updateStatus(Request $request, Inquiry $inquiry): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'string', 'in:new,in_progress,contacted,closed'],
        ]);

        $inquiry->update($validated);

        return back()->with('success', 'Inquiry status updated successfully.');
    }
}
