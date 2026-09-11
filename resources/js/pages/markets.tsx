import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Markets() {
    return (
        <PublicShell>
            <Head>
                <title>Markets | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Source vehicles across Belgium, Germany, Netherlands, France, USA, Canada and Japan with Eazy's Cars."
                />
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">EUROPE • USA / CANADA • JAPAN</p>
                    <h1>Global vehicle sourcing markets.</h1>
                    <p>
                        Source vehicles across Belgium, Germany, Netherlands,
                        France, USA, Canada and Japan.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="market-grid">
                        <div className="market-box">
                            <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                                🇪🇺
                            </div>
                            <h3>Europe</h3>
                            <p>
                                Belgium, Germany, Netherlands, France and licensed
                                European dealer networks. Clean EU titles and export
                                documents.
                            </p>
                        </div>
                        <div className="market-box">
                            <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                                🇺🇸
                            </div>
                            <h3>United States</h3>
                            <p>
                                Access to Copart, Manheim, IAAI auctions, and
                                major dealership networks across the USA.
                            </p>
                        </div>
                        <div className="market-box">
                            <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                                🇨🇦
                            </div>
                            <h3>Canada</h3>
                            <p>
                                Canadian dealer inventory and auction channels with
                                direct port logistics to international destinations.
                            </p>
                        </div>
                        <div className="market-box">
                            <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                                🇯🇵
                            </div>
                            <h3>Japan</h3>
                            <p>
                                USS Tokyo, CAA, and Japanese wholesale auctions.
                                Direct RoRo and container shipping worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section" style={{ paddingTop: 0 }}>
                <div className="container cta">
                    <div>
                        <h2>Looking for a vehicle from Europe, USA or Japan?</h2>
                        <p>Tell us the make, model, year and budget.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
