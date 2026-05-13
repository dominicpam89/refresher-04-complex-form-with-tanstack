import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
  readonly footer: ReactNode;
  formProps: ComponentProps<'form'>;
  formTitle: string;
}

export default function FormWrapper({ children, footer, formProps, formTitle }: Props) {
  return (
    <Card className={cn('w-full shadow-md my-0 transition-all duration-500 ease-in-out')}>
      <form {...formProps}>
        <CardHeader>
          <CardTitle className="text-xl font-bold mb-6 text-primary">{formTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">{children}</CardContent>
        <CardFooter className="flex justify-end gap-2">{footer}</CardFooter>
      </form>
    </Card>
  );
}
