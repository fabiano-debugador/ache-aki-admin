import { useState } from "react";
import { IInput } from "../../model/input";

const Input: React.FC<IInput> = ({ type, id, name, label, onChange }) => {
  const [value, setValue] = useState("");

  const handleName = (e: any) => {
    onChange(e);
    setValue(e.target.value);
  };

  return (
    <div className="Input">
      <div className="Input-label">
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleName}
      />
    </div>
  );
};

export default Input;
