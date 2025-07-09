import React from 'react';

const Card = ({ title, className = '', children }) => {
    return (
        <div className={`bg-white rounded-xl border border-[#e5e5e5] shadow-sm ${className}`}>
            {title && (
                <div className="px-6 py-4 border-b border-[#f0ece9] bg-[#fdfaf6] rounded-t-xl">
                    <h2 className="text-[15px] font-semibold text-[#4b3832] tracking-wide uppercase font-serif">
                        {title}
                    </h2>
                </div>
            )}
            <div className="p-4">{children}</div>
        </div>
    );
};

const Table = ({ children }) => {
    return (
        <div className="w-full overflow-x-auto rounded-lg border border-[#e5e5e5]">
            <table className="w-full text-sm text-[#3b2f2f]">{children}</table>
        </div>
    );
};

const Thead = ({ className = '', children }) => {
    return (
        <thead className={`bg-[#f7f4f0] border-b border-[#eaeaea] ${className}`}>
            {children}
        </thead>
    );
};

const Tbody = ({ className = '', children }) => {
    return (
        <tbody className={`divide-y divide-[#eee] bg-white ${className}`}>
            {children}
        </tbody>
    );
};

const Th = ({ className = '', children }) => {
    return (
        <th
            scope="col"
            className={`px-6 py-3 text-left text-sm font-semibold text-[#5c4438] uppercase font-serif ${className}`}
        >
            {children}
        </th>
    );
};

const Td = ({ className = '', children }) => {
    return (
        <td
            className={`px-6 py-4 whitespace-nowrap text-sm text-[#3a2f2f] align-middle ${className}`}
        >
            {children}
        </td>
    );
};

const Empty = ({ colSpan = 1, message = 'Data tidak tersedia', children }) => {
    return (
        <tr>
            <td colSpan={colSpan} className="py-20 text-center text-sm text-gray-500">
                <div className="flex flex-col items-center justify-center space-y-2">
                    {children}
                    <p>{message}</p>
                </div>
            </td>
        </tr>
    );
};

// Attach components
Table.Card = Card;
Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Th = Th;
Table.Td = Td;
Table.Empty = Empty;

export default Table;
