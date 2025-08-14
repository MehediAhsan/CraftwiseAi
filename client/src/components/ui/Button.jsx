const VARIANTS = {
    primary: "text-white",
    secondary: "text-white",
    danger: "text-white",
    outline: "text-gray-800 border border-gray-400 bg-white hover:bg-gray-100",
};

const GRADIENTS = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-400",
    secondary: "bg-gradient-to-r from-violet-500 to-violet-400",
    danger: "bg-gradient-to-r from-red-500 to-red-400",
};

const SIZES = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
};

const Button = ({
    text,
    icon: Icon,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    customGradient,
    className = "",
}) => {
    const baseClasses = `flex items-center justify-center w-full gap-2 rounded-lg shadow transition cursor-pointer
    ${SIZES[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`;

    const variantClasses =
        variant === "outline"
            ? VARIANTS[variant]
            : `${VARIANTS[variant]} ${customGradient || GRADIENTS[variant]}`;

    return (
        <button
            type="sumbit"
            onClick={disabled ? undefined : onClick}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {Icon && <Icon size={16} />}
            {text}
        </button>
    );
};

export default Button;
