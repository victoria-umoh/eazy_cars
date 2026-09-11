import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function About() {
    return (
        <PublicShell>
            <Head>
                <title>About Us | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Eazy's Cars is a Belgium-based vehicle sourcing business focused on helping customers and dealers find vehicles from international markets."
                />
            </Head>

            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">ABOUT EAZY'S CARS</p>
                    <h1>A sourcing partner for customers and dealers.</h1>
                    <p>
                        Eazy's Cars is a Belgium-based vehicle sourcing business
                        focused on helping customers and dealers find vehicles from
                        international markets.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container two-col-page">
                    <div>
                        <p className="eyebrow">OUR APPROACH</p>
                        <h2>Find the right vehicle. Make the process clear.</h2>
                    </div>
                    <div>
                        <p>
                            Whether you want a vehicle already available for sale or
                            need us to source a specific car, our goal is to make the
                            process professional, transparent and straightforward.
                        </p>
                        <p>
                            Our sourcing service is separate from the cost of the
                            vehicle and other applicable expenses.
                        </p>
                        <Link className="btn btn-primary" href="/find-your-car">
                            Request a Vehicle
                        </Link>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
