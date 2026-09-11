import { FormEvent } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import PublicShell from '@/components/public-shell';

export default function FindYourCar() {
    const { data, setData, post, processing, reset, recentlySuccessful } = useForm({
        name: '',
        phone: '',
        email: '',
        make: '',
        model: '',
        year: '',
        budget: '',
        destination: '',
        requirements: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/inquiries', {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Vehicle request received! Our team will contact you shortly.');
                reset();
            },
        });
    };

    return (
        <PublicShell>
            <Head>
                <title>Car Sourcing | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Can't find the right car? Let Eazy's Cars find it for you. Tell us what you need and we'll search our available sourcing channels."
                />
            </Head>

            <section className="page-hero">
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

                    <form className="sourcing-form" onSubmit={handleSubmit}>
                        <h3>Request a Vehicle</h3>
                        {recentlySuccessful && (
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
                                ✓ Thank you! We received your request and will contact you via WhatsApp or Email.
                            </div>
                        )}
                        <div className="form-row">
                            <label>
                                Name
                                <input
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Your name"
                                    required
                                />
                            </label>
                            <label>
                                WhatsApp / Phone
                                <input
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    placeholder="+32 ..."
                                    required
                                />
                            </label>
                        </div>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="you@example.com"
                                required
                            />
                        </label>
                        <div className="form-row">
                            <label>
                                Make
                                <input
                                    name="make"
                                    value={data.make}
                                    onChange={(e) => setData('make', e.target.value)}
                                    placeholder="Mercedes-Benz"
                                />
                            </label>
                            <label>
                                Model
                                <input
                                    name="model"
                                    value={data.model}
                                    onChange={(e) => setData('model', e.target.value)}
                                    placeholder="GLE 43 AMG"
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Year
                                <input
                                    name="year"
                                    value={data.year}
                                    onChange={(e) => setData('year', e.target.value)}
                                    placeholder="2017–2019"
                                />
                            </label>
                            <label>
                                Budget
                                <input
                                    name="budget"
                                    value={data.budget}
                                    onChange={(e) => setData('budget', e.target.value)}
                                    placeholder="€ / $"
                                />
                            </label>
                        </div>
                        <label>
                            Destination country
                            <input
                                name="destination"
                                value={data.destination}
                                onChange={(e) => setData('destination', e.target.value)}
                                placeholder="Belgium / Nigeria / ..."
                            />
                        </label>
                        <label>
                            Requirements
                            <textarea
                                name="requirements"
                                value={data.requirements}
                                onChange={(e) => setData('requirements', e.target.value)}
                                rows={4}
                                placeholder="Tell us about mileage, colour, options, condition, etc."
                            />
                        </label>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? 'Submitting...' : 'Send Vehicle Request'}
                        </button>
                    </form>
                </div>
            </section>
        </PublicShell>
    );
}
