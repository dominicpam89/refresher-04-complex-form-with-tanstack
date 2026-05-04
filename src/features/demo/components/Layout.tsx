import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  twClasses?: React.HTMLAttributes<HTMLDivElement>['className'];
  cards: {
    title?: string;
    description?: string;
    footer?: React.ReactNode;
  };
}

export default function Layout({
  children,
  twClasses = '',
  cards: { title, description, footer },
}: Props & PropsWithChildren) {
  return (
    <div
      aria-label="page-form-layout"
      className={cn(
        'min-h-screen max-w-lg min-w-sm mx-auto pt-12 flex flex-col gap-6 p-8 lg:p-0',
        twClasses
      )}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title || 'Form'}</CardTitle>
          <CardDescription>{description || 'Please fill out the form below.'}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </div>
  );
}
