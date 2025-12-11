import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import { cn } from "@workspace/ui/lib/utils";

const FilterInput = ({
  icon: Icon,
  name,
  placeholder,
  selectOptions,
  className,
  onChange,
  value,
}: FilterInputProps) => {
  const selectedOptions = selectOptions && ["All", ...selectOptions]

  return selectedOptions ? (
    <Select name={name} onValueChange={(value) => onChange(value)} value={value}>
      <InputGroup className={cn("h-12 py-3 max-h-12 border-gray-200", className)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectedOptions.map((item: string, index: number) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
        <InputGroupAddon>
          <Icon className="text-dark-500 size-6" />
        </InputGroupAddon>
      </InputGroup>
    </Select>
  ) : (
    <InputGroup className={cn("h-12 max-h-12 py-3 border-gray-200", className)}>
      <InputGroupInput placeholder={placeholder} name={name} value={value} onChange={(e) => onChange(e.target.value)}/>
      <InputGroupAddon>
        <Icon className="text-dark-500 size-6" />
      </InputGroupAddon>
    </InputGroup>
  );
};
export default FilterInput;
