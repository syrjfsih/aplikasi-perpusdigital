import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`
                flex w-full items-center gap-3 px-4 py-2.5 rounded-md
                text-base font-medium transition duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a47148]
                ${
                    active
                        ? 'bg-[#f4eade] text-[#5c4438] shadow-sm'
                        : 'text-gray-600 hover:bg-[#f7f5f2] hover:text-[#3b2f2f]'
                }
                ${className}
            `}
        >
            {children}
        </Link>
    );
}
