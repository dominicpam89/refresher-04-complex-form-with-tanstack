import { useSearchParams } from 'react-router';
import type { BasicFormTabType } from '@/features/basic-form/utils';
import { Button } from '@/components/ui/button';

interface TabButtonProps {
  readonly children: React.ReactNode;
  tab: BasicFormTabType;
}

export default function TabButton({ children, tab }: TabButtonProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') as BasicFormTabType;
  return (
    <Button
      className="cursor-pointer"
      variant={activeTab === tab ? 'default' : 'outline'}
      onClick={() => setSearchParams({ tab })}
    >
      {children}
    </Button>
  );
}
