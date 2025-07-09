import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Konfirmasi Kata Sandi" />

            <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 mx-auto mt-8 border border-gray-200">
                <h1 className="text-3xl font-bold font-serif text-center text-[#4B3832] mb-3">
                    Konfirmasi Kata Sandi 🔐
                </h1>
                <p className="text-sm text-center text-gray-600 mb-6">
                    Ini adalah area yang aman. Mohon masukkan kata sandi kamu untuk melanjutkan.
                </p>

                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Kata Sandi
                        </label>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex justify-end">
                        <PrimaryButton
                            className="px-6 py-2 bg-[#5c4438] hover:bg-[#49362d] text-white rounded-lg shadow-md text-sm font-semibold"
                            disabled={processing}
                        >
                            Konfirmasi
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
