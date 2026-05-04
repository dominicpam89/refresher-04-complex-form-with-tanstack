import BasicFormZod from '@/features/basic-form/components/BasicFormZod';
import Layout from '@/features/basic-form/components/Layout';

export default function PageFormBasic() {
  return (
    <Layout
      cards={{
        title: 'Basic Form',
        description: 'This is a basic form with simple validation.',
      }}
    >
      <BasicFormZod />
    </Layout>
  );
}
