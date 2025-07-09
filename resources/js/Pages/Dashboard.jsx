import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth.user;
    const roles = Array.isArray(auth.roles) ? auth.roles : [];
    const isAdmin = roles.includes('admin');

    const totalBooks = 1267;
    const totalBorrowsToday = 12;
    const totalCategories = 8;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-3xl font-bold tracking-tight text-[#4B3B2A] font-serif">
                    📚 Selamat Datang di Perpustakaan Digital
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gradient-to-br from-[#fefaf6] via-[#f8f3ed] to-[#f2e9df] min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    {/* Greeting Card */}
                    <div className="overflow-hidden rounded-2xl border border-[#e6dcd2] bg-white shadow-md">
                        <div className="p-8 flex items-center gap-6">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/337/337953.png"
                                alt="Book Icon"
                                className="w-16 h-16 drop-shadow-sm animate-wiggle"
                            />
                            <div>
                                <h3 className="text-2xl font-bold text-[#4b3b2a] font-serif">
                                    Hai, <span className="text-[#a47148]">{user.name}</span> 👋
                                </h3>
                                <p className="text-sm text-gray-700 mt-2 font-light max-w-xl">
                                    {isAdmin
                                        ? 'Selamat datang kembali, Pustakawan. Saatnya mengatur dunia literasi dengan elegan. 📖'
                                        : 'Selamat membaca dan menjelajah. Setiap halaman adalah pintu menuju semesta pengetahuan. 🌿'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Statistik */}
                    {isAdmin && (
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#fff7ed] rounded-xl p-6 shadow-md border border-[#fcebd1] hover:shadow-xl transition duration-300">
                                <h4 className="text-lg font-semibold text-[#5b4233] font-serif">Total Buku</h4>
                                <p className="text-4xl mt-3 text-[#402e2a] font-bold">📘 {totalBooks}</p>
                            </div>
                            <div className="bg-[#fef3eb] rounded-xl p-6 shadow-md border border-[#f8e5db] hover:shadow-xl transition duration-300">
                                <h4 className="text-lg font-semibold text-[#5b4233] font-serif">Peminjaman Hari Ini</h4>
                                <p className="text-4xl mt-3 text-[#402e2a] font-bold">📦 {totalBorrowsToday}</p>
                            </div>
                            <div className="bg-[#f8f0e3] rounded-xl p-6 shadow-md border border-[#eadccf] hover:shadow-xl transition duration-300">
                                <h4 className="text-lg font-semibold text-[#5b4233] font-serif">Kategori Buku</h4>
                                <p className="text-4xl mt-3 text-[#402e2a] font-bold">📚 {totalCategories}</p>
                            </div>
                        </div>
                    )}

                    {/* Quote */}
                    <div className="mt-12">
                        <div className="bg-white rounded-xl shadow p-6 border border-[#e2d5c3]">
                            <h3 className="text-xl font-semibold text-[#4e342e] font-serif mb-3">📖 Catatan Hari Ini</h3>
                            <p className="text-gray-600 italic text-sm">
                                “Perpustakaan adalah tempat waktu melepaskan kecepatannya, dan kata-kata menemukan rumahnya.” — 📚
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
