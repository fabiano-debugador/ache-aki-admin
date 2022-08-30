import { IInput } from "../../model/input";

const Input: React.FC<IInput> = ({
  type,
  id,
  name,
  label,
  onChange,
  values,
}) => {
  const handleName = (e: any) => {
    onChange(e);
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
        value={values}
        onChange={handleName}
      />
    </div>
  );
};

export default Input;
