import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
  readonly footer: ReactNode;
  formProps: ComponentProps<'form'>;
  formTitle: string;
  formDescription?: React.ReactNode;
}

export default function FormWrapper({
  children,
  footer,
  formProps,
  formTitle,
  formDescription,
}: Props) {
  return (
    <Card className={cn('w-full shadow-md my-0 transition-all duration-500 ease-in-out')}>
      <form {...formProps}>
        <CardHeader className="mb-8">
          <CardTitle className="text-2xl font-bold text-primary">{formTitle}</CardTitle>
          {formDescription && <CardDescription>{formDescription}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-6">{children}</CardContent>
        <CardFooter className="flex justify-end gap-2">{footer}</CardFooter>
      </form>
    </Card>
  );
}
