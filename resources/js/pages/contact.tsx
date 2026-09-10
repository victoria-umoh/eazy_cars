import { FormEventHandler } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { CheckCircle2, Loader2, Mail, MessageCircle, Phone } from 'lucide-react';
import PublicShell from '@/components/public-shell';

export default function Contact() {
    const { flash } = usePage<{ flash?: { success?: string } }>().props;

    const { data, setData, post, processing, errors, recentlySuccessful, reset } =
        useForm({
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

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/inquiries', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const whatsappUrl = 'https://wa.me/32497911005';
    const whatsappNumber = '+32 497 91 10 05';

    return (
        <PublicShell>
            <Head>
                <title>Car Sourcing & Vehicle Request | Eazy's Cars</title>
                <meta
                    name="description"
                    content="Request a car sourced specifically for you. Eazy's Cars sources quality vehicles worldwide across Belgium, Europe, USA, Canada, and Japan. Sourcing Mercedes-Benz (ML350, GLE350, GLE43, GLC300, E300/E350, C300/C400/C500), Toyota (Camry, Corolla, Highlander), and Lexus (IS, ES350, RX350)."
                />
                <meta
                    name="keywords"
                    content="MERCEDES BENZ ML350, MERCEDES BENZ GLE350, MERCEDES BENZ GLE43, MERCEDES BENZ GLC300, MERCEDES BENZ E300, MERCEDES BENZ E350, MERCEDES BENZ C300, MERCEDES BENZ C400, MERCEDES BENZ C500, TOYOTA CAMRY, TOYOTA COROLLA, TOYOTA HIGHLANDER, LEXUS IS, LEXUS ES350, LEXUS RX350, car sourcing request, vehicle import, custom car order"
                />
                <link rel="canonical" href="https://eazyscars.be/find-your-car" />
                <meta
                    property="og:title"
                    content="Car Sourcing & Vehicle Request | Eazy's Cars"
                />
                <meta
                    property="og:description"
                    content="Tell us your requirements and we will find the right car for you with transparent pricing and international shipping."
                />
                <meta property="og:url" content="https://eazyscars.be/find-your-car" />
            </Head>

            {/* Page Hero */}
            <section className="bg-gradient-to-br from-[#0b1119] to-[#151d28] py-[110px] pb-[70px] text-white">
                <div className="mx-auto w-[min(1180px,92%)]">
                    <p className="mb-3.5 text-[12px] font-extrabold tracking-[2px] text-[#d8ad55] uppercase">
                        CAR SOURCING SERVICE
                    </p>
                    <h1 className="mb-4.5 text-[clamp(42px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-2px] text-white">
                        Can't find the right car?
                    </h1>
                    <p className="max-w-[720px] text-[18px] leading-relaxed text-[#c5cbd2]">
                        Let Eazy's Cars find it for you. Tell us what you need
                        and we'll search our available sourcing channels.
                    </p>
                </div>
            </section>

            {/* Page Section: Sourcing Form & Details */}
            <section className="bg-[#10151d] py-[85px] text-white">
                <div className="mx-auto grid w-[min(1180px,92%)] gap-16 lg:grid-cols-2 lg:items-start">
                    {/* Left Column: Information */}
                    <div>
                        <p className="mb-3 text-[12px] font-extrabold tracking-[2px] text-[#d8ad55] uppercase">
                            REQUEST A VEHICLE
                        </p>
                        <h2 className="mb-5 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-white">
                            Tell us your requirements.
                        </h2>
                        <p className="text-[20px] leading-relaxed text-[#bdc4ce]">
                            We source for customers and dealers across Belgium,
                            Europe, USA/Canada and Japan.
                        </p>

                        <div className="mt-8 rounded-[14px] border border-[#d8ad55]/45 p-6 bg-white/[0.02]">
                            <strong className="block text-[16px] font-bold text-white">
                                Transparent costs
                            </strong>
                            <p className="mt-2 text-[14px] leading-relaxed text-[#bdc4ce]">
                                Vehicle price, auction/dealer fees, transport,
                                shipping, customs/taxes and our sourcing/service
                                fee can be presented separately where applicable.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-[14px] text-[#bdc4ce]">
                            <p>
                                <strong className="text-white">Email:</strong>{' '}
                                <a
                                    href="mailto:info@eazyscars.be"
                                    className="hover:text-[#d8ad55]"
                                >
                                    info@eazyscars.be
                                </a>
                            </p>
                            <p>
                                <strong className="text-white">Sales:</strong>{' '}
                                <a
                                    href="mailto:sales@eazyscars.be"
                                    className="hover:text-[#d8ad55]"
                                >
                                    sales@eazyscars.be
                                </a>
                            </p>
                            <p>
                                <strong className="text-white">WhatsApp:</strong>{' '}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#d8ad55]"
                                >
                                    {whatsappNumber}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Sourcing Form */}
                    <div className="rounded-[20px] bg-white p-8 text-[#111] shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:p-10">
                        <h3 className="mb-6 text-[25px] font-extrabold text-[#171a1f]">
                            Request a Vehicle
                        </h3>

                        {(recentlySuccessful || flash?.success) && (
                            <div className="mb-6 flex items-center gap-3 rounded-[10px] bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
                                <CheckCircle2 className="size-5 text-emerald-600" />
                                <span>
                                    {flash?.success ||
                                        'Your request has been sent successfully! We will contact you soon.'}
                                </span>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-[13px] font-bold text-[#171a1f]">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Your name"
                                        className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-[#171a1f]">
                                        WhatsApp / Phone *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        placeholder="+32 ..."
                                        className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-xs text-red-600">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-[#171a1f]">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="you@example.com"
                                    className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-[13px] font-bold text-[#171a1f]">
                                        Make
                                    </label>
                                    <input
                                        type="text"
                                        value={data.make}
                                        onChange={(e) =>
                                            setData('make', e.target.value)
                                        }
                                        placeholder="e.g. Mercedes-Benz"
                                        className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-[#171a1f]">
                                        Model
                                    </label>
                                    <input
                                        type="text"
                                        value={data.model}
                                        onChange={(e) =>
                                            setData('model', e.target.value)
                                        }
                                        placeholder="e.g. GLE 43 AMG"
                                        className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-[13px] font-bold text-[#171a1f]">
                                        Year Range
                                    </label>
                                    <input
                                        type="text"
                                        value={data.year}
                                        onChange={(e) =>
                                            setData('year', e.target.value)
                                        }
                                        placeholder="e.g. 2017–2019"
                                        className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold text-[#171a1f]">
                                        Budget (€ / $)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.budget}
                                        onChange={(e) =>
                                            setData('budget', e.target.value)
                                        }
                                        placeholder="e.g. €45,000"
                                        className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-[#171a1f]">
                                    Destination Country
                                </label>
                                <input
                                    type="text"
                                    value={data.destination}
                                    onChange={(e) =>
                                        setData('destination', e.target.value)
                                    }
                                    placeholder="Belgium / Nigeria / Germany / ..."
                                    className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-[#171a1f]">
                                    Requirements & Options
                                </label>
                                <textarea
                                    rows={4}
                                    value={data.requirements}
                                    onChange={(e) =>
                                        setData('requirements', e.target.value)
                                    }
                                    placeholder="Tell us about mileage, colour, options, condition, etc."
                                    className="mt-1.5 w-full rounded-[9px] border border-[#d8dce2] px-3 py-2.5 text-sm text-[#111] outline-none focus:border-[#d8ad55]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#d8ad55] px-6 py-3.5 text-sm font-extrabold text-[#111] transition hover:bg-[#c99f48] disabled:opacity-50"
                            >
                                {processing ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Send Vehicle Request'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </PublicShell>
    );
}
