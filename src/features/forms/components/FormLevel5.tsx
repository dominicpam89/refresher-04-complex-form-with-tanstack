import InputText from '@/features/forms/components/inputs2/InputText';
import InputTextGroup from './inputs2/InputTextGroup';
import FormWrapper from './FormWrapper';
import { Button } from '@/components/ui/button';
import { FieldGroup, FieldSeparator } from '@/components/ui/field';
import { formContext, fieldContext } from '@/features/forms/context/form.context';
import { createFormHook } from '@tanstack/react-form';
import type { AuthorSchema } from '@/features/forms/schemas/author.schema';
import { useGetAuthor } from '@/features/forms/hooks/getAuthor';
import {
  authorName as nameValidator,
  usernameSchema as usernameValidator,
  authorSchema,
  isUsernameTaken,
} from '@/features/forms/schemas/author.schema';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { InputText, InputTextGroup },
  formComponents: {},
});

export default function FormLevel5() {
  const { data } = useGetAuthor('johndoe123');

  const defaultValues: AuthorSchema = {
    name: {
      firstName: data?.name.firstName || '',
      middleName: data?.name.middleName || '',
      lastName: data?.name.lastName || '',
    },
    email: data?.email || '',
    username: data?.username || '',
  };

  const form = useAppForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const emailValidator = authorSchema.shape.email;

  return (
    <FormWrapper
      formProps={{
        onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        },
      }}
      formTitle="Form Level 5"
      formDescription={
        <>
          <p>What's in this form level 5?</p>
          <p className="text-destructive">Async with Initial Value using Tanstack Query</p>
        </>
      }
      footer={
        <>
          <Button type="button" variant="outline" className="w-1/2">
            Cancel Edit
          </Button>
          <Button type="submit" className="w-1/2">
            Edit
          </Button>
        </>
      }
    >
      <FieldGroup>
        <h3 className="text-lg text-primary">Name Fields</h3>
        <form.AppField
          name="name.firstName"
          validators={{
            onChange: nameValidator.shape.firstName,
          }}
          children={(field) => (
            <field.InputText id="firstName" label="First Name" placeholder="Your FirstName" />
          )}
        />
        <form.AppField
          name="name.middleName"
          validators={{
            onChange: nameValidator.shape.middleName,
          }}
          children={(field) => (
            <field.InputText
              id="middleName"
              label="Middle Name"
              placeholder="Your Middle Name (optional)"
            />
          )}
        />
        <form.AppField
          name="name.lastName"
          validators={{
            onChange: nameValidator.shape.lastName,
          }}
          children={(field) => (
            <field.InputText id="lastName" label="Last Name" placeholder="Your Last Name" />
          )}
        />
      </FieldGroup>
      <FieldGroup className="mb-6">
        <h3 className="text-lg text-primary">Credentials</h3>
        <form.AppField
          name="email"
          validators={{
            onChange: emailValidator,
          }}
          children={(field) => (
            <field.InputText id="email" label="Email" placeholder="Your Email" type="email" />
          )}
        />
        <form.AppField
          name="username"
          validators={{
            onChange: usernameValidator,
            onChangeAsync: async ({ value }) => {
              const taken = await isUsernameTaken(value);
              if (taken) return { message: 'username is same' };
              else return undefined;
            },
            onBlurAsyncDebounceMs: 500,
          }}
          children={(field) => (
            <field.InputTextGroup
              id="username"
              label="Username"
              placeholder="Your Username"
              addOn={<p>{field.state.meta.isValidating && 'checking username'}</p>}
            />
          )}
        />
      </FieldGroup>
    </FormWrapper>
  );
}
