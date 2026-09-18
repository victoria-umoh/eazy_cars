import { useState, ChangeEvent, FormEvent } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import {
    Edit2,
    Plus,
    Search,
    Trash2,
    Upload,
    X,
    CheckCircle2,
    Car,
} from 'lucide-react';
import dashboardRoutes from '@/routes/dashboard';

export interface VehicleRecord {
    id: string;
    brand: string;
    model: string;
    name: string;
    tag: string;
    year_range?: string;
    yearRange?: string;
    transmission: string;
    fuel: string;
    price?: string;
    status: string;
    image_class?: string;
    imageClass?: string;
    image_url?: string;
    imageUrl?: string;
    description?: string;
    is_featured?: boolean;
    created_at?: string;
}

export default function AdminInventory({
    vehicles = [],
}: {
    vehicles?: VehicleRecord[];
}) {
    const { flash } = usePage<{ flash?: { success?: string; error?: string } }>().props;

    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState<VehicleRecord | null>(null);
    const [processing, setProcessing] = useState(false);

    // Form state
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [name, setName] = useState('');
    const [tag, setTag] = useState('Europe / USA');
    const [yearRange, setYearRange] = useState('');
    const [transmission, setTransmission] = useState('Automatic');
    const [fuel, setFuel] = useState('Petrol');
    const [price, setPrice] = useState('On Request');
    const [status, setStatus] = useState('SOURCE ON REQUEST');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const openCreateModal = () => {
        setEditingVehicle(null);
        setBrand('');
        setModel('');
        setName('');
        setTag('Europe / USA');
        setYearRange('2018–2022');
        setTransmission('Automatic');
        setFuel('Petrol');
        setPrice('On Request');
        setStatus('SOURCE ON REQUEST');
        setDescription('');
        setImageFile(null);
        setImagePreview(null);
        setIsModalOpen(true);
    };

    const openEditModal = (vehicle: VehicleRecord) => {
        setEditingVehicle(vehicle);
        setBrand(vehicle.brand || '');
        setModel(vehicle.model || '');
        setName(vehicle.name || '');
        setTag(vehicle.tag || 'Europe / USA');
        setYearRange(vehicle.year_range || vehicle.yearRange || '');
        setTransmission(vehicle.transmission || 'Automatic');
        setFuel(vehicle.fuel || 'Petrol');
        setPrice(vehicle.price || 'On Request');
        setStatus(vehicle.status || 'SOURCE ON REQUEST');
        setDescription(vehicle.description || '');
        setImageFile(null);
        setImagePreview(vehicle.imageUrl || vehicle.image_url || null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingVehicle(null);
        setImageFile(null);
        setImagePreview(null);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        const formData = new FormData();
        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('name', name || `${brand} ${model}`);
        formData.append('tag', tag);
        formData.append('year_range', yearRange);
        formData.append('transmission', transmission);
        formData.append('fuel', fuel);
        formData.append('price', price);
        formData.append('status', status);
        formData.append('description', description);

        if (imageFile) {
            formData.append('image', imageFile);
        }

        if (editingVehicle) {
            router.post(`/dashboard/inventory/${editingVehicle.id}`, formData, {
                onSuccess: () => {
                    setProcessing(false);
                    closeModal();
                },
                onError: () => setProcessing(false),
            });
        } else {
            router.post('/dashboard/inventory', formData, {
                onSuccess: () => {
                    setProcessing(false);
                    closeModal();
                },
                onError: () => setProcessing(false),
            });
        }
    };

    const handleDelete = (vehicle: VehicleRecord) => {
        if (
            confirm(
                `Are you sure you want to delete ${vehicle.name} from the inventory? This cannot be undone.`
            )
        ) {
            router.delete(`/dashboard/inventory/${vehicle.id}`);
        }
    };

    const filtered = vehicles.filter((v) => {
        const matchesSearch =
            v.name.toLowerCase().includes(search.toLowerCase()) ||
            v.tag.toLowerCase().includes(search.toLowerCase()) ||
            v.brand.toLowerCase().includes(search.toLowerCase()) ||
            v.model.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === 'ALL' ||
            v.status.toUpperCase() === statusFilter.toUpperCase();

        return matchesSearch && matchesStatus;
    });

    return (
        <>
            <Head title="Manage inventory" />
            <div className="min-h-full bg-[#f5f3ee] p-5 lg:p-8">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[.2em] text-[#8b7350] uppercase">
                                Showroom Management
                            </p>
                            <h1 className="font-display mt-2 text-4xl text-[#171a1f]">
                                Inventory & Sourcing Catalog
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-black/50">
                                {vehicles.length} Vehicles
                            </span>
                            <button
                                onClick={openCreateModal}
                                className="inline-flex items-center gap-2 rounded-xl bg-[#d8ad55] px-4 py-2.5 text-xs font-extrabold text-black shadow-sm transition hover:bg-[#c59b43]"
                            >
                                <Plus className="size-4" />
                                Add Vehicle
                            </button>
                        </div>
                    </div>

                    {/* Flash Message */}
                    {flash?.success && (
                        <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800 border border-emerald-200">
                            <CheckCircle2 className="size-5 text-emerald-600 shrink-0" />
                            {flash.success}
                        </div>
                    )}

                    {/* Filter Tabs */}
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-2 flex-wrap">
                            {['ALL', 'SOURCE ON REQUEST', 'AVAILABLE', 'RESERVED', 'SOLD'].map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setStatusFilter(tab)}
                                        className={`rounded-full px-4 py-2 text-xs font-bold transition capitalize ${
                                            statusFilter === tab
                                                ? 'bg-[#171a1f] text-white'
                                                : 'bg-white text-black/60 hover:bg-black/5'
                                        }`}
                                    >
                                        {tab.toLowerCase()}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* Table Container */}
                    <div className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
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
                                        <th className="px-6 py-4">Price</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="p-10 text-center text-sm text-black/40"
                                            >
                                                No vehicles match your criteria.
                                            </td>
                                        </tr>
                                    ) : (
                                        filtered.map((vehicle) => {
                                            const photo =
                                                vehicle.imageUrl || vehicle.image_url;
                                            const years =
                                                vehicle.yearRange || vehicle.year_range;

                                            return (
                                                <tr
                                                    key={vehicle.id}
                                                    className="border-t border-black/5 hover:bg-[#faf9f6]"
                                                >
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            {photo ? (
                                                                <img
                                                                    src={photo}
                                                                    alt={vehicle.name}
                                                                    className="size-12 rounded-lg object-cover border border-black/10"
                                                                />
                                                            ) : (
                                                                <div className="flex size-12 items-center justify-center rounded-lg bg-[#eee8dd] text-[#8b7350]">
                                                                    <Car className="size-6" />
                                                                </div>
                                                            )}
                                                            <div>
                                                                <p className="font-semibold text-[#171a1f]">
                                                                    {vehicle.name}
                                                                </p>
                                                                <p className="text-xs text-black/45">
                                                                    Years: {years || 'N/A'}
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
                                                    <td className="px-6 py-4 text-xs font-semibold text-[#171a1f]">
                                                        {vehicle.price || 'On Request'}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                                                            {vehicle.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button
                                                                onClick={() => openEditModal(vehicle)}
                                                                title="Edit Vehicle"
                                                                className="rounded-lg p-2 text-black/50 hover:bg-black/5 hover:text-black transition"
                                                            >
                                                                <Edit2 className="size-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(vehicle)}
                                                                title="Delete Vehicle"
                                                                className="rounded-lg p-2 text-rose-500 hover:bg-rose-50 transition"
                                                            >
                                                                <Trash2 className="size-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Create / Edit Modal Dialog */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
                            <div className="flex items-center justify-between border-b border-black/10 pb-4">
                                <h3 className="font-display text-2xl font-bold text-[#171a1f]">
                                    {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="rounded-full p-2 text-black/40 hover:bg-black/5 hover:text-black"
                                >
                                    <X className="size-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Brand *
                                        </label>
                                        <input
                                            required
                                            value={brand}
                                            onChange={(e) => {
                                                setBrand(e.target.value);
                                                if (!editingVehicle) {
                                                    setName(`${e.target.value} ${model}`.trim());
                                                }
                                            }}
                                            placeholder="e.g. Mercedes-Benz"
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Model *
                                        </label>
                                        <input
                                            required
                                            value={model}
                                            onChange={(e) => {
                                                setModel(e.target.value);
                                                if (!editingVehicle) {
                                                    setName(`${brand} ${e.target.value}`.trim());
                                                }
                                            }}
                                            placeholder="e.g. GLE350"
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/70 uppercase">
                                        Full Display Name
                                    </label>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Mercedes-Benz GLE350 AMG"
                                        className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Origin / Tag *
                                        </label>
                                        <input
                                            required
                                            value={tag}
                                            onChange={(e) => setTag(e.target.value)}
                                            placeholder="e.g. Europe / USA"
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Year / Range *
                                        </label>
                                        <input
                                            required
                                            value={yearRange}
                                            onChange={(e) => setYearRange(e.target.value)}
                                            placeholder="e.g. 2018–2022"
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Price
                                        </label>
                                        <input
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="e.g. On Request or $45,000"
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Transmission
                                        </label>
                                        <select
                                            value={transmission}
                                            onChange={(e) => setTransmission(e.target.value)}
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        >
                                            <option value="Automatic">Automatic</option>
                                            <option value="Manual">Manual</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Fuel
                                        </label>
                                        <select
                                            value={fuel}
                                            onChange={(e) => setFuel(e.target.value)}
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        >
                                            <option value="Petrol">Petrol</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Electric">Electric</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase">
                                            Status
                                        </label>
                                        <select
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                        >
                                            <option value="SOURCE ON REQUEST">SOURCE ON REQUEST</option>
                                            <option value="AVAILABLE">AVAILABLE</option>
                                            <option value="RESERVED">RESERVED</option>
                                            <option value="SOLD">SOLD</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/70 uppercase">
                                        Vehicle Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-4">
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="size-16 rounded-xl object-cover border border-black/10"
                                            />
                                        )}
                                        <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-black/20 bg-[#faf9f6] px-4 py-3 text-xs font-semibold text-black/70 hover:bg-black/5 transition">
                                            <Upload className="size-4 text-[#8b7350]" />
                                            {imageFile ? imageFile.name : 'Choose Image File (JPG/PNG)'}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/70 uppercase">
                                        Description
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Add notes about vehicle specs, condition, or sourcing locations..."
                                        className="mt-1 w-full rounded-xl border border-black/10 bg-[#faf9f6] p-3 text-sm outline-none focus:border-[#d8ad55]"
                                    />
                                </div>

                                <div className="flex items-center justify-end gap-3 border-t border-black/10 pt-4">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="rounded-xl px-5 py-2.5 text-xs font-bold text-black/60 hover:bg-black/5 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-xl bg-[#d8ad55] px-6 py-2.5 text-xs font-extrabold text-black hover:bg-[#c59b43] transition disabled:opacity-50"
                                    >
                                        {processing
                                            ? 'Saving...'
                                            : editingVehicle
                                            ? 'Save Changes'
                                            : 'Create Vehicle'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

AdminInventory.layout = {
    breadcrumbs: [{ title: 'Inventory', href: dashboardRoutes.inventory() }],
};
