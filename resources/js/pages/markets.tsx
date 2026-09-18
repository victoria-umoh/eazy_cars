import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Markets() {
    return (
        <PublicShell>
            <SeoHead
                title="Vehicle Sourcing Markets | Europe, Belgium, Canada & USA Car Sourcing"
                description="Source cars in Europe, Belgium, Canada and USA. Access dealer networks and auctions across Belgium, Europe, North America, and Japan with shipping to Africa and Nigeria."
                keywords={[
                    'Source cars in Europe, Belgium, Canada and USA',
                    'Buy second handed cars in Europe, Belgium, Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium, Canada and USA',
                    'Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium, Canada and USA ship to Nigeria',
                    'vehicle sourcing europe',
                    'car sourcing belgium',
                    'international car sourcing',
                    'auction car sourcing europe / usa / japan',
                    'belgium car dealer export',
                    'japan to belgium car sourcing',
                ]}
                canonical="/markets"
            />

            <section className="page-hero page-hero-lexus-rx350">
                <div className="container">
                    <p className="eyebrow">OUR SOURCING MARKETS • EUROPE • BELGIUM • CANADA • USA • JAPAN</p>
                    <h1>Source from the market that suits you.</h1>
                    <p>
                        Source cars in Europe, Belgium, Canada and USA. Choose the sourcing region that best matches your vehicle, budget and destination — with direct shipping to Africa and Nigeria.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="cards-grid">
                        <div className="info-box">
                            <h3>EU</h3>
                            <p>
                                <strong>European Cars</strong>
                            </p>
                            <p>Vehicles sourced across Belgium and European markets.</p>
                            <Link className="text-link" href="/europe">
                                Explore Europe →
                            </Link>
                        </div>
                        <div className="info-box">
                            <h3>US</h3>
                            <p>
                                <strong>USA / Canadian Cars</strong>
                            </p>
                            <p>Source vehicles through North American channels.</p>
                            <Link className="text-link" href="/usa-canada">
                                Explore USA / Canada →
                            </Link>
                        </div>
                        <div className="info-box">
                            <h3>JP</h3>
                            <p>
                                <strong>Japanese Cars</strong>
                            </p>
                            <p>Access Japanese vehicles through our sourcing service.</p>
                            <Link className="text-link" href="/japan">
                                Explore Japan →
                            </Link>
                        </div>
                        <div className="info-box">
                            <h3>BE</h3>
                            <p>
                                <strong>Belgium Cars</strong>
                            </p>
                            <p>Local sourcing for Belgian and European customers.</p>
                            <Link className="text-link" href="/find-your-car">
                                Request sourcing →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
