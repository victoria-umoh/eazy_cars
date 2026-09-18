import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Auctions() {
    return (
        <PublicShell>
            <SeoHead
                title="Auction Car Sourcing | Europe, USA & Japan Vehicle Auctions"
                description="Auction car sourcing across Europe, Belgium, Canada, USA and Japan. Buy second handed cars and luxury vehicles through wholesale auto auctions with shipping to Africa and Nigeria."
                keywords={[
                    'auction car sourcing europe / usa / japan',
                    'Source cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium , Canada and USA ship to Nigeria',
                    'car sourcing belgium',
                    'international car sourcing',
                    'curated performance cars',
                ]}
                canonical="/auctions"
            />

            <section className="page-hero page-hero-mercedes-gle43">
                <div className="container">
                    <p className="eyebrow">AUCTION SOURCING • EUROPE • USA • CANADA • JAPAN</p>
                    <h1>Find the right auction vehicle.</h1>
                    <p>
                        Source cars in Europe, Belgium, Canada and USA through vetted auction channels. We evaluate history, inspect condition, coordinate bidding, and manage ocean freight shipping to Africa and Nigeria.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container two-col-page">
                    <div>
                        <p className="eyebrow">AUCTION SOURCING</p>
                        <h2>We search. You approve.</h2>
                        <p>
                            We can help you identify suitable vehicles, review available
                            information and discuss purchase, transport, shipping and
                            applicable service costs before you proceed.
                        </p>
                        <Link className="btn btn-primary" href="/find-your-car">
                            Request Auction Sourcing
                        </Link>
                    </div>
                    <div className="market-box">
                        <h3>USA / Canada</h3>
                        <p>Cars, SUVs and selected premium auction opportunities.</p>
                        <h3>Europe</h3>
                        <p>
                            Belgium, Germany, Netherlands, France and other European
                            markets.
                        </p>
                        <h3>Japan</h3>
                        <p>Japanese vehicles and auction sourcing.</p>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
