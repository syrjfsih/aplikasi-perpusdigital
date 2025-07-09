export default function Checkbox({ label, id, ...props }) {
    return (
        <div className="flex items-center gap-2">
            <input
                {...props}
                id={id}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition duration-150 ease-in-out"
            />
            {label && (
                <label htmlFor={id} className="text-sm text-gray-700 select-none">
                    {label}
                </label>
            )}
        </div>
    );
}
{/* <Checkbox
    id="agree"
    name="agree"
    label="Saya menyetujui syarat & ketentuan"
/> */}