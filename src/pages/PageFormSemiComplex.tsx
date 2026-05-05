import FormWithoutZod from '@/features/semi-complex-form/components/FormWithoutZod';

export default function PageFormSemiComplex() {
  return (
    <div
      aria-label="layout-page-form-semi"
      className="max-w-lg min-w-sm mx-auto p-4 lg:p-0 flex justify-center sm:mt-4 mt-12"
    >
      <FormWithoutZod />
    </div>
  );
}
