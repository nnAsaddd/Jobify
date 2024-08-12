import { FormSelectType } from "@/utils/types";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSelect = (props: FormSelectType) => {
  const { title, label, selectItem, defaultValue } = props;
  return (
    <div>
      <Label htmlFor={title} className="capitalize">
        {label || title}
      </Label>
      <Select name={title} defaultValue={defaultValue || selectItem[0]}>
        <SelectTrigger className="bg-background">
          <SelectValue
          // placeholder={selectItem[0]}
          />
        </SelectTrigger>
        <SelectContent>
          {selectItem.map((value) => {
            return (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default FormSelect;
