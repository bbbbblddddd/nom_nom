import StepItem from "./StepItem";

const StepsList = ({ steps }) => {
  const stepNodes = steps.map((step, index) => {
    return (
      <li key={index}>
        <StepItem step={step} />
      </li>
    );
  });

  return <ul>{stepNodes}</ul>;
};

export default StepsList;
