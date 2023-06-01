import Input from 'components/Input/Input';
import './style.scss';
import { InputType } from 'components/Input/Input';

type FormType = {
  title: string;
  inputs: InputType[];
  submitButton?: string;
};

const Form = ({ title, inputs, submitButton }: FormType) => {
  return (
    <form action="" className="form">
      <h1 className="form__title">{title}</h1>

      {inputs.map(({ ...rest }, id) => (
        <Input key={id + 1} {...rest} />
      ))}
      {submitButton && (
        <button type="submit" className="button button--dark">
          {submitButton}
        </button>
      )}
    </form>
  );
};

export default Form;
