import { useState } from "react";

const StepForm = ({ onStepCreate }) => {
  const [stateNumber, setStateNumber] = useState("");
  const [stateDescription, setStateDescription] = useState("");

  const handleNumber = (event) => {
    setStateNumber(event.target.value);
  };
  const handleDescription = (event) => {
    setStateDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newStep = {
      number: stateNumber,
      description: stateDescription,
    };
    onStepCreate(newStep);
    setStateNumber("");
    setStateDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Step number"
          onChange={handleNumber}
          value={stateNumber}
        />
        <br />
        <input
          type="description"
          placeholder="Description"
          onChange={handleDescription}
          value={stateDescription}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StepForm;
