import { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import {
    Calendar,
    CheckCircle2,
    Clock,
    DollarSign,
    Globe,
    Mail,
    Phone,
} from 'lucide-react';
import dashboardRoutes from '@/routes/dashboard';

interface InquiryItem {
    id: number;
    name: string;
    phone: string;
    email: string;
    make?: string;
    model?: string;
    year?: string;
    budget?: string;
    destination?: string;
    requirements?: string;
    type: string;
    status: string;
    created_at: string;
}

export default function Inquiries({
    inquiries = [],
}: {
    inquiries?: InquiryItem[];
}) {
    const [filter, setFilter] = useState<'all' | 'new' | 'in_progress' | 'closed'>('all');

    const filtered = inquiries.filter((item) => {
        if (filter === 'all') return true;
        return item.status === filter;
    });

    const updateStatus = (id: number, status: string) => {
        router.patch(`/dashboard/inquiries/${id}/status`, { status });
    };

    return (
        <>
            <Head title="Customer Inquiries & Sourcing Requests" />
            <div className="min-h-full bg-[#f5f3ee] p-5 lg:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[.2em] text-[#8b7350] uppercase">
                                Lead Management
                            </p>
                            <h1 className="font-display mt-2 text-4xl text-[#171a1f]">
                                Inquiries & Sourcing
                            </h1>
                        </div>

                        <div className="flex gap-2">
                            {(['all', 'new', 'in_progress', 'closed'] as const).map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setFilter(tab)}
                                        className={`rounded-full px-4 py-2 text-xs font-bold transition capitalize ${
                                            filter === tab
                                                ? 'bg-[#171a1f] text-white'
                                                : 'bg-white text-black/60 hover:bg-black/5'
                                        }`}
                                    >
                                        {tab.replace('_', ' ')}
                                    </button>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4">
                        {filtered.length === 0 ? (
                            <div className="rounded-3xl border border-black/5 bg-white p-12 text-center text-black/50">
                                <Mail className="mx-auto size-10 text-black/25" />
                                <p className="mt-4 text-base font-semibold">
                                    No inquiries found
                                </p>
                                <p className="text-xs text-black/40">
                                    New car requests and inquiries submitted on
                                    the website will appear here.
                                </p>
                            </div>
                        ) : (
                            filtered.map((item) => (
                                <article
                                    key={item.id}
                                    className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.03)]"
                                >
                                    <div className="flex flex-col justify-between gap-4 border-b border-black/5 pb-4 sm:flex-row sm:items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-10 items-center justify-center rounded-full bg-[#eee8dd] text-[#8b7350]">
                                                <Mail className="size-5" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-[#171a1f]">
                                                        {item.name}
                                                    </h3>
                                                    <span
                                                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase ${
                                                            item.status === 'new'
                                                                ? 'bg-[#d8ad55] text-black'
                                                                : item.status === 'in_progress'
                                                                  ? 'bg-blue-100 text-blue-800'
                                                                  : 'bg-gray-100 text-gray-700'
                                                        }`}
                                                    >
                                                        {item.status.replace('_', ' ')}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-black/45">
                                                    Requested on{' '}
                                                    {new Date(
                                                        item.created_at,
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Status Toggle Buttons */}
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={item.status}
                                                onChange={(e) =>
                                                    updateStatus(
                                                        item.id,
                                                        e.target.value,
                                                    )
                                                }
                                                className="rounded-lg border border-black/10 bg-[#f8f6f1] px-3 py-1.5 text-xs font-semibold outline-none"
                                            >
                                                <option value="new">Mark New</option>
                                                <option value="in_progress">
                                                    In Progress
                                                </option>
                                                <option value="contacted">
                                                    Contacted
                                                </option>
                                                <option value="closed">
                                                    Closed
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Vehicle & Sourcing Details Grid */}
                                    <div className="mt-4 grid gap-4 text-xs sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="flex items-center gap-2 text-black/70">
                                            <Phone className="size-3.5 text-black/40" />
                                            <span>{item.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-black/70">
                                            <Mail className="size-3.5 text-black/40" />
                                            <span>{item.email}</span>
                                        </div>
                                        {(item.make || item.model) && (
                                            <div className="flex items-center gap-2 text-black/70 font-semibold">
                                                <span>
                                                    🚗 {item.make} {item.model}
                                                </span>
                                            </div>
                                        )}
                                        {item.budget && (
                                            <div className="flex items-center gap-2 text-black/70">
                                                <DollarSign className="size-3.5 text-black/40" />
                                                <span>Budget: {item.budget}</span>
                                            </div>
                                        )}
                                        {item.year && (
                                            <div className="flex items-center gap-2 text-black/70">
                                                <Calendar className="size-3.5 text-black/40" />
                                                <span>Year: {item.year}</span>
                                            </div>
                                        )}
                                        {item.destination && (
                                            <div className="flex items-center gap-2 text-black/70">
                                                <Globe className="size-3.5 text-black/40" />
                                                <span>
                                                    Dest: {item.destination}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {item.requirements && (
                                        <div className="mt-4 rounded-xl bg-[#f8f6f1] p-3 text-xs text-black/70">
                                            <strong>Requirements:</strong>{' '}
                                            {item.requirements}
                                        </div>
                                    )}
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

Inquiries.layout = {
    breadcrumbs: [{ title: 'Inquiries', href: dashboardRoutes.inquiries() }],
};
