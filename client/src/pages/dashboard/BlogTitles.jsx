import { Sparkles, HashIcon } from "lucide-react";
import InputField from "../../components/ui/InputField";
import { useForm } from "react-hook-form";
import OptionSelect from "../../components/ui/OptionSelect";
import Button from "../../components/ui/Button";
import CardForm from "../../components/ui/CardForm";
import GeneratedContentCard from "../../components/ui/GeneratedContentCard";

export default function BlogTitles() {
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
      <CardForm title="AI Title Generator" icon={Sparkles}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            name="keyword"
            label="Keyword"
            placeholder="Write Keyword..."
            register={register}
            rules={{ required: "Please enter a keyword" }}
            error={errors.keyword?.message}
          />
          <OptionSelect
            name="category"
            label="Category"
            defaultValue="general"
            options={[
              { label: "General", value: "general" },
              { label: "Science", value: "science" },
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Health", value: "health" },
              { label: "Education", value: "education" },
              { label: "Finance", value: "finance" },
              { label: "Entertainment", value: "entertainment" },
            ]}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <Button text="Generate Title" icon={HashIcon} variant="secondary" size="md" />
        </form>
      </CardForm>
      <GeneratedContentCard
        title="Generated titles"
        headerIcon={HashIcon}
        placeholderIcon={HashIcon}
        placeholderText='Enter keywords and click "Generate Titles" to get started'
      />
    </div>
  );
}
