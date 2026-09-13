import { FormEvent, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import PublicShell from '@/components/public-shell';

export default function FindYourCar() {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        make: '',
        model: '',
        year: '',
        budget: '',
        destination: '',
        requirements: '',
        type: 'sourcing',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // 1. Post to backend inquiry store
        post('/inquiries', {
            preserveScroll: true,
            onSuccess: () => {
                setSubmitted(true);
            },
        });

        // 2. Open WhatsApp with formatted request message matching script.js
        const msg = [
            "EAZY'S CARS — VEHICLE SOURCING REQUEST",
            `Name: ${data.name || ''}`,
            `Phone/WhatsApp: ${data.phone || ''}`,
            `Email: ${data.email || ''}`,
            `Make: ${data.make || ''}`,
            `Model: ${data.model || ''}`,
            `Year: ${data.year || ''}`,
            `Budget: ${data.budget || ''}`,
            `Destination: ${data.destination || ''}`,
            `Requirements: ${data.requirements || ''}`,
        ].join('\n');

        window.open(
            `https://wa.me/32497911005?text=${encodeURIComponent(msg)}`,
            '_blank'
        );
    };

    return (
        <PublicShell>
            <Head>
                <title>Car Sourcing | Eazy's Cars</title>
            </Head>

            <section className="page-hero page-hero-mercedes-glc300">
                <div className="container">
                    <p className="eyebrow">CAR SOURCING SERVICE</p>
                    <h1>Can't find the right car?</h1>
                    <p>
                        Let Eazy's Cars find it for you. Tell us what you need and
                        we'll search our available sourcing channels.
                    </p>
                </div>
            </section>

            <section className="page-section sourcing">
                <div className="container sourcing-layout">
                    <div>
                        <p className="eyebrow">REQUEST A VEHICLE</p>
                        <h2>Tell us your requirements.</h2>
                        <p className="lead">
                            We source for customers and dealers across Belgium,
                            Europe, USA/Canada and Japan.
                        </p>
                        <div className="fee-box">
                            <b>Transparent costs</b>
                            <p>
                                Vehicle price, auction/dealer fees, transport,
                                shipping, customs/taxes and our sourcing/service fee
                                can be presented separately where applicable.
                            </p>
                        </div>
                    </div>

                    <form
                        className="sourcing-form"
                        id="sourcingForm"
                        onSubmit={handleSubmit}
                    >
                        <h3>Request a Vehicle</h3>
                        {submitted && (
                            <div
                                style={{
                                    padding: '12px 16px',
                                    backgroundColor: '#e6f7ec',
                                    color: '#0e7039',
                                    borderRadius: '8px',
                                    marginBottom: '16px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                }}
                            >
                                ✓ Vehicle request sent! Check your WhatsApp window.
                            </div>
                        )}
                        <div className="form-row">
                            <label>
                                Name
                                <input
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </label>
                            <label>
                                WhatsApp / Phone
                                <input
                                    name="phone"
                                    placeholder="+32 ..."
                                    required
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                            </label>
                        </div>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                        </label>
                        <div className="form-row">
                            <label>
                                Make
                                <input
                                    name="make"
                                    placeholder="Mercedes-Benz"
                                    value={data.make}
                                    onChange={(e) => setData('make', e.target.value)}
                                />
                            </label>
                            <label>
                                Model
                                <input
                                    name="model"
                                    placeholder="GLE 43 AMG"
                                    value={data.model}
                                    onChange={(e) => setData('model', e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Year
                                <input
                                    name="year"
                                    placeholder="2017–2019"
                                    value={data.year}
                                    onChange={(e) => setData('year', e.target.value)}
                                />
                            </label>
                            <label>
                                Budget
                                <input
                                    name="budget"
                                    placeholder="€ / $"
                                    value={data.budget}
                                    onChange={(e) => setData('budget', e.target.value)}
                                />
                            </label>
                        </div>
                        <label>
                            Destination country
                            <input
                                name="destination"
                                placeholder="Belgium / Nigeria / ..."
                                value={data.destination}
                                onChange={(e) =>
                                    setData('destination', e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Requirements
                            <textarea
                                name="requirements"
                                rows={4}
                                placeholder="Tell us about mileage, colour, options, condition, etc."
                                value={data.requirements}
                                onChange={(e) =>
                                    setData('requirements', e.target.value)
                                }
                            />
                        </label>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? 'Sending...' : 'Send Vehicle Request'}
                        </button>
                    </form>
                </div>
            </section>
        </PublicShell>
    );
}
