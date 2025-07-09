export default function Container({ children }) {
    return (
        <div className="py-16 bg-[#fdfaf6]">
            <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
