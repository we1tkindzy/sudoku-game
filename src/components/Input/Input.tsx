import './style.scss';

export type InputType = {
  name: string;
  label: string;
  type: string;
  disabled?: boolean;
  error?: string;
};

const Input = ({ name, label, type, disabled, error }: InputType) => {
  return (
    <div className="input-container">
      <label className="input-container__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-container__input"
        type={type}
        id={name}
        name={name}
        disabled={disabled}
      />
      <div className="error">{error}</div>
    </div>
  );
};

export default Input;
