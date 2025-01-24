import { useMemo, useState } from "react";
import EnquireForm from "./enquire/EnquireForm";

export type FormWizardStepProps = {
  id: string;
  fields: Array<{
    name: string;
    label: string;
    errors: Record<string, any>;
  }>;
};

export type FormWizardProps = {
  steps: FormWizardStepProps[];
  defaultValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
};

const FormWizard: React.FC<FormWizardProps> = ({
  steps,
  defaultValues,
  onSubmit,
}) => {
  const [values, setValues] = useState<Record<string, any>>(defaultValues);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = useMemo(
    () => steps[activeStepIndex],
    [activeStepIndex, steps]
  );

  const isLastStep = useMemo(
    () => activeStepIndex === steps.length - 1,
    [activeStepIndex, steps.length]
  );

  const NextStep = () => setActiveStepIndex((index) => index + 1);
  const PrevStep = () => setActiveStepIndex((index) => index - 1);
  const currentStep = activeStepIndex + 1;
  const noOfSteps = steps.length;

  const handleNextStep = (stepValues: Record<string, any>) => {
    const updatedValues = { ...values, ...stepValues };
    setValues(updatedValues);

    if (isLastStep) {
      onSubmit(updatedValues);
    } else {
      NextStep();
    }
  };

  const handleBackStep = (stepValues: Record<string, any>) => {
    const updatedValues = { ...values, ...stepValues };
    setValues(updatedValues);
    PrevStep();
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-start">
        <span className="my-1 text-sm  p-1 rounded text-white">
          {currentStep}/{noOfSteps}
        </span>
      </div>
      {activeStep && (
        <EnquireForm
          key={activeStep.id}
          fields={activeStep.fields}
          defaultValues={values}
          showBackButton={activeStepIndex > 0}
          onSubmit={handleNextStep}
          onBack={handleBackStep}
          isLastStep={isLastStep}
        />
      )}
    </div>
  );
};

export default FormWizard;
