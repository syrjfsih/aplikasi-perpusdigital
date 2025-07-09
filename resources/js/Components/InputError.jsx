import { IconAlertTriangle } from '@tabler/icons-react';

export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <div
            {...props}
            className={`mt-1 flex items-center text-sm text-red-500 gap-1.5 ${className}`}
        >
            <IconAlertTriangle size={16} className="stroke-1" />
            <span>{message}</span>
        </div>
    ) : null;
}
