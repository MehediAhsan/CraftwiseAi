export default function TextAreaField({
    name,
    label,
    register,
    rules,
    error,
    placeholder,
    rows = 4,
    ...rest
}) {
    return (
        <div className="space-y-1">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <textarea
                id={name}
                rows={rows}
                {...register(name, rules)}
                placeholder={placeholder}
                className={`w-full border rounded-lg px-4 py-2 outline-none transition
          focus:ring-2 focus:ring-blue-400 focus:border-blue-400
          ${error ? "border-red-500" : "border-gray-300"}`}
                {...rest}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
