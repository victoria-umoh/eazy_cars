import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Export() {
    return (
        <PublicShell>
            <SeoHead
                title="Car Import & Export Services | Buy Second Handed Cars & Ship to Africa & Nigeria"
                description="Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa and Nigeria. Complete vehicle sourcing, export documentation, RoRo and container ocean freight to Lagos and international ports."
                keywords={[
                    'Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium, Canada and USA ship to Nigeria',
                    'car sourcing europe to nigeria',
                    'belgium car dealer export',
                    'car import export services',
                    'usa to europe car shipping',
                    'international car sourcing',
                    'Source cars in Europe, Belgium, Canada and USA',
                    'Buy second handed cars in Europe, Belgium, Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium, Canada and USA',
                ]}
                canonical="/export"
            />

            <section className="page-hero page-hero-toyota-highlander">
                <div className="container">
                    <p className="eyebrow">IMPORT &amp; EXPORT • EUROPE • BELGIUM • CANADA • USA • AFRICA • NIGERIA</p>
                    <h1>From sourcing to destination.</h1>
                    <p>
                        Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa and Nigeria. We manage vehicle procurement, inspection, customs export documentation, and ocean freight logistics from European and North American ports.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="steps-grid">
                        <div className="step-box">
                            <b>01</b>
                            <h3>Tell us what you need</h3>
                            <p>Vehicle make, model, year, budget, destination (e.g. Lagos, Nigeria or African ports).</p>
                        </div>
                        <div className="step-box">
                            <b>02</b>
                            <h3>We source options</h3>
                            <p>
                                We search vetted vehicles in Belgium, Europe, USA, Canada and provide complete specs and history.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>03</b>
                            <h3>You approve</h3>
                            <p>You review inspection details and transparent costs before deciding to proceed.</p>
                        </div>
                        <div className="step-box">
                            <b>04</b>
                            <h3>We coordinate</h3>
                            <p>
                                Purchase support, export registration, title transfer, and customs documentation.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>05</b>
                            <h3>Ocean Shipping</h3>
                            <p>
                                Direct container and RoRo shipping to Nigeria (Lagos Tin Can / Apapa) and African destinations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section dark-panel">
                <div className="container two-col-page">
                    <div>
                        <h2>Need an import or export quote?</h2>
                        <p>
                            Send us the vehicle details, origin, destination and
                            requirements.
                        </p>
                    </div>
                    <Link className="btn btn-light" href="/contact">
                        Contact Eazy's Cars
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
