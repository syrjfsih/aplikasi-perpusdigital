import { useForm } from '@inertiajs/react';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

export default function Search({ url, placeholder = 'Cari sesuatu...' }) {
    const { data, setData, get } = useForm({
        search: '',
    });

    const handleSearchData = (e) => {
        e.preventDefault();
        get(`${url}?search=${data.search}`);
    };

    return (
        <form onSubmit={handleSearchData} className="relative w-full max-w-md">
            <input
                type="text"
                value={data.search}
                onChange={(e) => setData('search', e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-[#e0dede] bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 shadow-sm transition focus:border-[#c2b7aa] focus:ring-2 focus:ring-[#a47148]/20 focus:outline-none"
            />
            <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#a47148] hover:text-[#845c3c] transition"
            >
                <IconSearch size={20} stroke={1.5} />
            </button>
        </form>
    );
}
