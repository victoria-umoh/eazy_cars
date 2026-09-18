import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function About() {
    return (
        <PublicShell>
            <SeoHead
                title="About Eazy's Cars | International Car Sourcing & Export in Belgium"
                description="About Eazy's Cars: Belgium's international vehicle sourcing partner. We help private buyers and dealers source cars in Europe, Belgium, Canada and USA, and ship second handed luxury cars to Africa and Nigeria."
                keywords={[
                    'Source cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium , Canada and USA ship to Nigeria',
                    'car sourcing belgium',
                    'belgium car dealer export',
                    'international car sourcing',
                    'car import export services',
                ]}
                canonical="/about"
            />

            <section className="page-hero page-hero-toyota-camry">
                <div className="container">
                    <p className="eyebrow">ABOUT EAZY'S CARS • SOURCING &amp; EXPORT</p>
                    <h1>A sourcing partner for customers and dealers.</h1>
                    <p>
                        Eazy's Cars is a Belgium-based vehicle sourcing and export company. We help private clients and automotive dealers source cars in Europe, Belgium, Canada and USA, and buy second handed luxury cars with verified shipping to Africa and Nigeria.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container two-col-page">
                    <div>
                        <p className="eyebrow">OUR APPROACH</p>
                        <h2>Find the right vehicle. Make the process clear.</h2>
                    </div>
                    <div>
                        <p>
                            Whether you want a vehicle already available for sale or
                            need us to source a specific car, our goal is to make the
                            process professional, transparent and straightforward.
                        </p>
                        <p>
                            Our sourcing service is separate from the cost of the
                            vehicle and other applicable expenses.
                        </p>
                        <Link className="btn btn-primary" href="/find-your-car">
                            Request a Vehicle
                        </Link>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
