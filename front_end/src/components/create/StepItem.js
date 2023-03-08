const StepItem = ({ step }) => {
  return (
    <p>
      {step.stepNum}. {step.description}
    </p>
  );
};

export default StepItem;
