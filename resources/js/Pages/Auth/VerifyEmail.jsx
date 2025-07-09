import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Verifikasi Email" />

            <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 mx-auto mt-8 border border-gray-200">
                <h1 className="text-3xl font-bold font-serif text-center text-[#4B3832] mb-4">
                    Verifikasi Alamat Email 📧
                </h1>

                <p className="text-sm text-gray-600 mb-4 text-center">
                    Terima kasih telah mendaftar! Sebelum memulai, mohon verifikasi alamat email kamu
                    dengan mengklik link yang telah kami kirimkan.
                    Jika kamu belum menerima emailnya, kami bisa mengirim ulang.
                </p>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 text-sm font-medium text-green-600 text-center">
                        Link verifikasi baru telah dikirim ke alamat email kamu.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <PrimaryButton
                            className="w-full sm:w-auto px-6 py-2 bg-[#5c4438] hover:bg-[#49362d] text-white rounded-lg shadow-md text-sm font-semibold"
                            disabled={processing}
                        >
                            Kirim Ulang Email Verifikasi
                        </PrimaryButton>

                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="text-sm text-gray-600 underline hover:text-gray-900 transition"
                        >
                            Keluar
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
