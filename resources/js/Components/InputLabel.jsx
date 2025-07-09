export default function InputLabel({
    value,
    className = '',
    required = false,
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block text-sm font-semibold text-gray-800 tracking-wide mb-1 ${className}`}
        >
            {value || children}
            {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
    );
}
