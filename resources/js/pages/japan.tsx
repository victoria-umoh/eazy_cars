import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Japan() {
    return (
        <PublicShell>
            <SeoHead
                title="Japanese Vehicle Sourcing & Auctions | Eazy's Cars"
                description="Source Japanese cars and performance vehicles through vetted auction channels. Export and shipping to Belgium, Europe, Africa, and Nigeria."
                keywords={[
                    'japan to belgium car sourcing',
                    'auction car sourcing europe / usa / japan',
                    'Source cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium , Canada and USA ship to Nigeria',
                    'international car sourcing',
                ]}
                canonical="/japan"
            />

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">JAPANESE SOURCING &amp; AUCTIONS</p>
                    <h1>Japanese vehicle sourcing.</h1>
                    <p>
                        Access Japanese vehicles and auctions through our international sourcing service, with delivery to Belgium, Europe, Africa, and Nigeria.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Looking for a Japanese car?</h2>
                        <p>
                            Tell us what you are looking for and where it should be
                            delivered.
                        </p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
