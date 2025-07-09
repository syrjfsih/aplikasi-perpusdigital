export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            disabled={disabled}
            className={`inline-flex items-center justify-center rounded-lg border border-[#d6ccc2] bg-[#faf8f4] px-4 py-2 text-sm font-medium text-[#4a3a2b] transition-all duration-150 hover:bg-[#f0eae2] hover:text-[#3b2f2f] focus:outline-none focus:ring-2 focus:ring-[#a47148]/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
        >
            {children}
        </button>
    );
}
