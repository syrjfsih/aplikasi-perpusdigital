export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white
                transition-all duration-200 ease-in-out
                bg-red-600 hover:bg-red-500 active:bg-red-700 focus:outline-none
                focus:ring-2 focus:ring-red-400 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-sm hover:shadow-md
                ${className}`}
        >
            {children}
        </button>
    );
}
