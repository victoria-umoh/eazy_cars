import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Globe,
    Mail,
    Menu,
    MessageCircle,
    Phone,
    ShieldCheck,
    Truck,
    X,
} from 'lucide-react';
import { about, contact, dashboard, home, inventory, login } from '@/routes';

export default function PublicShell({
    children,
}: {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const whatsappNumber = '+32 497 91 10 05';
    const whatsappUrl = 'https://wa.me/32497911005';

    const navLinks = [
        { label: 'Home', href: home() },
        { label: 'Cars for Sale', href: inventory() },
        { label: 'Auctions', href: about() },
        { label: 'Markets', href: inventory() },
        { label: 'Import / Export', href: about() },
        { label: 'Car Sourcing', href: contact() },
        { label: 'About Us', href: about() },
        { label: 'Contact', href: contact() },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[#171a1f] antialiased selection:bg-[#d8ad55] selection:text-black">
            {/* Site Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/95 text-white backdrop-blur-md">
                <div className="mx-auto flex min-h-[76px] w-[min(1180px,92%)] items-center justify-between gap-6">
                    {/* Brand Logo */}
                    <Link
                        href={home()}
                        className="text-[22px] font-extrabold tracking-[1.5px] whitespace-nowrap"
                    >
                        EAZY'S <span className="text-[#d8ad55]">CARS</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-5 text-[14px] lg:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white/90 transition hover:text-[#d8ad55]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Header Action & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden rounded-full border border-[#d8ad55] px-4 py-2 text-[13px] font-bold text-[#d8ad55] transition hover:bg-[#d8ad55] hover:text-[#0d1117] sm:inline-flex"
                        >
                            WhatsApp
                        </a>

                        <Link
                            href={auth.user ? dashboard() : login()}
                            className="hidden rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/20 sm:inline-flex"
                        >
                            {auth.user ? 'Admin' : 'Login'}
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-2xl text-white lg:hidden"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="size-6" />
                            ) : (
                                <Menu className="size-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-white/10 bg-[#0d1117] px-6 py-5 lg:hidden">
                        <div className="flex flex-col gap-3 text-sm">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-1 text-white/90 hover:text-[#d8ad55]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white"
                                >
                                    WhatsApp Us ({whatsappNumber})
                                </a>
                                <Link
                                    href={auth.user ? dashboard() : login()}
                                    className="inline-flex items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                                >
                                    {auth.user ? 'Admin Dashboard' : 'Staff Login'}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Page Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="relative overflow-hidden bg-[#09111a] text-white">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(232,72,62,0.05),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.015),transparent_55%)]" />

                <div className="relative mx-auto grid w-[min(1180px,92%)] gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-28">
                    {/* Left Panel: Get a Quote */}
                    <div>
                        <h2 className="text-[27px] font-extrabold text-[#f7f7f7]">
                            Get a Quote
                        </h2>
                        <div className="my-4.5 h-[3px] w-[35px] rounded-[3px] bg-[#e8483e]" />
                        <p className="text-[14px] leading-relaxed text-[#e0e4e8]">
                            Tell us what you need and we'll get back to you as
                            soon as possible.
                        </p>

                        <div className="mt-7 grid gap-5">
                            <div className="flex items-center gap-4">
                                <span className="flex size-7 items-center justify-center text-[22px] font-bold text-[#f0443d]">
                                    <Globe className="size-6 text-[#f0443d]" />
                                </span>
                                <div>
                                    <strong className="block text-[13px] font-bold text-[#f4f4f4]">
                                        Global Car Sourcing
                                    </strong>
                                    <span className="block text-[12px] text-[#b9c1ca]">
                                        We source quality vehicles worldwide.
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="flex size-7 items-center justify-center text-[22px] font-bold text-[#f0443d]">
                                    <Truck className="size-6 text-[#f0443d]" />
                                </span>
                                <div>
                                    <strong className="block text-[13px] font-bold text-[#f4f4f4]">
                                        Import & Export
                                    </strong>
                                    <span className="block text-[12px] text-[#b9c1ca]">
                                        Reliable import and export services.
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="flex size-7 items-center justify-center text-[22px] font-bold text-[#f0443d]">
                                    <ShieldCheck className="size-6 text-[#f0443d]" />
                                </span>
                                <div>
                                    <strong className="block text-[13px] font-bold text-[#f4f4f4]">
                                        Trusted & Transparent
                                    </strong>
                                    <span className="block text-[12px] text-[#b9c1ca]">
                                        Honest service and clear communication.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Contact Information */}
                    <div>
                        <h2 className="text-[27px] font-extrabold text-[#f7f7f7]">
                            Contact Information
                        </h2>

                        <div className="mt-5 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-[30px] items-center justify-center rounded-[6px] bg-[#e8483e]/15 text-[#f0443d]">
                                    <Mail className="size-4" />
                                </div>
                                <div>
                                    <strong className="block text-[13px] text-[#f5f5f5]">
                                        Email
                                    </strong>
                                    <a
                                        href="mailto:info@eazyscars.be"
                                        className="text-[13px] text-[#bfc6ce] transition hover:text-white"
                                    >
                                        info@eazyscars.be
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-[30px] items-center justify-center rounded-[6px] bg-[#e8483e]/15 text-[#f0443d]">
                                    <Mail className="size-4" />
                                </div>
                                <div>
                                    <strong className="block text-[13px] text-[#f5f5f5]">
                                        Sales
                                    </strong>
                                    <a
                                        href="mailto:sales@eazyscars.be"
                                        className="text-[13px] text-[#bfc6ce] transition hover:text-white"
                                    >
                                        sales@eazyscars.be
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-[30px] items-center justify-center rounded-[6px] bg-[#e8483e]/15 text-[#f0443d]">
                                    <Mail className="size-4" />
                                </div>
                                <div>
                                    <strong className="block text-[13px] text-[#f5f5f5]">
                                        Export
                                    </strong>
                                    <a
                                        href="mailto:export@eazyscars.be"
                                        className="text-[13px] text-[#bfc6ce] transition hover:text-white"
                                    >
                                        export@eazyscars.be
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-[30px] items-center justify-center rounded-[6px] bg-[#e8483e]/15 text-[#f0443d]">
                                    <Phone className="size-4" />
                                </div>
                                <div>
                                    <strong className="block text-[13px] text-[#f5f5f5]">
                                        WhatsApp
                                    </strong>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[13px] text-[#bfc6ce] transition hover:text-white"
                                    >
                                        {whatsappNumber}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-[7px] bg-[#16c66b] px-4 py-2.5 text-[13px] font-extrabold text-white shadow-[0_6px_18px_rgba(22,198,107,0.16)] transition hover:-translate-y-0.5 hover:bg-[#11b85f]"
                        >
                            <MessageCircle className="size-4 fill-white" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="relative border-t border-white/10 py-5">
                    <div className="mx-auto flex w-[min(1180px,92%)] flex-col items-center justify-between gap-4 text-[11px] text-[#7f8994] sm:flex-row">
                        <p className="m-0">
                            © {new Date().getFullYear()} Eazy's Cars. All rights
                            reserved.
                        </p>
                        <div className="flex items-center gap-5 text-[15px] font-bold text-[#d6dbe0]">
                            <span className="hover:text-white">f</span>
                            <span className="hover:text-white">◎</span>
                            <span className="hover:text-white">◔</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <div className="fixed right-5 bottom-5 z-50">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:scale-105"
                >
                    <MessageCircle className="size-4 fill-white" />
                    WhatsApp
                </a>
            </div>
        </div>
    );
}
