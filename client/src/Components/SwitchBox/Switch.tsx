import React from "react";
import "./Switch.css";
type Props = {
  options: { [k: string]: string }[];
  setToShow: React.Dispatch<
    React.SetStateAction<{
      [k: string]: boolean;
    }>
  >;
  toShow: {
    [k: string]: any;
  };
};

function Switch({ options, setToShow, toShow }: Props) {
  return (
    <div>
      {options.map((option, key) => (
        <div style={{ marginBottom: "1rem" }} key={key}>
          <input
            id="s2"
            type="checkbox"
            className="switch"
            onClick={() =>
              setToShow((prev) => {
                return { ...prev, [option.type]: !prev[option.type] };
              })
            }
            checked={toShow[option.type]}
          />
          <label htmlFor="s2" style={{ fontFamily: "var(--font-body)" }}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Switch;
