
const GeneratedContentCard = ({
    title,
    headerIcon: HeaderIcon,
    content = null,
    placeholderIcon: PlaceholderIcon,
    placeholderText,
    className = "",
}) => {
    return (
        <div className={`bg-white rounded-xl border-2 border-light p-6 ${className}`}>
            <div className="flex items-center gap-2 mb-4">
                {HeaderIcon && <HeaderIcon className="text-primary" size={20} />}
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            <div className="flex flex-col items-center justify-center text-center min-h-[150px]">
                {content ? (
                    content
                ) : (
                    <div className="flex flex-col items-center text-gray-400">
                        {PlaceholderIcon && <PlaceholderIcon size={40} className="mb-3" />}
                        <p className="max-w-xs">{placeholderText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeneratedContentCard;
