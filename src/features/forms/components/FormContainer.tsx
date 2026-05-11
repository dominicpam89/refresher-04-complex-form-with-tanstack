import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  readonly children: React.ReactNode;
}

export default function FormContainer({ children }: Props) {
  return (
    <Card className={cn('w-full shadow-md my-0 transition-all duration-500 ease-in-out')}>
      {children}
    </Card>
  );
}
