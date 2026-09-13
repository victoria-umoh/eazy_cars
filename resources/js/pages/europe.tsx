import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Europe() {
    return (
        <PublicShell>
            <Head>
                <title>Europe Cars | Eazy's Cars</title>
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">EUROPE</p>
                    <h1>European vehicle sourcing.</h1>
                    <p>
                        Source vehicles across Belgium, Germany, Netherlands, France
                        and other European markets.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Looking for a European car?</h2>
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
