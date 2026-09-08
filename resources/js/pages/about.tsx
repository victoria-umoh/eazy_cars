import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import { contact } from '@/routes';

export default function About() {
    return (
        <PublicShell>
            <Head title="About Us | Eazy's Cars" />

            {/* Page Hero */}
            <section className="bg-gradient-to-br from-[#0b1119] to-[#151d28] py-[110px] pb-[70px] text-white">
                <div className="mx-auto w-[min(1180px,92%)]">
                    <p className="mb-3.5 text-[12px] font-extrabold tracking-[2px] text-[#d8ad55] uppercase">
                        ABOUT EAZY'S CARS
                    </p>
                    <h1 className="mb-4.5 text-[clamp(42px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-2px] text-white">
                        A sourcing partner for customers and dealers.
                    </h1>
                    <p className="max-w-[720px] text-[18px] leading-relaxed text-[#c5cbd2]">
                        Eazy's Cars is a Belgium-based vehicle sourcing business
                        focused on helping customers and dealers find vehicles
                        from international markets.
                    </p>
                </div>
            </section>

            {/* Page Section: Our Approach */}
            <section className="bg-white py-[85px]">
                <div className="mx-auto grid w-[min(1180px,92%)] gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 text-[12px] font-extrabold tracking-[2px] text-[#d8ad55] uppercase">
                            OUR APPROACH
                        </p>
                        <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#171a1f]">
                            Find the right vehicle. Make the process clear.
                        </h2>
                    </div>

                    <div className="space-y-4 text-[16px] leading-relaxed text-[#69717c]">
                        <p>
                            Whether you want a vehicle already available for
                            sale or need us to source a specific car, our goal is
                            to make the process professional, transparent and
                            straightforward.
                        </p>
                        <p>
                            Our sourcing service is separate from the cost of
                            the vehicle and other applicable expenses.
                        </p>
                        <div className="pt-4">
                            <Link
                                href={contact()}
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#d8ad55] px-6 py-3.5 text-sm font-extrabold text-[#111] transition hover:bg-[#c99f48]"
                            >
                                Request a Vehicle
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
