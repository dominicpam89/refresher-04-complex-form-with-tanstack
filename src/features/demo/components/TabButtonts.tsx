import { useSearchParams } from 'react-router';
import { getVariant, tabs, type Tab } from '@/features/form-experimentation/utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function TabButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  const btnVariant = getVariant.bind(null, tab);
  const onTabClick = (tab: Tab) => {
    setSearchParams(tabs[tab]);
  };
  const commonClasses = 'rounded-sm cursor-pointer';
  return (
    <div aria-label="tabs" className="flex gap-1 items-center">
      <Button
        className={cn(commonClasses)}
        variant={btnVariant('login')}
        onClick={() => onTabClick('login')}
      >
        Login
      </Button>
      <Button
        className={cn(commonClasses)}
        variant={btnVariant('register')}
        onClick={() => onTabClick('register')}
      >
        Register
      </Button>
    </div>
  );
}
