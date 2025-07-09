export default function Textarea({ label, className = '', errors, ...props }) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-medium text-[#4b3832] font-serif tracking-wide">
                    {label}
                </label>
            )}
            <textarea
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg text-sm text-[#3b2f2f] bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#a47148] focus:ring-1 focus:ring-[#a47148] transition-all border-[#ddd] ${className}`}
                {...props}
            />
            {errors && (
                <small className="text-xs text-red-500 font-medium">{errors}</small>
            )}
        </div>
    );
}
