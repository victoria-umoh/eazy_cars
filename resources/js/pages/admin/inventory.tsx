import { Head } from '@inertiajs/react';
import { MoreHorizontal, Plus, Search } from 'lucide-react';
import { vehicles } from '@/data/vehicles';
import dashboardRoutes from '@/routes/dashboard';

export default function AdminInventory() {
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
                                Inventory
                            </h1>
                        </div>
                        <button className="flex items-center gap-2 rounded-full bg-[#1b1d1a] px-5 py-3 text-xs font-bold text-white">
                            <Plus className="size-4" /> Add vehicle
                        </button>
                    </div>
                    <div className="mt-8 overflow-hidden rounded-3xl border border-black/5 bg-white">
                        <div className="flex items-center gap-3 border-b border-black/5 p-5">
                            <Search className="size-4 text-black/35" />
                            <input
                                placeholder="Search inventory"
                                className="w-full bg-transparent text-sm outline-none"
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#f8f6f1] text-[10px] tracking-[.16em] text-black/40 uppercase">
                                    <tr>
                                        <th className="px-6 py-4">Vehicle</th>
                                        <th className="px-6 py-4">Price</th>
                                        <th className="px-6 py-4">Mileage</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((vehicle) => (
                                        <tr
                                            key={vehicle.name}
                                            className="border-t border-black/5"
                                        >
                                            <td className="px-6 py-4">
                                                <p className="font-semibold">
                                                    {vehicle.name}
                                                </p>
                                                <p className="text-xs text-black/40">
                                                    {vehicle.year}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {vehicle.price}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-black/55">
                                                {vehicle.mileage}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700 uppercase">
                                                    Published
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <MoreHorizontal className="size-4" />
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
