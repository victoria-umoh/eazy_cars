import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Welcome() {
    return (
        <PublicShell>
            <SeoHead
                title="Eazy's Cars | Source Cars in Europe, Belgium, Canada & USA | Buy Second Handed Luxury Cars"
                description="Source cars in Europe, Belgium, Canada and USA. Buy second handed cars and luxury cars in Europe, Belgium, Canada and USA and ship to Africa and Nigeria. Reliable vehicle sourcing, dealer export, and curated inventory."
                keywords={[
                    'Source cars in Europe, Belgium, Canada and USA',
                    'Buy second handed cars in Europe, Belgium, Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium, Canada and USA',
                    'Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium, Canada and USA ship to Nigeria',
                    'car sourcing belgium',
                    'vehicle sourcing europe',
                    'international car sourcing',
                    'car import export services',
                    'source a car on request',
                    'custom vehicle request',
                    'auction car sourcing europe / usa / japan',
                    'cars for sale belgium',
                    'luxury cars for sale',
                    'mercedes-benz gle 350 amg for sale',
                    'mercedes ml350 import',
                    'toyota highlander usa canada import',
                    'lexus rx350 japan usa',
                    'curated performance cars',
                    'car sourcing europe to nigeria',
                    'belgium car dealer export',
                    'usa to europe car shipping',
                    'japan to belgium car sourcing',
                ]}
                canonical="/"
            />

            <section className="hero hero-gle350">
                <div className="container hero-content">
                    <p className="eyebrow">EUROPE • BELGIUM • CANADA • USA • JAPAN</p>
                    <h1>
                        Find Your <span>Next Car.</span>
                    </h1>
                    <p className="hero-text">
                        Source cars in Europe, Belgium, Canada and USA. Buy second handed cars and luxury vehicles with complete shipping to Africa and Nigeria.
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
                        <p className="eyebrow">EAZY'S CARS SOURCING & EXPORT</p>
                        <h2>
                            More than a dealership — your vehicle sourcing partner.
                        </h2>
                    </div>
                    <div>
                        <p>
                            We help private clients and auto dealers source cars in Europe, Belgium, Canada and USA. Buy second handed luxury cars, premium SUVs, and reliable daily drivers with seamless transport and direct export shipping to Africa and Nigeria.
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
