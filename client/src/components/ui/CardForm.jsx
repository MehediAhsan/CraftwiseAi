
const CardForm = ({ title, icon: Icon, children, className = "" }) => {
    return (
        <div className={`bg-white rounded-xl border-2 border-light p-6 space-y-4 ${className}`}>
            <div className="flex items-center gap-2">
                {Icon && <Icon className="text-primary" size={20} />}
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            {children}
        </div>
    );
};

export default CardForm;
