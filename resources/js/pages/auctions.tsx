import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Auctions() {
    return (
        <PublicShell>
            <Head>
                <title>Auctions | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Auction vehicle sourcing from USA, Europe and Japan with full inspection, bidding and shipping assistance."
                />
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">AUCTION SOURCING</p>
                    <h1>Global vehicle auctions.</h1>
                    <p>
                        Identify and purchase vehicles through major auction channels
                        in the United States, Europe, and Japan with complete
                        support.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="page-heading">
                        <p className="eyebrow">HOW AUCTION SOURCING WORKS</p>
                        <h2>5-step auction acquisition process.</h2>
                    </div>
                    <div className="steps-grid">
                        <div className="step-box">
                            <b>STEP 01</b>
                            <h3>Requirements</h3>
                            <p>
                                Define your target make, model, trim, acceptable
                                mileage, and maximum budget.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>STEP 02</b>
                            <h3>Auction Search</h3>
                            <p>
                                We review upcoming inventory on Copart, IAAI,
                                Manheim, and Japanese auction sheets.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>STEP 03</b>
                            <h3>Condition Report</h3>
                            <p>
                                Complete VIN history, Carfax/AutoCheck check, and
                                mechanical review before bidding.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>STEP 04</b>
                            <h3>Bidding &amp; Win</h3>
                            <p>
                                Professional bidding within your agreed limit to
                                secure the vehicle at wholesale prices.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>STEP 05</b>
                            <h3>Port &amp; Shipping</h3>
                            <p>
                                Ground transport to port, customs clearance, and RoRo
                                or container sea freight dispatch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section" style={{ paddingTop: 0 }}>
                <div className="container cta">
                    <div>
                        <h2>Ready to bid on an auction vehicle?</h2>
                        <p>Tell us what you are looking for to begin searching auction runs.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Start Auction Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
