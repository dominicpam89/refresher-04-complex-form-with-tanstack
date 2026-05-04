import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import type { LoginFormInput } from '@/types/form-type';
import InputText from '@/components/inputs/InputText';
import InputPassword from '@/components/inputs/InputPassword';

export default function LoginForm() {
  const formMethods = useForm<LoginFormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });
  const {
    register,
    reset,
    formState: { errors },
  } = formMethods;
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...formMethods}>
      <form
        id="login-form"
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="w-full mx-auto"
      >
        <FieldSet className="border p-4 rounded-md">
          <FieldLegend className="font-bold text-3xl">Login Form</FieldLegend>
          <FieldDescription>Please enter your credentials to log in.</FieldDescription>
          <FieldGroup>
            <InputText
              id="email"
              label="Email"
              type="email"
              description="We'll never share your email with anyone else."
              error={errors.email?.message}
              {...register('email', {
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                required: 'Email is required',
              })}
            />
            <InputPassword
              id="password"
              label="Password"
              description="We'll never share your password with anyone else."
              error={errors.password?.message}
              {...register('password', {
                required: 'Password is required',
              })}
            />
          </FieldGroup>
          <div className="flex gap-2 items-center [&_button]:w-1/2 [&_button]:rounded-sm [&_button]:cursor-pointer">
            <Button variant="outline" type="reset" size="lg" onClick={() => reset()}>
              Reset
            </Button>
            <Button type="submit" size="lg">
              Log in
            </Button>
          </div>
        </FieldSet>
      </form>
    </FormProvider>
  );
}
