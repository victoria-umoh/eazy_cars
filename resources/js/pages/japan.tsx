import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Japan() {
    return (
        <PublicShell>
            <Head>
                <title>Japan Cars | Eazy's Cars</title>
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">JAPAN</p>
                    <h1>Japanese vehicle sourcing.</h1>
                    <p>
                        Access Japanese vehicles through our sourcing service and
                        available auction channels.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container cta">
                    <div>
                        <h2>Looking for a Japanese car?</h2>
                        <p>
                            Tell us what you are looking for and where it should be
                            delivered.
                        </p>
                    </div>
                    <Link className="btn btn-primary" href="/find-your-car">
                        Request Sourcing
                    </Link>
                </div>
            </section>
        </PublicShell>
    );
}
