import { Head } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import VehicleCard from '@/components/vehicle-card';
import { vehicles } from '@/data/vehicles';

export default function Inventory() {
    return (
        <PublicShell>
            <Head>
                <title>Cars for Sale | Featured Vehicles | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Browse premium and curated cars for sale at Eazy's Cars. Sourced on request across Europe, USA, Canada, and Japan including Mercedes-Benz, Toyota, Lexus and more."
                />
                <link rel="canonical" href="https://eazyscars.be/cars-for-sale" />
                <meta property="og:title" content="Cars for Sale | Eazy's Cars" />
                <meta
                    property="og:description"
                    content="Browse vehicles available through Eazy's Cars or request a vehicle to be sourced specifically for you."
                />
                <meta property="og:url" content="https://eazyscars.be/cars-for-sale" />
            </Head>

            {/* Page Hero Section */}
            <section className="bg-gradient-to-br from-[#0b1119] to-[#151d28] py-[110px] pb-[70px] text-white">
                <div className="mx-auto w-[min(1180px,92%)]">
                    <p className="mb-3.5 text-[12px] font-extrabold tracking-[2px] text-[#d8ad55] uppercase">
                        CARS FOR SALE
                    </p>
                    <h1 className="mb-4.5 text-[clamp(42px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-2px] text-white">
                        Featured Vehicles
                    </h1>
                    <p className="max-w-[720px] text-[18px] leading-relaxed text-[#c5cbd2]">
                        Browse vehicles available through Eazy's Cars or request
                        a vehicle to be sourced specifically for you.
                    </p>
                </div>
            </section>

            {/* Page Section: Vehicles Grid */}
            <section className="bg-white py-[85px]">
                <div className="mx-auto w-[min(1180px,92%)]">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {vehicles.map((vehicle, index) => (
                            <VehicleCard
                                key={vehicle.name}
                                vehicle={vehicle}
                                index={index}
                            />
                        ))}
                    </div>

                    <p className="mt-8 text-[12px] text-[#69717c]">
                        Prices are available on request and depend on
                        specification, condition, mileage, sourcing location,
                        transport and applicable import costs.
                    </p>
                </div>
            </section>
        </PublicShell>
    );
}
