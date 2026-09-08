import { Head } from '@inertiajs/react';
import {
    ArrowUpRight,
    CarFront,
    CircleDollarSign,
    MessageSquareText,
    TrendingUp,
} from 'lucide-react';
import { dashboard } from '@/routes';

const stats = [
    {
        label: 'Live vehicles',
        value: '24',
        change: '+3 this month',
        icon: CarFront,
    },
    {
        label: 'Open enquiries',
        value: '18',
        change: '6 need replies',
        icon: MessageSquareText,
    },
    {
        label: 'Inventory value',
        value: '₦2.84B',
        change: '+8.2% this month',
        icon: CircleDollarSign,
    },
];

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-full bg-[#f5f3ee] p-5 text-[#1b1d1a] lg:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[.2em] text-[#8b7350] uppercase">
                                Eazy Cars admin
                            </p>
                            <h1 className="font-display mt-2 text-4xl">
                                Good afternoon.
                            </h1>
                        </div>
                        <button className="rounded-full bg-[#1b1d1a] px-5 py-3 text-xs font-bold text-white">
                            + Add vehicle
                        </button>
                    </div>
                    <div className="mt-8 grid gap-4 lg:grid-cols-3">
                        {stats.map(({ label, value, change, icon: Icon }) => (
                            <div
                                key={label}
                                className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(25,27,24,.05)]"
                            >
                                <div className="flex items-start justify-between">
                                    <p className="text-sm text-black/50">
                                        {label}
                                    </p>
                                    <span className="grid size-9 place-items-center rounded-full bg-[#eee8dd]">
                                        <Icon className="size-4" />
                                    </span>
                                </div>
                                <p className="font-display mt-8 text-4xl">
                                    {value}
                                </p>
                                <p className="mt-2 flex items-center gap-1 text-xs text-emerald-700">
                                    <TrendingUp className="size-3" /> {change}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_.7fr]">
                        <section className="rounded-3xl bg-[#1d201c] p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/50">
                                        Enquiry activity
                                    </p>
                                    <p className="font-display mt-1 text-2xl">
                                        Last 7 days
                                    </p>
                                </div>
                                <span className="text-xs text-[#d8c4a0]">
                                    42 enquiries
                                </span>
                            </div>
                            <div className="mt-12 flex h-48 items-end gap-3">
                                {[42, 63, 48, 78, 58, 92, 72].map(
                                    (height, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-1 flex-col items-center gap-3"
                                        >
                                            <div
                                                className="w-full rounded-t-lg bg-[#d8c4a0] transition hover:bg-white"
                                                style={{ height: `${height}%` }}
                                            />
                                            <span className="text-[10px] text-white/35">
                                                {
                                                    [
                                                        'M',
                                                        'T',
                                                        'W',
                                                        'T',
                                                        'F',
                                                        'S',
                                                        'S',
                                                    ][index]
                                                }
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </section>
                        <section className="rounded-3xl bg-[#d8c4a0] p-6">
                            <p className="text-sm font-semibold">
                                Top interest
                            </p>
                            <p className="font-display mt-10 text-3xl">
                                Aurelia GT
                            </p>
                            <p className="mt-2 text-sm text-black/55">
                                9 enquiries this week
                            </p>
                            <button className="mt-10 flex items-center gap-2 text-xs font-bold">
                                View listing <ArrowUpRight className="size-4" />
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = { breadcrumbs: [{ title: 'Dashboard', href: dashboard() }] };
