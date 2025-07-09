import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdf8f3] via-[#f4ede4] to-[#e9dfd3] flex flex-col items-center justify-center px-4 py-12">
            <div className="mb-6">
                <Link href="/" className="flex flex-col items-center">
                    <ApplicationLogo className="h-16 w-16" />
                    <h1 className="mt-2 text-xl font-serif text-[#4b382f] font-semibold tracking-wide">
                        Perpustakaan Digital
                    </h1>
                </Link>
            </div>

            <div className="w-max-w-md bg-white/90 backdrop-blur-sm border border-[#ddd0c8] rounded-xl shadow-xl px-8 py-6">
                {children}
            </div>

            <footer className="mt-8 text-xs text-[#7c6f63]">
                &copy; 2025 • Perpustakaan Digital
            </footer>
        </div>
    );
}
