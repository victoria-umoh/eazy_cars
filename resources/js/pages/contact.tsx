import { Link } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';
import SeoHead from '@/components/seo-head';

export default function Contact() {
    return (
        <PublicShell>
            <SeoHead
                title="Contact Eazy's Cars | Belgium Car Dealer & Vehicle Export Sourcing"
                description="Get in touch with Eazy's Cars in Belgium. Contact us to source cars in Europe, Belgium, Canada and USA, buy second handed luxury cars, or arrange ocean shipping to Africa and Nigeria."
                keywords={[
                    'Source cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA',
                    'Buy second handed luxury cars in Europe, Belgium , Canada and USA',
                    'Buy second handed cars in Europe, Belgium , Canada and USA and ship to Africa',
                    'Buy second handed cars in Europe, Belgium , Canada and USA ship to Nigeria',
                    'car sourcing belgium',
                    'belgium car dealer export',
                    'car import export services',
                ]}
                canonical="/contact"
            />

            <section className="page-hero page-hero-toyota-corolla">
                <div className="container">
                    <p className="eyebrow">CONTACT EAZY'S CARS • BELGIUM</p>
                    <h1>Let's find your next car.</h1>
                    <p>
                        Contact us to source cars in Europe, Belgium, Canada and USA, buy second handed luxury cars, or arrange export and ocean shipping to Africa and Nigeria.
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
                            href="https://wa.me/32497911005?text=Hello%20Eazy's%20Cars,%20I%20would%20like%20to%20enquire%20about%20a%20vehicle."
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
                            href="https://wa.me/32497911005?text=Hello%20Eazy's%20Cars,%20I%20would%20like%20to%20enquire%20about%20a%20vehicle."
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
