import { Link } from '@inertiajs/react';
import type { Vehicle } from '@/data/vehicles';
import { contact } from '@/routes';

export default function VehicleCard({
    vehicle,
}: {
    vehicle: Vehicle;
    index?: number;
}) {
    return (
        <article className="overflow-hidden rounded-[20px] border border-[#e7e9ed] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <div className="flex h-[230px] items-center justify-center bg-gradient-to-br from-[#2b313a] to-[#0d1117] p-4 text-center font-sans text-[28px] font-extrabold leading-[1.1] text-white">
                <div>
                    <div>{vehicle.brand}</div>
                    <div>{vehicle.model}</div>
                </div>
            </div>
            <div className="p-6">
                <span className="inline-block text-[11px] font-extrabold tracking-[1.5px] text-[#d8ad55] uppercase">
                    {vehicle.tag}
                </span>
                <h3 className="mt-2 mb-2 text-[21px] font-bold text-[#171a1f]">
                    {vehicle.name}
                </h3>
                <p className="mb-3 text-[14px] text-[#69717c]">
                    {vehicle.yearRange} | {vehicle.transmission} | {vehicle.fuel}
                </p>
                <div>
                    <span className="inline-block rounded-full bg-[#f2f3f5] px-3 py-1.5 text-[10px] font-extrabold tracking-[1px] text-[#555]">
                        {vehicle.status}
                    </span>
                </div>
                <div className="mt-3">
                    <Link
                        href={contact()}
                        className="inline-flex items-center justify-center rounded-[10px] bg-[#111111] px-4 py-2.5 text-[13px] font-extrabold text-white transition hover:bg-[#d8ad55] hover:text-[#111111]"
                    >
                        Request Price
                    </Link>
                </div>
            </div>
        </article>
    );
}
