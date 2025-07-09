import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`
                group relative inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out rounded-md
                focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#a47148]
                ${
                    active
                        ? 'bg-[#f3ede6] text-[#5c4438] shadow-sm ring-1 ring-[#d6ccc2]'
                        : 'text-[#7b5e4a] hover:text-[#4b3832] hover:bg-[#f5f3ea]'
                }
                ${className}
            `}
        >
            <span>{children}</span>

            {active && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#a47148] rounded-full animate-[slideIn_0.3s_ease-in-out]" />
            )}
        </Link>
    );
}
