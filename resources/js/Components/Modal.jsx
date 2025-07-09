import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react';

export default function Modal({
    children,
    show = false,
    maxWidth = '2xl',
    closeable = true,
    onClose = () => {},
}) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
    }[maxWidth];

    return (
        <Transition show={show} as="div" className="relative z-50">
            <Dialog
                as="div"
                className="fixed inset-0 overflow-y-auto"
                onClose={close}
            >
                <div className="flex min-h-screen items-center justify-center px-4 py-8 text-center sm:block sm:p-0">
                    {/* Background overlay */}
                    <TransitionChild
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
                    </TransitionChild>

                    {/* Trick for vertical centering */}
                    <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                        &#8203;
                    </span>

                    {/* Modal panel */}
                    <TransitionChild
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                            className={`inline-block w-full transform overflow-hidden rounded-2xl border border-[#e4ded7] bg-white px-6 py-6 text-left align-middle shadow-xl transition-all sm:my-8 ${maxWidthClass}`}
                        >
                            {children}
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}

{/* <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
    <div className="text-center">
        <h2 className="text-xl font-bold text-[#4b3832]">📚 Konfirmasi</h2>
        <p className="text-sm text-gray-600 mt-2">
            Apakah kamu yakin ingin menghapus buku ini?
        </p>
        <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">
                Batal
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                Hapus
            </button>
        </div>
    </div>
</Modal> */}
