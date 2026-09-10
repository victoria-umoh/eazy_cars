import { Link } from '@inertiajs/react';
import { ArrowLeft, Shield } from 'lucide-react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#0a0e17] p-6 text-white selection:bg-[#d8ad55] selection:text-black">
            {/* Ambient luxury glow effects */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-b from-[#d8ad55]/15 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-[#e8483e]/10 to-transparent blur-3xl" />

            {/* Back to Website Link */}
            <div className="absolute top-6 left-6 z-20">
                <Link
                    href={home()}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md transition hover:border-[#d8ad55]/50 hover:bg-white/10 hover:text-white"
                >
                    <ArrowLeft className="size-3.5 text-[#d8ad55]" />
                    Back to Eazy's Cars
                </Link>
            </div>

            {/* Auth Card Container */}
            <div className="relative z-10 w-full max-w-md">
                <div className="rounded-2xl border border-white/10 bg-[#111824]/90 p-8 shadow-2xl shadow-black/80 backdrop-blur-xl sm:p-10">
                    <div className="flex flex-col items-center gap-4 text-center mb-8">
                        {/* Brand Logo */}
                        <Link
                            href={home()}
                            className="group flex flex-col items-center gap-3 transition"
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl border border-[#d8ad55]/40 bg-[#d8ad55]/10 text-[#d8ad55] shadow-lg shadow-[#d8ad55]/10 transition group-hover:scale-105 group-hover:bg-[#d8ad55]/20">
                                <Shield className="size-6 text-[#d8ad55]" />
                            </div>
                            <span className="text-xl font-extrabold tracking-[2px] text-white">
                                EAZY'S <span className="text-[#d8ad55]">CARS</span>
                            </span>
                        </Link>

                        <div className="space-y-1 mt-1">
                            <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
                            {description && (
                                <p className="text-xs text-gray-400">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    {children}
                </div>

                {/* Footer attribution */}
                <p className="mt-6 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Eazy's Cars Belgium. Secure Portal.
                </p>
            </div>
        </div>
    );
}
