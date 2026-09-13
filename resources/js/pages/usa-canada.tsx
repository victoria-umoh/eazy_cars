import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function UsaCanada() {
    return (
        <PublicShell>
            <Head>
                <title>USA / Canada Cars | Eazy's Cars</title>
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">USA / CANADA</p>
                    <h1>North American vehicle sourcing.</h1>
                    <p>
                        Source cars and SUVs through available USA and Canadian
                        channels, including auction opportunities.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Looking for a USA or Canadian car?</h2>
                        <p>Send us your requirements and destination.</p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
