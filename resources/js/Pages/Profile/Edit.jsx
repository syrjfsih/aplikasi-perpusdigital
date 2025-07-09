import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-[#4B3B2A] tracking-tight font-serif">
                    👤 Profil Pengguna
                </h2>
            }
        >
            <Head title="Profil" />

            <div className="py-12 bg-gradient-to-br from-[#fdf6ec] via-[#f7efe5] to-[#efe2d0] min-h-screen">
                <div className="mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">

                    {/* Informasi Profil */}
                    <section className="bg-white border border-[#e0dede] rounded-xl shadow-md p-6 sm:p-8">
                        <h3 className="text-lg font-semibold text-[#4e342e] font-serif mb-4">
                            ✏️ Perbarui Informasi Profil
                        </h3>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </section>

                    {/* Update Password */}
                    <section className="bg-white border border-[#e0dede] rounded-xl shadow-md p-6 sm:p-8">
                        <h3 className="text-lg font-semibold text-[#4e342e] font-serif mb-4">
                            🔐 Ganti Kata Sandi
                        </h3>
                        <UpdatePasswordForm className="max-w-xl" />
                    </section>

                    {/* Hapus Akun */}
                    <section className="bg-white border border-[#e0dede] rounded-xl shadow-md p-6 sm:p-8">
                        <h3 className="text-lg font-semibold text-[#5c1f1f] font-serif mb-4">
                            ❌ Hapus Akun
                        </h3>
                        <p className="text-sm text-red-700 mb-2">
                            Peringatan: Tindakan ini tidak dapat dibatalkan.
                        </p>
                        <DeleteUserForm className="max-w-xl" />
                    </section>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
