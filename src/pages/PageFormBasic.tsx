import BasicFormZod from '@/features/demo/components/BasicFormZod';
import Layout from '@/features/demo/components/Layout';

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
