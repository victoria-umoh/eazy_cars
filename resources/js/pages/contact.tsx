import { Head, Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function Contact() {
    return (
        <PublicShell>
            <Head>
                <title>Contact | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Contact Eazy's Cars for vehicles for sale, vehicle sourcing, auction sourcing, dealer sourcing or import/export enquiries."
                />
            </Head>

            <section className="page-hero page-hero-toyota-corolla">
                <div className="container">
                    <p className="eyebrow">CONTACT EAZY'S CARS</p>
                    <h1>Let's find your next car.</h1>
                    <p>
                        Contact us for vehicles for sale, vehicle sourcing, auction
                        sourcing, dealer sourcing or import/export enquiries.
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="container contact-card">
                    <p className="eyebrow">CONTACT INFORMATION</p>
                    <h2>Get in touch.</h2>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:info@eazyscars.be">info@eazyscars.be</a>
                    </p>
                    <p>
                        <strong>Sales:</strong>{' '}
                        <a href="mailto:sales@eazyscars.be">sales@eazyscars.be</a>
                    </p>
                    <p>
                        <strong>Export:</strong>{' '}
                        <a href="mailto:export@eazyscars.be">export@eazyscars.be</a>
                    </p>
                    <p>
                        <strong>WhatsApp:</strong>{' '}
                        <a
                            href="https://wa.me/32497911005"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            +32 497 91 10 05
                        </a>
                    </p>
                    <div className="contact-actions">
                        <Link className="btn btn-primary" href="/find-your-car">
                            Request a Vehicle
                        </Link>
                        <a
                            className="btn btn-outline"
                            href="https://wa.me/32497911005"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
