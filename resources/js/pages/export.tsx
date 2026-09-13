import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Export() {
    return (
        <PublicShell>
            <Head>
                <title>Import &amp; Export | Eazy's Cars</title>
            </Head>

            <section className="page-hero page-hero-toyota-highlander">
                <div className="container">
                    <p className="eyebrow">IMPORT &amp; EXPORT</p>
                    <h1>From sourcing to destination.</h1>
                    <p>
                        We help coordinate the vehicle sourcing and logistics process for
                        customers and dealers, including international transport and
                        shipping arrangements.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="steps-grid">
                        <div className="step-box">
                            <b>01</b>
                            <h3>Tell us what you need</h3>
                            <p>Vehicle, budget, destination and requirements.</p>
                        </div>
                        <div className="step-box">
                            <b>02</b>
                            <h3>We source options</h3>
                            <p>
                                We search suitable vehicles and provide available
                                information.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>03</b>
                            <h3>You approve</h3>
                            <p>You decide whether to proceed with a vehicle.</p>
                        </div>
                        <div className="step-box">
                            <b>04</b>
                            <h3>We coordinate</h3>
                            <p>
                                Purchase support, documentation and logistics
                                coordination.
                            </p>
                        </div>
                        <div className="step-box">
                            <b>05</b>
                            <h3>Shipping</h3>
                            <p>
                                We coordinate international transportation arrangements.
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
