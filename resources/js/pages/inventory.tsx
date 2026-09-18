import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';
import VehicleCard from '@/components/vehicle-card';
import { vehicles as fallbackVehicles, type Vehicle } from '@/data/vehicles';

export default function Inventory({
    vehicles = [],
}: {
    vehicles?: Vehicle[];
}) {
    const list = vehicles.length > 0 ? vehicles : fallbackVehicles;

    return (
        <PublicShell>
            <SeoHead
                title="Cars for Sale & Luxury Imports | Buy Second Handed Cars in Europe, Belgium, Canada & USA"
                description="Buy second handed cars & luxury cars in Europe, Belgium, Canada and USA. Browse Mercedes-Benz GLE 350 AMG, ML350, GLC300, Toyota Highlander, Lexus RX350. Direct export shipping to Africa and Nigeria."
                keywords={[
                    'cars for sale belgium',
                    'luxury cars for sale',
                    'Buy second handed cars in Europe, Belgium, Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium, Canada and USA',
                    'Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium, Canada and USA ship to Nigeria',
                    'mercedes-benz gle 350 amg for sale',
                    'mercedes ml350 import',
                    'toyota highlander usa canada import',
                    'lexus rx350 japan usa',
                    'curated performance cars',
                    'car sourcing belgium',
                    'vehicle sourcing europe',
                    'belgium car dealer export',
                ]}
                canonical="/cars-for-sale"
            />

            <section className="page-hero page-hero-mercedes-gle350">
                <div className="container">
                    <p className="eyebrow">CARS FOR SALE • LUXURY & SOURCING</p>
                    <h1>Featured Vehicles</h1>
                    <p>
                        Buy second handed cars and luxury vehicles in Europe, Belgium, Canada and USA. Available directly or sourced on request with ocean shipping to Africa and Nigeria.
                    </p>
                    <div className="hero-actions">
                        <Link className="btn btn-primary" href="/cars-for-sale">
                            🚗 View All Cars →
                        </Link>
                        <Link className="btn btn-light" href="/find-your-car">
                            🔎 Request a Vehicle
                        </Link>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="vehicle-grid">
                        {list.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id || vehicle.model}
                                vehicle={vehicle}
                            />
                        ))}
                    </div>
                    <p className="note">
                        Prices are available on request and depend on specification,
                        condition, mileage, sourcing location, transport and
                        applicable import costs.
                    </p>
                </div>
            </section>
        </PublicShell>
    );
}
