import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    CarFront,
    Globe,
    Mail,
    MessageSquareText,
    TrendingUp,
} from 'lucide-react';
import dashboardRoutes from '@/routes/dashboard';

interface RecentInquiry {
    id: number;
    name: string;
    phone: string;
    email: string;
    make?: string;
    model?: string;
    requirements?: string;
    status: string;
    created_at: string;
}

interface DashboardProps {
    vehicleCount?: number;
    inquiryCount?: number;
    newInquiryCount?: number;
    recentInquiries?: RecentInquiry[];
}

export default function Dashboard({
    vehicleCount = 8,
    inquiryCount = 0,
    newInquiryCount = 0,
    recentInquiries = [],
}: DashboardProps) {
    const stats = [
        {
            label: 'Featured vehicles',
            value: vehicleCount.toString(),
            change: 'Cataloged & ready',
            icon: CarFront,
            href: dashboardRoutes.inventory(),
        },
        {
            label: 'Total enquiries',
            value: inquiryCount.toString(),
            change: `${newInquiryCount} new inquiries`,
            icon: MessageSquareText,
            href: dashboardRoutes.inquiries(),
        },
        {
            label: 'Sourcing markets',
            value: '4',
            change: 'EU, US, CA, JP',
            icon: Globe,
            href: '/markets',
        },
    ];

    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-full bg-[#f5f3ee] p-5 text-[#1b1d1a] lg:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[.2em] text-[#8b7350] uppercase">
                                Eazy's Cars Admin
                            </p>
                            <h1 className="font-display mt-2 text-4xl">
                                Overview
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href={dashboardRoutes.inquiries()}
                                className="rounded-full bg-[#1b1d1a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#d8ad55] hover:text-[#111]"
                            >
                                View all leads ({inquiryCount})
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-3">
                        {stats.map(({ label, value, change, icon: Icon, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(25,27,24,.05)] transition hover:shadow-[0_16px_45px_rgba(25,27,24,.08)]"
                            >
                                <div className="flex items-start justify-between">
                                    <p className="text-sm text-black/50">
                                        {label}
                                    </p>
                                    <span className="grid size-9 place-items-center rounded-full bg-[#eee8dd]">
                                        <Icon className="size-4 text-[#8b7350]" />
                                    </span>
                                </div>
                                <p className="font-display mt-8 text-4xl font-bold">
                                    {value}
                                </p>
                                <p className="mt-2 flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                                    <TrendingUp className="size-3" /> {change}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between border-b border-black/5 pb-4">
                            <div>
                                <h2 className="text-lg font-bold text-[#171a1f]">
                                    Recent Customer Inquiries
                                </h2>
                                <p className="text-xs text-black/45">
                                    Live submissions from your website's sourcing and contact forms
                                </p>
                            </div>
                            <Link
                                href={dashboardRoutes.inquiries()}
                                className="flex items-center gap-1 text-xs font-bold text-[#8b7350] hover:underline"
                            >
                                Manage inquiries <ArrowUpRight className="size-3.5" />
                            </Link>
                        </div>

                        {recentInquiries.length === 0 ? (
                            <div className="py-12 text-center text-black/40">
                                <Mail className="mx-auto size-8 text-black/20" />
                                <p className="mt-3 text-sm font-semibold">No inquiries yet</p>
                                <p className="text-xs">
                                    When clients submit requests on `/find-your-car` or `/contact`, they will appear here in real time.
                                </p>
                            </div>
                        ) : (
                            <div className="divide-y divide-black/5">
                                {recentInquiries.map((inquiry) => (
                                    <div
                                        key={inquiry.id}
                                        className="flex flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-sm text-[#171a1f]">
                                                    {inquiry.name}
                                                </span>
                                                <span className="rounded-full bg-[#f2f3f5] px-2 py-0.5 text-[10px] font-extrabold uppercase">
                                                    {inquiry.status}
                                                </span>
                                            </div>
                                            <p className="text-xs text-black/50">
                                                {inquiry.email} • {inquiry.phone}
                                                {inquiry.make && ` • ${inquiry.make} ${inquiry.model}`}
                                            </p>
                                        </div>
                                        <span className="text-[11px] text-black/40">
                                            {new Date(inquiry.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = { breadcrumbs: [{ title: 'Dashboard', href: dashboardRoutes.dashboard() }] };
