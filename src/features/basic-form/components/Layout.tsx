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
import LayoutTabs from './LayoutTabs';

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
        'min-h-screen max-w-lg min-w-60 mx-auto flex flex-col items-center gap-6 p-8 lg:p-0',
        twClasses
      )}
    >
      <Card aria-label="card-layout-form" className="w-full mt-6 lg:mt-12">
        <CardHeader>
          <CardTitle>{title || 'Form'}</CardTitle>
          <CardDescription>{description || 'Please fill out the form below.'}</CardDescription>
          <LayoutTabs />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </div>
  );
}
