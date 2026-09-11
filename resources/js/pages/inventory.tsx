import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import VehicleCard from '@/components/vehicle-card';
import { vehicles } from '@/data/vehicles';

export default function Inventory() {
    return (
        <PublicShell>
            <Head>
                <title>Cars for Sale | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Browse vehicles available through Eazy's Cars or request a vehicle to be sourced specifically for you."
                />
            </Head>

            <section className="page-hero page-hero-mercedes-gle350">
                <div className="container">
                    <p className="eyebrow">CARS FOR SALE</p>
                    <h1>Featured Vehicles</h1>
                    <p>
                        Browse vehicles available through Eazy's Cars or request a
                        vehicle to be sourced specifically for you.
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
                        {vehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.model} vehicle={vehicle} />
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
