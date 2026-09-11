import { Link } from '@inertiajs/react';
import type { Vehicle } from '@/data/vehicles';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
    return (
        <article className="vehicle-card">
            <div
                className={`vehicle-image ${vehicle.imageClass}`}
                role="img"
                aria-label={vehicle.name}
            />
            <div className="vehicle-body">
                <span className="tag">{vehicle.tag}</span>
                <h3>{vehicle.name}</h3>
                <p>
                    {vehicle.yearRange} | {vehicle.transmission} | {vehicle.fuel}
                </p>
                <div>
                    <span className="status">{vehicle.status}</span>
                </div>
                <div style={{ marginTop: '12px' }}>
                    <Link
                        className="btn btn-primary small"
                        href="/find-your-car"
                    >
                        Request Price
                    </Link>
                </div>
            </div>
        </article>
    );
}
