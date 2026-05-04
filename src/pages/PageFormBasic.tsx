import BasicForm from '@/features/basic-form/components/BasicForm';
import BasicFormZod from '@/features/basic-form/components/BasicFormZod';
import Layout from '@/features/basic-form/components/Layout';
import type { BasicFormTabType } from '@/features/basic-form/utils';
import { useSearchParams } from 'react-router';

export default function PageFormBasic() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') as BasicFormTabType;
  const title = activeTab === 'basic' ? 'Basic Form' : 'Basic Form using Zod';
  return (
    <Layout
      cards={{
        title,
        description: 'This is a basic form with simple validation.',
      }}
    >
      {activeTab === 'basic' && <BasicForm />}
      {activeTab === 'using-zod' && <BasicFormZod />}
    </Layout>
  );
}
