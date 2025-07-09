import React from 'react';

export default function Card({ title, children, className = '' }) {
    return (
        <div
            className={`rounded-xl shadow-sm border border-[#e5ddd5] bg-white overflow-hidden ${className}`}
        >
            {/* Header Card */}
            <div className="bg-[#faf6f1] px-5 py-4 border-b border-[#e4d8cc]">
                <h3 className="text-base font-semibold text-[#4b3832] tracking-wide font-serif capitalize">
                    {title}
                </h3>
            </div>

            {/* Body Card */}
            <div className="px-5 py-4 text-sm text-[#3f3f3f]">{children}</div>
        </div>
    );
}
