import { FieldGroup, Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function BasicForm() {
  return (
    <FieldGroup className="w-full">
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input id="title" placeholder="Title of Todo" />
        <FieldError>Error on Title</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor="description">Description</FieldLabel>
        <Input id="description" placeholder="Description of todo" />
        <FieldError>Error on Description</FieldError>
      </Field>
      <div aria-label="button-group" className="w-full flex items-center gap-2">
        <Button type="reset" variant="outline" className="w-1/2">
          Reset Field
        </Button>
        <Button type="submit" className="w-1/2">
          Submit
        </Button>
      </div>
    </FieldGroup>
  );
}
