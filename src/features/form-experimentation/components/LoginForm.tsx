import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EyeOffIcon } from 'lucide-react';

export default function LoginForm() {
  return (
    <form id="login-form">
      <FieldSet className="border p-4 rounded-md">
        <FieldLegend className="font-bold text-3xl">Login Form</FieldLegend>
        <FieldDescription>Please enter your credentials to log in.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" />
            <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
            <FieldError>Email is required.</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <div className="flex gap-2 items-center">
              <Input id="password" type="password" className="w-full" />
              <Button size="icon" type="button" className="cursor-pointer">
                <EyeOffIcon size={14} />
              </Button>
            </div>
            <FieldDescription>We'll never share your password with anyone else.</FieldDescription>
            <FieldError>Password is required.</FieldError>
          </Field>
        </FieldGroup>
        <div className="flex gap-2 items-center [&_button]:w-1/2 [&_button]:rounded-sm [&_button]:cursor-pointer">
          <Button variant="outline" type="reset" size="lg">
            Reset
          </Button>
          <Button type="submit" size="lg">
            Log in
          </Button>
        </div>
      </FieldSet>
    </form>
  );
}
