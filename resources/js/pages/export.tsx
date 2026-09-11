import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Export() {
    return (
        <PublicShell>
            <Head>
                <title>Import / Export | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Reliable vehicle import and export services connecting Belgium, Europe, North America and international destinations."
                />
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">IMPORT / EXPORT</p>
                    <h1>International vehicle logistics.</h1>
                    <p>
                        Comprehensive vehicle export services from Belgium, Europe,
                        North America and Japan to global destinations.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container two-col-page">
                    <div>
                        <p className="eyebrow">EXPORT EXPERTISE</p>
                        <h2>End-to-end international shipping and customs.</h2>
                    </div>
                    <div>
                        <p>
                            Eazy's Cars coordinates vehicle purchase, transport to
                            port, Belgian export documentation (EX-A, transit plates),
                            bill of lading, and freight booking to your destination port.
                        </p>
                        <p>
                            We ensure that all vehicles comply with destination
                            regulations, age limits, and documentation requirements.
                        </p>
                        <Link className="btn btn-primary" href="/find-your-car">
                            Request Export Sourcing
                        </Link>
                    </div>
                </div>
            </section>

            <section className="page-section soft">
                <div className="container">
                    <div className="page-heading">
                        <p className="eyebrow">LOGISTICS PROCESS</p>
                        <h2>Transparent, secure international handling.</h2>
                    </div>
                    <div className="cards-grid">
                        <div className="info-box">
                            <h3>Documentation</h3>
                            <p>
                                Export declarations, transit registration, EUR.1
                                certificates, and clear title transfers.
                            </p>
                        </div>
                        <div className="info-box">
                            <h3>Freight Options</h3>
                            <p>
                                RoRo (Roll-on / Roll-off) for cost efficiency or
                                dedicated container shipping for maximum protection.
                            </p>
                        </div>
                        <div className="info-box">
                            <h3>Tracking &amp; Handover</h3>
                            <p>
                                Regular status updates from pickup in Europe/US to port
                                arrival and bill of lading delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Need a vehicle exported to your country?</h2>
                        <p>Tell us your preferred model and destination port.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Contact Export Desk
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
