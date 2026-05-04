import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { basicFormTabs } from '@/features/basic-form/utils';
import TabButton from './LayoutTabButton';

export default function LayoutTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) setSearchParams({ tab: basicFormTabs.basic });
  }, [searchParams]);
  return (
    <div className="flex items-center gap-2">
      <TabButton tab="basic">Basic Form</TabButton>
      <TabButton tab="using-zod">Basic Form using Zod</TabButton>
    </div>
  );
}
