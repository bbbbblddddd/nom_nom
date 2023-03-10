import { useState } from "react";

const StepForm = ({ onStepCreate }) => {
  const [stateNumber, setStateNumber] = useState(1);
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
      stepNum: stateNumber,
      description: stateDescription,
    };

    setStateNumber("");
    setStateDescription("");
    onStepCreate(newStep);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="font-nunito text-xl">Which step is it?</label>
        <br />
        <input
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
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
          className="rounded-xl bg-[#94c93895] p-2 font-nunito text-xl"
          type="description"
          placeholder="e.g. Chop potatoes"
          onChange={handleDescription}
          value={stateDescription}
        />
        <br />
        <button
          className="m-6 rounded-full bg-[#3E8B46] p-3 font-nunito text-xl text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default StepForm;
