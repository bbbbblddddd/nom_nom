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
        <label className="font-nunito text-xl">Which step is it?</label>
        <br />
        <input
          className="rounded-3xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="number"
          placeholder="e.g. Step #1"
          onChange={handleNumber}
          value={stateNumber}
        />
        <br />
        <br />
        <label className="font-nunito text-xl">
          What do you need to do for this step?
        </label>
        <br />
        <input
          className="rounded-3xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="description"
          placeholder="e.g. Chop potatoes"
          onChange={handleDescription}
          value={stateDescription}
        />
        <br />
        <button
          className="m-6 rounded-full bg-[#3E8B46] p-4 font-nunito text-xl text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default StepForm;
