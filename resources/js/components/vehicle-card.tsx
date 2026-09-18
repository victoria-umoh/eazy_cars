import { Link } from '@inertiajs/react';
import type { Vehicle } from '@/data/vehicles';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
    const imageUrl = vehicle.imageUrl || (vehicle as any).image_url;
    const imageClass = vehicle.imageClass || (vehicle as any).image_class || '';
    const yearRange = vehicle.yearRange || (vehicle as any).year_range || '';

    const imageStyle = imageUrl
        ? {
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }
        : undefined;

    return (
        <article className="vehicle-card">
            <div
                className={`vehicle-image ${imageClass}`}
                style={imageStyle}
                role="img"
                aria-label={vehicle.name}
            />
            <div className="vehicle-body">
                <span className="tag">{vehicle.tag}</span>
                <h3>{vehicle.name}</h3>
                <p>
                    {yearRange} | {vehicle.transmission} | {vehicle.fuel}
                </p>
                <span className="status">{vehicle.status}</span>
                <br />
                <Link
                    className="btn btn-primary small"
                    href="/find-your-car"
                >
                    Request Price
                </Link>
            </div>
        </article>
    );
}
