import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Welcome() {
    return (
        <PublicShell>
            <Head>
                <title>Eazy's Cars | Buy. Source. Import. Export.</title>
                <meta
                    name="description"
                    content="Eazy's Cars - vehicle sourcing, import and export from Belgium, Europe, USA/Canada and Japan."
                />
            </Head>

            <section className="hero">
                <div className="container hero-content">
                    <p className="eyebrow">EUROPE • USA / CANADA • JAPAN</p>
                    <h1>
                        Find Your <span>Next Car.</span>
                    </h1>
                    <p className="hero-text">
                        Quality vehicles sourced from Belgium, Europe, USA/Canada and
                        Japan.
                    </p>
                    <div className="hero-actions">
                        <Link className="btn btn-primary" href="/cars-for-sale">
                            View Cars
                        </Link>
                        <Link className="btn btn-light" href="/find-your-car">
                            Find My Car
                        </Link>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container two-col-page">
                    <div>
                        <p className="eyebrow">EAZY'S CARS</p>
                        <h2>
                            More than a dealership — your vehicle sourcing partner.
                        </h2>
                    </div>
                    <div>
                        <p>
                            We help customers and dealers find suitable vehicles
                            through our international sourcing network. Tell us what
                            you want and we will search the right market for you.
                        </p>
                        <Link className="text-link" href="/find-your-car">
                            Let us find your car →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="page-section soft">
                <div className="container">
                    <div className="page-heading">
                        <p className="eyebrow">WHY CHOOSE US?</p>
                        <h2>
                            Professional sourcing. Global access. Personal service.
                        </h2>
                    </div>
                    <div className="cards-grid">
                        <div className="info-box">
                            <h3>Vehicle Sourcing</h3>
                            <p>
                                Tell us the make, model, year, budget and
                                specifications. We search for suitable options.
                            </p>
                        </div>
                        <div className="info-box">
                            <h3>Global Access</h3>
                            <p>
                                Source vehicles from Belgium, Europe, USA/Canada and
                                Japan.
                            </p>
                        </div>
                        <div className="info-box">
                            <h3>Auction Sourcing</h3>
                            <p>
                                We can help identify suitable vehicles through
                                available auction channels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <p className="eyebrow">CARS FOR SALE</p>
                        <h2>See our featured vehicles.</h2>
                        <p>Browse vehicles we can offer or source on request.</p>
                    </div>
                    <Link className="btn btn-primary" href="/cars-for-sale">
                        Cars for Sale →
                    </Link>
                </div>
            </section>

            <section className="page-section dark-panel">
                <div className="container two-col-page">
                    <div>
                        <p className="eyebrow">GLOBAL SOURCING</p>
                        <h2>Choose the market that suits you.</h2>
                        <p>
                            Explore European, North American and Japanese sourcing
                            options.
                        </p>
                    </div>
                    <div>
                        <Link className="btn btn-light" href="/markets">
                            Explore Our Markets
                        </Link>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <p className="eyebrow">CAR SOURCING SERVICE</p>
                        <h2>Can't find the right car?</h2>
                        <p>Let Eazy's Cars find it for you.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request a Vehicle
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
