import { Input } from '@/components/ui/input';
import FormWrapper from './FormWrapper';
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Button } from '@/components/ui/button';

export default function FormLevel4() {
  return (
    <FormWrapper
      formProps={{}}
      formTitle="Form Level 4"
      footer={
        <>
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="button" variant="outline">
            Reset
          </Button>
          <Button type="submit">Create</Button>
        </>
      }
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
          <Input id="title" type="text" placeholder="Your First Name" />
          <FieldDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </FieldDescription>
          <FieldError />
        </Field>
      </FieldGroup>
    </FormWrapper>
  );
}
