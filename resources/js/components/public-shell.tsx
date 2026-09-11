import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function PublicShell({
    children,
}: {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}) {
    const { url } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);

    const isCurrent = (path: string) => {
        if (path === '/' && url === '/') return true;
        if (path !== '/' && url.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="site-wrapper">
            <header className="site-header">
                <div className="container nav-wrap">
                    <Link className="logo" href="/">
                        EAZY'S <span>CARS</span>
                    </Link>
                    <button
                        className="menu-toggle"
                        aria-label="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                    <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
                        <Link
                            href="/"
                            className={isCurrent('/') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/cars-for-sale"
                            className={isCurrent('/cars-for-sale') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Cars for Sale
                        </Link>
                        <Link
                            href="/auctions"
                            className={isCurrent('/auctions') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Auctions
                        </Link>
                        <Link
                            href="/markets"
                            className={isCurrent('/markets') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Markets
                        </Link>
                        <Link
                            href="/export"
                            className={isCurrent('/export') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Import / Export
                        </Link>
                        <Link
                            href="/find-your-car"
                            className={isCurrent('/find-your-car') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Car Sourcing
                        </Link>
                        <Link
                            href="/about"
                            className={isCurrent('/about') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className={isCurrent('/contact') ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                    <a
                        className="nav-whatsapp"
                        href="https://wa.me/32497911005"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>
            </header>

            <main>{children}</main>

            <footer className="footer">
                <div className="container footer-quote-wrap">
                    <div className="footer-quote-panel">
                        <h2>Get a Quote</h2>
                        <div className="footer-accent-line"></div>
                        <p>
                            Tell us what you need and we'll get back to you as soon as
                            possible.
                        </p>
                        <div className="footer-benefits">
                            <div className="footer-benefit">
                                <div className="footer-icon">◎</div>
                                <div>
                                    <strong>Global Car Sourcing</strong>
                                    <span>We source quality vehicles worldwide.</span>
                                </div>
                            </div>
                            <div className="footer-benefit">
                                <div className="footer-icon">▣</div>
                                <div>
                                    <strong>Import &amp; Export</strong>
                                    <span>Reliable import and export services.</span>
                                </div>
                            </div>
                            <div className="footer-benefit">
                                <div className="footer-icon">◇</div>
                                <div>
                                    <strong>Trusted &amp; Transparent</strong>
                                    <span>Honest service and clear communication.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact-panel">
                        <h2>Contact Information</h2>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">✉</div>
                            <div>
                                <strong>Email</strong>
                                <a href="mailto:info@eazyscars.be">info@eazyscars.be</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">✉</div>
                            <div>
                                <strong>Sales</strong>
                                <a href="mailto:sales@eazyscars.be">sales@eazyscars.be</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">✉</div>
                            <div>
                                <strong>Export</strong>
                                <a href="mailto:export@eazyscars.be">export@eazyscars.be</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">◔</div>
                            <div>
                                <strong>WhatsApp</strong>
                                <a
                                    href="https://wa.me/32497911005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +32 497 91 10 05
                                </a>
                            </div>
                        </div>
                        <a
                            className="footer-whatsapp-button"
                            href="https://wa.me/32497911005"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>◔</span> WhatsApp Us
                        </a>
                    </div>
                </div>
                <div className="container footer-bottom">
                    <p>© 2026 Eazy's Cars. All rights reserved.</p>
                    <div className="footer-socials">
                        <span>f</span>
                        <span>◎</span>
                        <span>◔</span>
                    </div>
                </div>
            </footer>

            <div className="whatsapp-float">
                <a
                    href="https://wa.me/32497911005"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ◔ WhatsApp
                </a>
            </div>
        </div>
    );
}
