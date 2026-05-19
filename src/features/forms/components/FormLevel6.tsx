import { Button } from '@/components/ui/button';
import FormWrapper from './FormWrapper';
import { FieldError, FieldGroup } from '@/components/ui/field';
import {
  type ListSkillSchema,
  nameSchema,
  yearSchema,
  skillsSchema,
} from '@/features/forms/schemas/skill.schema';
import InputText from './inputLevel6/InputText';
import { fieldContext, formContext } from '@/features/forms/context/form.context';
import { createFormHook } from '@tanstack/react-form';
import { cn } from '@/lib/utils';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    InputText,
  },
  formComponents: {},
});

export default function FormLevel6() {
  const defaultValues: ListSkillSchema = { skills: [{ name: 'react', yearsOfExperience: '3' }] };
  const form = useAppForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <FormWrapper
      formProps={{
        onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        },
      }}
      formTitle="Form Level 6"
      formDescription={
        <>
          <p>What's in this form level 6?</p>
          <p className="text-destructive">Array and Dynamic Fields</p>
        </>
      }
      footer={
        <>
          <Button type="button" variant="outline" className="w-1/2">
            Cancel Edit
          </Button>
          <Button type="submit" className="w-1/2">
            Edit
          </Button>
        </>
      }
    >
      <form.Field
        mode="array"
        name="skills"
        validators={{ onChange: skillsSchema }}
        children={(field) => {
          const skills = field.form.getFieldValue('skills');
          return (
            <div className="flex flex-col gap-2">
              {field.state.value.map((_, idx, arr) => {
                const total = arr.length;
                const showRemove = total > 1 && idx > 0;
                return (
                  <FieldGroup key={idx} className={cn('grid gap-2 items-end grid-cols-10')}>
                    <form.AppField
                      name={`skills[${idx}].name`}
                      validators={{ onChange: nameSchema }}
                      children={(subfield) => (
                        <subfield.InputText
                          id="skillName"
                          label={showRemove ? undefined : 'Your Skill'}
                          placeholder={showRemove ? 'Your Skill' : undefined}
                          containerClasses="col-span-4"
                        />
                      )}
                    />
                    <form.AppField
                      name={`skills[${idx}].yearsOfExperience`}
                      validators={{ onChange: yearSchema }}
                      children={(subfield) => (
                        <subfield.InputText
                          type="number"
                          id="yearsOfExperience"
                          label={showRemove ? undefined : 'Years Experience'}
                          placeholder={showRemove ? 'Years of Experience' : undefined}
                          containerClasses={cn(
                            { 'col-span-6': !showRemove },
                            { 'col-span-4': showRemove }
                          )}
                        />
                      )}
                    />
                    {showRemove && (
                      <Button
                        className="col-span-2"
                        onClick={() => {
                          field.removeValue(idx);
                        }}
                      >
                        Remove
                      </Button>
                    )}
                  </FieldGroup>
                );
              })}
              <Button
                className="w-full"
                onClick={() => {
                  if (skills.length === 5) {
                    return;
                  }
                  field.pushValue({ name: '', yearsOfExperience: '' });
                }}
              >
                Add Skill
              </Button>
              {skills.length === 5 && <FieldError>Maximum skills is 5</FieldError>}
              <FieldError errors={field.state.meta.errors} />
            </div>
          );
        }}
      />
    </FormWrapper>
  );
}
