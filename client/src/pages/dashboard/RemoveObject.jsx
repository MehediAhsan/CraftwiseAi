import { Sparkles, Eraser, Scissors } from "lucide-react";
import InputField from "../../components/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import CardForm from "../../components/ui/CardForm";
import GeneratedContentCard from "../../components/ui/GeneratedContentCard";
import TextAreaField from "../../components/ui/TextAreaField";

export default function RemoveObject() {
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
            <CardForm title="AI Object Removal" icon={Sparkles}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputField
                        name="image"
                        label="Upload image"
                        type="file"
                        register={register}
                        rules={{ required: "Please upload an image" }}
                        error={errors.image?.message}
                    />
                    <TextAreaField
                        name="description"
                        label="Describe what to remove"
                        placeholder="Describe what you want to remove from the image (e.g. a person, a car, etc.)..."
                        register={register}
                        rules={{ required: "Please enter a description" }}
                        error={errors.description?.message}
                        rows={4}
                    />
                    <Button text="Remove Object" icon={Scissors} customGradient="bg-gradient-to-r from-teal-500 to-teal-400" size="md" />
                </form>
            </CardForm>
            <GeneratedContentCard
                title="Processed Image"
                headerIcon={Scissors}
                placeholderIcon={Scissors}
                placeholderText='Upload an image and describe what to remove'
            />
        </div>
    );
}
