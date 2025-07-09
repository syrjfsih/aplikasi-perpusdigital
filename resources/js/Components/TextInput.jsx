import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            ref={localRef}
            className={`w-full px-4 py-2 rounded-md border bg-white text-sm text-[#3a2c27] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#a47148] focus:border-[#a47148] border-gray-300 transition-all duration-150 ${className}`}
        />
    );
});
