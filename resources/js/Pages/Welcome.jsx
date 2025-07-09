import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Selamat Datang di Perpustakaan Digital" />

            <div className="min-h-screen bg-gradient-to-br from-[#fdfaf6] via-[#f4eee7] to-[#e6dacf] text-[#3a2c27] flex flex-col justify-center items-center px-4 py-12">
                <div className="max-w-5xl w-full">
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold font-serif text-[#5b4436] drop-shadow-sm">
                            📚 Perpustakaan Digital
                        </h1>
                        <p className="mt-4 text-lg text-[#6d5241] max-w-xl mx-auto">
                            Portal modern untuk menjelajahi dunia literasi dan pengetahuan — di mana pun, kapan pun.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="w-64 text-center text-lg font-semibold bg-[#5c4438] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#49362d] transition duration-200"
                                >
                                    Masuk ke Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="w-64 text-center text-lg font-semibold bg-[#5c4438] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#49362d] transition duration-200"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="w-64 text-center text-lg font-semibold bg-[#a47148] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#8a5a35] transition duration-200"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#e9e2db]">
                            <h2 className="text-2xl font-bold text-[#4f392e] font-serif mb-2">📖 Tentang Kami</h2>
                            <p className="text-[#594437] text-sm leading-relaxed">
                                Kami adalah platform perpustakaan digital yang memudahkan akses terhadap buku dan informasi secara daring.
                                Dengan teknologi modern, kami menciptakan pengalaman membaca yang intuitif dan menyenangkan.
                            </p>
                        </div>

                        <div className="bg-[#faf8f4] rounded-2xl shadow-inner p-8 border border-[#e3d8cf]">
                            <h2 className="text-2xl font-bold text-[#4f392e] font-serif mb-2">🌟 Visi & Misi</h2>
                            <p className="text-[#594437] text-sm leading-relaxed">
                                Kami berkomitmen untuk meningkatkan budaya membaca dengan menyediakan layanan perpustakaan berbasis web yang inklusif, mudah digunakan, dan selalu berkembang sesuai kebutuhan zaman.
                            </p>
                        </div>
                    </section>

                    <div className="mt-16 text-center text-sm text-[#7a6a5c]">
                        &copy; 2025 Perpustakaan Digital by syrjfsih — Laravel v{laravelVersion} (PHP v{phpVersion})
                    </div>
                </div>
            </div>
        </>
    );
}
