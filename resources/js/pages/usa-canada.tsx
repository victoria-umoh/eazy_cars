import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function UsaCanada() {
    return (
        <PublicShell>
            <SeoHead
                title="Source Cars in USA & Canada | Buy Second Handed Cars & Ship to Africa & Nigeria"
                description="Source cars in USA and Canada. Buy second handed cars and luxury SUVs (Toyota Highlander, Lexus RX350, Mercedes-Benz) with ocean shipping to Africa, Nigeria, and Europe."
                keywords={[
                    'Source cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium , Canada and USA ship to Nigeria',
                    'toyota highlander usa canada import',
                    'lexus rx350 japan usa',
                    'usa to europe car shipping',
                    'auction car sourcing europe / usa / japan',
                    'international car sourcing',
                ]}
                canonical="/usa-canada"
            />

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">USA &amp; CANADA SOURCING</p>
                    <h1>North American vehicle sourcing.</h1>
                    <p>
                        Source cars in Canada and USA. We source second handed cars, clean title SUVs, and luxury vehicles from North American auctions and dealer networks with shipping to Africa, Nigeria, and Europe.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Looking for a USA or Canadian car?</h2>
                        <p>Buy second handed cars and luxury SUVs sourced directly from North American auctions and dealer networks.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
