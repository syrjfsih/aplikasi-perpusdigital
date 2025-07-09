import { Link, useForm } from '@inertiajs/react';
import {
    IconArrowBack,
    IconCheck,
    IconPencilCog,
    IconPlus,
    IconTrash,
} from '@tabler/icons-react';
import Swal from 'sweetalert2';

export default function Button({ type, url, className = '', children, ...props }) {
    const { delete: destroy } = useForm();

    const handleDeleteData = (url) => {
        Swal.fire({
            title: 'Yakin ingin menghapus data ini?',
            text: 'Data yang dihapus tidak dapat dikembalikan!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal',
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(url);
                Swal.fire({
                    title: 'Terhapus!',
                    text: 'Data berhasil dihapus.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    const baseStyle = 'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-all duration-150 focus:outline-none';

    return (
        <>
            {type === 'add' && (
                <Link
                    href={url}
                    className={`${baseStyle} bg-emerald-100 text-emerald-700 hover:bg-emerald-200 ${className}`}
                >
                    <IconPlus size={18} strokeWidth={1.5} />
                    <span className="hidden md:inline">Tambah Data</span>
                </Link>
            )}

            {type === 'modal' && (
                <button
                    {...props}
                    type="button"
                    className={`${baseStyle} bg-sky-100 text-sky-700 hover:bg-sky-200 ${className}`}
                >
                    {children}
                </button>
            )}

            {type === 'submit' && (
                <button
                    type="submit"
                    className={`${baseStyle} bg-teal-100 text-teal-700 border border-teal-200 hover:bg-teal-200 ${className}`}
                >
                    <IconCheck size={16} strokeWidth={1.5} />
                    Simpan
                </button>
            )}

            {type === 'cancel' && (
                <Link
                    href={url}
                    className={`${baseStyle} bg-rose-100 text-rose-700 hover:bg-rose-200 ${className}`}
                >
                    <IconArrowBack size={16} strokeWidth={1.5} />
                    Kembali
                </Link>
            )}

            {type === 'edit' && (
                <Link
                    href={url}
                    className={`${baseStyle} bg-orange-100 text-orange-700 hover:bg-orange-200 ${className}`}
                >
                    <IconPencilCog size={16} strokeWidth={1.5} />
                    <span className="hidden md:inline">Ubah</span>
                </Link>
            )}

            {type === 'delete' && (
                <button
                    type="button"
                    onClick={() => handleDeleteData(url)}
                    className={`${baseStyle} bg-red-100 text-red-700 hover:bg-red-200 ${className}`}
                >
                    <IconTrash size={16} strokeWidth={1.5} />
                    <span className="hidden md:inline">Hapus</span>
                </button>
            )}
        </>
    );
}
