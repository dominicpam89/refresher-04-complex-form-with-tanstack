import FormWrapper from './FormWrapper';
import { FieldGroup, FieldSeparator } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import {
  isEmailExist,
  type RegisterSchema,
  registerSchema,
} from '@/features/forms/schemas/register.schema';
import { validDialCodes, type CountryDialCode } from '@/features/forms/db.fake';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '@/features/forms/context/form.context';
import InputField from './inputs/InputField';
import PasswordField from './inputs/PasswordField';
import SelectField from './inputs/SelectField';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  // We'll learn more about these options later
  fieldComponents: { InputField, PasswordField, SelectField },
  formComponents: {},
});

export default function FormLevel4() {
  const defaultValues: RegisterSchema = {
    fullName: {
      firstName: '',
      lastName: '',
    },
    credentials: {
      email: '',
      password: '',
    },
    phoneNumber: {
      countryCode: '',
      phoneNumber: '',
    },
  };

  const form = useAppForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const { firstName: fnValidator, lastName: lnValidator } = registerSchema.shape.fullName.shape;
  const { email: emailValidator, password: pwValidator } = registerSchema.shape.credentials.shape;
  const { countryCode: ccValidator, phoneNumber: pnValidator } =
    registerSchema.shape.phoneNumber.shape;

  return (
    <FormWrapper
      formProps={{
        onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        },
      }}
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
      <FieldGroup className="w-full grid grid-cols-2 gap-2">
        <form.AppField
          name="fullName.firstName"
          validators={{ onChange: fnValidator }}
          children={(field) => (
            <field.InputField
              id="firstName"
              label="FirstName"
              placeholder="Your First Name"
              type="text"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          )}
        />
        <form.AppField
          name="fullName.lastName"
          validators={{ onChange: lnValidator }}
          children={(field) => (
            <field.InputField
              id="lastName"
              label="Last Name"
              placeholder="Your Last Name"
              type="text"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          )}
        />
      </FieldGroup>
      <FieldGroup>
        <form.AppField
          name="credentials.email"
          validators={{
            onChangeAsync: ({ value }) => isEmailExist(value),
            onChange: emailValidator,
            onChangeAsyncDebounceMs: 300,
          }}
          children={(field) => {
            const { isValidating } = field.state.meta;
            return (
              <field.InputField
                id="email"
                label="Email"
                placeholder="Your Email"
                type="email"
                description={
                  isValidating
                    ? 'Check Email...'
                    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
              />
            );
          }}
        />
        <form.AppField
          name="credentials.password"
          validators={{ onChange: pwValidator }}
          children={(field) => (
            <field.PasswordField
              id="password"
              label="Password"
              placeholder="Example: Pass123!"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          )}
        />
      </FieldGroup>
      <FieldSeparator />
      <FieldGroup className="w-full grid grid-cols-2 gap-2">
        <form.AppField
          name="phoneNumber.countryCode"
          validators={{ onChange: ccValidator }}
          children={(field) => (
            <field.SelectField<RegisterSchema['phoneNumber']['countryCode'], CountryDialCode>
              label="Select Country Code"
              placeholder="Country Code"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              items={validDialCodes}
            />
          )}
        />
        <form.AppField
          name="phoneNumber.phoneNumber"
          validators={{ onChange: pnValidator }}
          children={(field) => (
            <field.InputField
              id="phoneNumber"
              label="Phone Number"
              placeholder="Your Phone Number"
              type="tel"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          )}
        />
      </FieldGroup>
    </FormWrapper>
  );
}
