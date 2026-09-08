import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import PublicShell from '@/components/public-shell';
import VehicleCard from '@/components/vehicle-card';
import { vehicles } from '@/data/vehicles';
import { contact, inventory } from '@/routes';

export default function Welcome() {
    return (
        <PublicShell theme="dark">
            <Head>
                <title>Eazy's Cars | Global Vehicle Sourcing & Curated Cars</title>
                <meta
                    name="description"
                    content="Eazy's Cars - A considered collection of luxury, performance, and modern classic cars. Sourced worldwide across Belgium, Europe, USA, Canada, and Japan."
                />
                <link rel="canonical" href="https://eazyscars.be/" />
                <meta
                    property="og:title"
                    content="Eazy's Cars | Global Vehicle Sourcing & Curated Cars"
                />
                <meta
                    property="og:description"
                    content="Exceptional cars. Simply yours. Global vehicle sourcing, import/export, and curated car collections presented without the noise."
                />
                <meta property="og:url" content="https://eazyscars.be/" />
            </Head>
            <section className="relative min-h-[92vh] overflow-hidden bg-[#111311] text-white">
                <img
                    src="/images/eazy-cars-hero.png"
                    alt="Luxury grand touring car outside a modern showroom"
                    className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,11,.92)_0%,rgba(10,12,11,.62)_43%,rgba(10,12,11,.12)_75%)]" />
                <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pt-36 pb-16 lg:px-10 lg:pb-24">
                    <div className="max-w-2xl">
                        <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-[#d9c5a0] uppercase">
                            <span className="h-px w-9 bg-[#d9c5a0]" />
                            Curated motoring
                        </p>
                        <h1 className="font-display text-5xl leading-[.96] tracking-[-0.04em] sm:text-6xl lg:text-[5.8rem]">
                            Exceptional cars.
                            <br />
                            <span className="text-[#d9c5a0] italic">
                                Simply yours.
                            </span>
                        </h1>
                        <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                            A considered collection of performance, luxury and
                            modern classic cars—sourced with care and presented
                            without the usual noise.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                href={inventory()}
                                prefetch
                                className="inline-flex items-center gap-3 rounded-full bg-[#e8dcc5] px-6 py-3.5 text-sm font-semibold text-[#161815] transition hover:bg-white"
                            >
                                Explore the collection{' '}
                                <ArrowRight className="size-4" />
                            </Link>
                            <Link
                                href={contact()}
                                prefetch
                                className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                            >
                                Source a car
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute right-6 bottom-7 hidden text-right text-[10px] tracking-[.25em] text-white/55 uppercase md:block">
                    Lagos · Nigeria
                    <br />
                    By appointment
                </div>
            </section>
            <section className="bg-[#f3f0e9] px-6 py-24 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div>
                            <p className="eyebrow">Available now</p>
                            <h2 className="section-title">The current edit.</h2>
                        </div>
                        <Link
                            href={inventory()}
                            className="group flex items-center gap-3 text-sm font-semibold"
                        >
                            View all vehicles{' '}
                            <span className="grid size-9 place-items-center rounded-full border border-black/20 transition group-hover:bg-black group-hover:text-white">
                                <ArrowRight className="size-4" />
                            </span>
                        </Link>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {vehicles.slice(0, 3).map((vehicle, index) => (
                            <VehicleCard
                                key={vehicle.name}
                                vehicle={vehicle}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#1a1d1a] px-6 py-24 text-white lg:px-10 lg:py-32">
                <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                    <div>
                        <p className="eyebrow text-[#d9c5a0]">
                            The EAZY standard
                        </p>
                        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
                            Buying the right car should feel as good as driving
                            it.
                        </h2>
                        <p className="mt-6 max-w-xl leading-7 text-white/60">
                            We handle inspection, provenance, negotiation and
                            delivery with a clear, personal process from first
                            conversation to handover.
                        </p>
                    </div>
                    <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
                        {[
                            ['01', 'Verified history'],
                            ['02', 'Independent inspection'],
                            ['03', 'Clear pricing'],
                            ['04', 'Concierge delivery'],
                        ].map(([number, label]) => (
                            <div key={number} className="bg-[#20231f] p-7">
                                <span className="text-xs text-[#d9c5a0]">
                                    {number}
                                </span>
                                <p className="font-display mt-12 text-xl">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#d8c4a0] px-6 py-20 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <p className="text-xs font-bold tracking-[.22em] uppercase">
                            A more personal way to buy
                        </p>
                        <h2 className="font-display mt-3 text-4xl sm:text-5xl">
                            Tell us what moves you.
                        </h2>
                    </div>
                    <a
                        href="mailto:eazy@eazyscars.com"
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#171916] px-7 py-4 text-sm font-semibold text-white"
                    >
                        Start a conversation <ArrowRight className="size-4" />
                    </a>
                </div>
            </section>
        </PublicShell>
    );
}
