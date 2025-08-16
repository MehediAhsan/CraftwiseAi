import { Sparkles, Eraser } from "lucide-react";
import InputField from "../../components/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import CardForm from "../../components/ui/CardForm";
import GeneratedContentCard from "../../components/ui/GeneratedContentCard";

export default function RemoveBg() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardForm title="AI Background Removal" icon={Sparkles}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputField
                        name="image"
                        label="Upload image"
                        type="file"
                        register={register}
                        rules={{ required: "Please upload an image" }}
                        error={errors.image?.message}
                    />
                    <Button text="Remove Background" icon={Eraser} customGradient="bg-gradient-to-r from-indigo-500 to-purple-400" size="md" />
                </form>
            </CardForm>
            <GeneratedContentCard
                title="Processed Image"
                headerIcon={Eraser}
                placeholderIcon={Eraser}
                placeholderText='Upload an image and click "Remove Background" to get started'
            />
        </div>
    );
}
