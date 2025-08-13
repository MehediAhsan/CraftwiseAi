import { Sparkles, Edit3 } from "lucide-react";
import InputField from "../../components/ui/InputField";
import { useForm } from "react-hook-form";
import OptionSelect from "../../components/ui/OptionSelect";
import Button from "../../components/ui/Button";
import CardForm from "../../components/ui/CardForm";
import GeneratedContentCard from "../../components/ui/GeneratedContentCard";

export default function WriteArticle() {
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
      <CardForm title="AI Article Writer" icon={Sparkles}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            name="topic"
            label="Article Topic"
            placeholder="The future of artificial intelligence"
            register={register}
            rules={{ required: "Please enter an article topic" }}
            error={errors.topic?.message}
          />
          <OptionSelect
            name="articleLength"
            label="Article Length"
            defaultValue="short"
            options={[
              { label: "Short (200 - 400 words)", value: "short" },
              { label: "Long (400 - 800 words)", value: "long" },
            ]}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <Button text="Generate Article" icon={Edit3} variant="primary" size="md" />
        </form>
      </CardForm>
      <GeneratedContentCard
        title="Generated article"
        headerIcon={Edit3}
        placeholderIcon={Edit3}
        placeholderText='Enter a topic and click "Generate article" to get started'
      />
    </div>
  );
}
