import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormContainer from './FormContainer';
import { useForm } from '@tanstack/react-form';

interface FormLevelProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function FormLevel3({ onCancel }: FormLevelProps) {
  return (
    <FormContainer>
      <form>
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">Create New Author</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Name Field Group */}
          <FieldSet>
            <FieldLegend className="text-primary font-extrabold">Author Name</FieldLegend>
            <FieldDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                <Input id="title" type="text" placeholder="Your First Name" />
                <FieldDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </FieldDescription>
                <FieldError>Some Errors</FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="middleName">Middle Name</FieldLabel>
                <Input id="title" type="text" placeholder="Your Middle Name" />
                <FieldDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </FieldDescription>
                <FieldError>Some Errors</FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                <Input id="title" type="text" placeholder="Your Last Name" />
                <FieldDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </FieldDescription>
                <FieldError>Some Errors</FieldError>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator className="mb-4" />
          {/* Credentials Input */}
          <FieldSet>
            <FieldLegend className="text-primary font-extrabold">Credentials</FieldLegend>
            <FieldDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="Your Email" />
                <FieldDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </FieldDescription>
                <FieldError>Some errors</FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" placeholder="Your Username: example123" />
                <FieldDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </FieldDescription>
                <FieldError>Some errors</FieldError>
              </Field>
            </FieldGroup>
          </FieldSet>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {onCancel ? (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          ) : (
            <Button type="button" variant="outline" onClick={() => {}}>
              Reset
            </Button>
          )}

          <Button type="submit">Create</Button>
        </CardFooter>
      </form>
    </FormContainer>
  );
}
