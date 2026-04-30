import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Layout from '@/features/form-experimentation/components/Layout';
import TabButtons from '@/features/form-experimentation/components/TabButtonts';
import { tabs } from '@/features/form-experimentation/utils';

export default function PageFormExperimentation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  useEffect(() => {
    if (tab === null) {
      setSearchParams(tabs.login);
    }
  }, [tab]);
  return (
    <Layout>
      <TabButtons />
    </Layout>
  );
}
