import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Markets() {
    return (
        <PublicShell>
            <Head>
                <title>Markets | Eazy's Cars</title>
            </Head>

            <section className="page-hero page-hero-lexus-rx350">
                <div className="container">
                    <p className="eyebrow">OUR MARKETS</p>
                    <h1>Source from the market that suits you.</h1>
                    <p>
                        Choose the sourcing region that best matches your vehicle, budget
                        and destination.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="cards-grid">
                        <div className="info-box">
                            <h3>EU</h3>
                            <p>
                                <strong>European Cars</strong>
                            </p>
                            <p>Vehicles sourced across Belgium and European markets.</p>
                            <Link className="text-link" href="/europe">
                                Explore Europe →
                            </Link>
                        </div>
                        <div className="info-box">
                            <h3>US</h3>
                            <p>
                                <strong>USA / Canadian Cars</strong>
                            </p>
                            <p>Source vehicles through North American channels.</p>
                            <Link className="text-link" href="/usa-canada">
                                Explore USA / Canada →
                            </Link>
                        </div>
                        <div className="info-box">
                            <h3>JP</h3>
                            <p>
                                <strong>Japanese Cars</strong>
                            </p>
                            <p>Access Japanese vehicles through our sourcing service.</p>
                            <Link className="text-link" href="/japan">
                                Explore Japan →
                            </Link>
                        </div>
                        <div className="info-box">
                            <h3>BE</h3>
                            <p>
                                <strong>Belgium Cars</strong>
                            </p>
                            <p>Local sourcing for Belgian and European customers.</p>
                            <Link className="text-link" href="/find-your-car">
                                Request sourcing →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
