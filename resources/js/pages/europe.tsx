import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Europe() {
    return (
        <PublicShell>
            <SeoHead
                title="Source Cars in Europe & Belgium | Buy Second Handed Luxury Cars"
                description="Source cars in Europe and Belgium. Buy second handed luxury cars in Belgium, Germany, Netherlands, France and ship to Africa and Nigeria with complete export logistics."
                keywords={[
                    'Source cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium , Canada and USA ship to Nigeria',
                    'car sourcing belgium',
                    'vehicle sourcing europe',
                    'belgium car dealer export',
                    'car sourcing europe to nigeria',
                    'luxury cars for sale',
                ]}
                canonical="/europe"
            />

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">EUROPE &amp; BELGIUM SOURCING</p>
                    <h1>European vehicle sourcing.</h1>
                    <p>
                        Source cars in Europe and Belgium. We source second handed cars and luxury vehicles across Belgium, Germany, Netherlands, France and other European markets with shipping to Africa and Nigeria.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Looking for a European or Belgian car?</h2>
                        <p>Buy second handed luxury cars sourced from vetted European dealers and auctions.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
