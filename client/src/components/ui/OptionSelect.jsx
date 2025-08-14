import { useEffect } from "react";

export default function OptionSelect({
    name,
    label,
    options,
    register,
    setValue,
    watch,
    defaultValue, // <- added prop
}) {
    const selected = watch(name);

    useEffect(() => {
        if (!selected && defaultValue) {
            setValue(name, defaultValue, { shouldValidate: true });
        }
    }, [selected, defaultValue, name, setValue]);

    return (
        <div>
            {label && <label className="block text-sm font-medium mb-2">{label}</label>}
            <div className="flex gap-3 flex-wrap">
                {options.map((opt) => {
                    const isActive = selected === opt.value;
                    return (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => setValue(name, opt.value)}
                            className={`px-4 py-2 text-sm cursor-pointer rounded-full border transition
                ${isActive
                                    ? "border-blue-500 bg-blue-50 text-blue-600"
                                    : "border-gray-200 hover:bg-gray-100"}`}
                        >
                            {opt.label}
                        </button>
                    );
                })}
            </div>
            <input type="hidden" {...register(name)} />
        </div>
    );
}
