import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Auctions() {
    return (
        <PublicShell>
            <Head>
                <title>Auctions | Eazy's Cars</title>
            </Head>

            <section className="page-hero page-hero-mercedes-gle43">
                <div className="container">
                    <p className="eyebrow">AUCTIONS</p>
                    <h1>Find the right auction vehicle.</h1>
                    <p>
                        Tell us what you want and we can help identify suitable vehicles
                        through our available sourcing and auction channels.
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
