import { Sparkles, Eraser, FileCheck } from "lucide-react";
import InputField from "../../components/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import CardForm from "../../components/ui/CardForm";
import GeneratedContentCard from "../../components/ui/GeneratedContentCard";

export default function ResumeReview() {
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
            <CardForm title="AI Resume Review" icon={Sparkles}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputField
                        name="image"
                        label="Upload Resume"
                        type="file"
                        register={register}
                        rules={{ required: "Please upload an image" }}
                        error={errors.image?.message}
                    />
                    <Button text="Review Resume" icon={FileCheck} customGradient="bg-gradient-to-r from-teal-500 to-blue-400" size="md" />
                </form>
            </CardForm>
            <GeneratedContentCard
                title="Analysis Results"
                headerIcon={FileCheck}
                placeholderIcon={FileCheck}
                placeholderText='Upload your resume and click "Review Resume" to get started'
            />
        </div>
    );
}
