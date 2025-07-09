export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`
                inline-flex items-center justify-center
                rounded-lg px-5 py-2.5
                text-sm font-medium text-white
                bg-[#5c4438]
                hover:bg-[#49362d] focus:bg-[#49362d]
                active:bg-[#3a2d24]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a47148]
                transition-all duration-200
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {children}
        </button>
    );
}
