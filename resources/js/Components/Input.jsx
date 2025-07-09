import React from 'react';

export default function Input({ label, type = 'text', className = '', errors, ...props }) {
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
                {...props}
            />
            {errors && (
                <span className="text-xs text-red-500 mt-1">{errors}</span>
            )}
        </div>
    );
}
