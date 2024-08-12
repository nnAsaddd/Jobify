import { FormInputType } from "@/utils/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInput = (props: FormInputType) => {
  const { title, type, label, defaultValue } = props;
  return (
    <div>
      <Label htmlFor={title} className="capitalize">
        {label || title}
      </Label>
      <Input
        id={title}
        type={type}
        name={title}
        required
        defaultValue={defaultValue || ""}
        className="bg-background"
      />
    </div>
  );
};
export default FormInput;
