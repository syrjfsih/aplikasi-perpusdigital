import React from 'react';
import { Link } from '@inertiajs/react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

export default function Pagination({ links }) {
    return (
        <nav className="mt-6 flex justify-end">
            <ul className="inline-flex items-center gap-1 text-sm">
                {links.map((item, i) => {
                    if (!item.url) return null;

                    const isPrev = item.label.includes('Previous');
                    const isNext = item.label.includes('Next');
                    const isActive = item.active;

                    const baseClass = `px-3 py-1.5 border rounded-md transition duration-150 font-medium`;
                    const activeClass = `bg-[#5c4438] text-white border-[#5c4438] hover:bg-[#49362d]`;
                    const defaultClass = `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

                    return (
                        <li key={i}>
                            <Link
                                href={item.url}
                                className={
                                    baseClass +
                                    ' ' +
                                    (isPrev || isNext
                                        ? 'px-2 py-1.5'
                                        : isActive
                                        ? activeClass
                                        : defaultClass)
                                }
                            >
                                {isPrev ? (
                                    <IconChevronLeft size={18} />
                                ) : isNext ? (
                                    <IconChevronRight size={18} />
                                ) : (
                                    item.label
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
    