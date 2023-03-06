const StepItem = ({ step }) => {
  return (
    <p>
      {step.number}. {step.description}
    </p>
  );
};

export default StepItem;
