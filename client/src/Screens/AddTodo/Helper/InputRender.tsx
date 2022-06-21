import React from "react";

type Props = {};

export const TextInputBox = ({
  input: { header, placeholder, state, type },
  setAddTaskInput,
}: any) => {
  return (
    <div className="FormInputBox">
      <div className="FormInputHead">{header}</div>
      <input
        type={type}
        className="FormInput"
        placeholder={placeholder}
        onChange={(e) =>
          setAddTaskInput((prev: any) => {
            var inp = e.target.value;
            if (type === "date") {
              const datear = inp.split("-");
              inp = datear[2] + "-" + datear[1] + "-" + datear[0];
            }
            return { ...prev, [state]: inp };
          })
        }
      />
    </div>
  );
};
const ChooseInputBox = ({
  input: { header, placeholder, state, choices },
  setAddTaskInput,
  addTaskInput,
}: any) => {
  return (
    <div className="FormChooseBox">
      <div className="FormInputHead">{header}</div>
      <div className="ChoiceBox">
        {choices &&
          choices.map((choice: string, index: any) => (
            <button
              className={
                addTaskInput[state] === choice
                  ? "TodoFormButton-selected"
                  : "TodoFormButton"
              }
              onClick={() =>
                setAddTaskInput((prev: any) => {
                  return { ...prev, [state]: choice };
                })
              }
            >
              {choice}
            </button>
          ))}
      </div>
    </div>
  );
};
const Input = ({ input, setAddTaskInput, addTaskInput }: any) => {
  if (input.type === "choose")
    return (
      <ChooseInputBox
        input={input}
        setAddTaskInput={setAddTaskInput}
        addTaskInput={addTaskInput}
      />
    );
  return <TextInputBox input={input} setAddTaskInput={setAddTaskInput} />;
};
export default Input;
