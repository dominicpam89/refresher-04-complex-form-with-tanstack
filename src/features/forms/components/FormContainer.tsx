import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  visible?: boolean;
  readonly children: React.ReactNode;
}

export default function FormContainer({ visible, children }: Props) {
  return (
    <Card
      className={cn(
        'w-full shadow-md duration-500',
        { 'opacity-100 pointer-events-auto': visible },
        { 'opacity-0 pointer-events-none translate-y-24': !visible }
      )}
    >
      {children}
    </Card>
  );
}
