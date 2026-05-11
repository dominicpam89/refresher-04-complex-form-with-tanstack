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
import {
  authorSchema,
  isUsernameTaken,
  type AuthorSchema,
} from '@/features/forms/schemas/author.schema';

interface FormLevelProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function FormLevel3({ onCancel }: FormLevelProps) {
  const defaultValues: AuthorSchema = {
    name: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
    email: '',
    username: '',
  };
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const {
    firstName: firstNameValidator,
    lastName: lastNameValidator,
    middleName: middleNameValidator,
  } = authorSchema.shape.name.shape;
  const { username: usernameValidator } = authorSchema.shape;

  return (
    <FormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
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
              <form.Field
                name="name.firstName"
                validators={{ onChange: firstNameValidator }}
                children={(field) => (
                  <Field>
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Your First Name"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    />
                    <FieldDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </FieldDescription>
                    <FieldError errors={field.state.meta.errors} />
                  </Field>
                )}
              />
              <form.Field
                name="name.middleName"
                validators={{ onChange: middleNameValidator }}
                children={(field) => (
                  <Field>
                    <FieldLabel htmlFor="middleName">Middle Name</FieldLabel>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Your Middle Name"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    />
                    <FieldDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </FieldDescription>
                    <FieldError errors={field.state.meta.errors} />
                  </Field>
                )}
              />
              <form.Field
                name="name.lastName"
                validators={{ onChange: lastNameValidator }}
                children={(field) => (
                  <Field>
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Your Last Name"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    />
                    <FieldDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </FieldDescription>
                    <FieldError errors={field.state.meta.errors} />
                  </Field>
                )}
              />
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
              <form.Field
                name="email"
                validators={{ onChange: authorSchema.shape.email }}
                children={(field) => (
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    />
                    <FieldDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </FieldDescription>
                    <FieldError errors={field.state.meta.errors} />
                  </Field>
                )}
              />
              <form.Field
                name="username"
                validators={{
                  onChange: usernameValidator,
                  onChangeAsync: async ({ value }) => {
                    const isTaken = await isUsernameTaken(value);
                    if (isTaken) {
                      return { message: 'Username is already taken' };
                    }
                    return undefined;
                  },
                  onChangeAsyncDebounceMs: 300,
                }}
                children={(field) => (
                  <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input
                      id="username"
                      placeholder="Your Username: example123"
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      onBlur={field.handleBlur}
                    />
                    {field.state.meta.isValidating && <span>checking username...</span>}
                    <FieldDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </FieldDescription>
                    <FieldError errors={field.state.meta.errors} />
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => {
              return (
                <>
                  {onCancel ? (
                    <Button type="button" variant="outline" onClick={onCancel}>
                      Cancel
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {}}
                      disabled={!canSubmit}
                    >
                      Reset
                    </Button>
                  )}
                  <Button type="submit" disabled={!canSubmit}>
                    {isSubmitting ? '...submitting' : 'Create'}
                  </Button>
                </>
              );
            }}
          </form.Subscribe>
        </CardFooter>
      </form>
    </FormContainer>
  );
}
