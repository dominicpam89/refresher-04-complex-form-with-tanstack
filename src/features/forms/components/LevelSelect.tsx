import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formLevels, type FormLevel } from '@/features/forms/utils';

interface Props {
  level: FormLevel | null;
  onValueChange: (level: FormLevel) => void;
}

export default function LevelSelect({ level, onValueChange }: Props) {
  return (
    <div aria-label="level-select" className="flex flex-col w-full items-start gap-1">
      <h3>Form Level Selection</h3>
      <Select onValueChange={onValueChange} value={level || ''} defaultValue="Select Level">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Form Level" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(formLevels).map((val) => (
            <SelectItem key={val} value={val}>
              Level {val}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
