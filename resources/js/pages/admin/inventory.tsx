import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { MoreHorizontal, Search } from 'lucide-react';
import { vehicles } from '@/data/vehicles';
import dashboardRoutes from '@/routes/dashboard';

export default function AdminInventory() {
    const [search, setSearch] = useState('');

    const filtered = vehicles.filter((v) =>
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.tag.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Head title="Manage inventory" />
            <div className="min-h-full bg-[#f5f3ee] p-5 lg:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs font-bold tracking-[.2em] text-[#8b7350] uppercase">
                                Showroom
                            </p>
                            <h1 className="font-display mt-2 text-4xl">
                                Inventory & Sourcing Catalog
                            </h1>
                        </div>
                        <span className="text-sm font-semibold text-black/50">
                            {vehicles.length} Vehicles Cataloged
                        </span>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center gap-3 border-b border-black/5 p-5">
                            <Search className="size-4 text-black/35" />
                            <input
                                placeholder="Search inventory by make, model or market..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-transparent text-sm outline-none"
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#f8f6f1] text-[10px] tracking-[.16em] text-black/40 uppercase">
                                    <tr>
                                        <th className="px-6 py-4">Vehicle</th>
                                        <th className="px-6 py-4">Market Origin</th>
                                        <th className="px-6 py-4">Specs</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((vehicle) => (
                                        <tr
                                            key={vehicle.model}
                                            className="border-t border-black/5 hover:bg-[#faf9f6]"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={vehicle.imageUrl}
                                                        alt={vehicle.name}
                                                        className="size-12 rounded-lg object-cover border border-black/10"
                                                    />
                                                    <div>
                                                        <p className="font-semibold text-[#171a1f]">
                                                            {vehicle.name}
                                                        </p>
                                                        <p className="text-xs text-black/45">
                                                            Years: {vehicle.yearRange}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-black/70">
                                                <span className="inline-block rounded-md bg-[#eee8dd] px-2.5 py-1 text-xs text-[#8b7350] font-bold">
                                                    {vehicle.tag}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-xs text-black/60">
                                                {vehicle.transmission} • {vehicle.fuel}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                                                    {vehicle.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <MoreHorizontal className="size-4 text-black/40" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
AdminInventory.layout = {
    breadcrumbs: [{ title: 'Inventory', href: dashboardRoutes.inventory() }],
};
