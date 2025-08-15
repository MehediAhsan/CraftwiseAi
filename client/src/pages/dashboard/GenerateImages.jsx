import { Sparkles, Image } from "lucide-react";
import { useForm } from "react-hook-form";
import OptionSelect from "../../components/ui/OptionSelect";
import Button from "../../components/ui/Button";
import CardForm from "../../components/ui/CardForm";
import GeneratedContentCard from "../../components/ui/GeneratedContentCard";
import TextAreaField from "../../components/ui/TextAreaField";

export default function GenerateImages() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch, setValue
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardForm title="AI Image Generator" icon={Sparkles}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextAreaField
                        name="description"
                        label="Describe Your Image"
                        placeholder="Describe what you want to see in the image..."
                        register={register}
                        rules={{ required: "Please enter a description" }}
                        error={errors.description?.message}
                        rows={4}
                    />
                    <OptionSelect
                        name="style"
                        label="Style"
                        defaultValue="realistic"
                        options={[
                            { label: "Realistic", value: "realistic" },
                            { label: "Cartoon", value: "cartoon" },
                            { label: "Comedy", value: "comedy" },
                            { label: "Ghibli", value: "ghibli" },
                        ]}
                        register={register}
                        setValue={setValue}
                        watch={watch}
                    />
                    <Button text="Generate Image" icon={Image} customGradient="bg-gradient-to-r from-purple-500 to-purple-400" size="md" />
                </form>
            </CardForm>
            <GeneratedContentCard
                title="Generated Images"
                headerIcon={Image}
                placeholderIcon={Image}
                placeholderText='Describe an image and click "Generate Image" to get started'
            />
        </div>
    );
}
