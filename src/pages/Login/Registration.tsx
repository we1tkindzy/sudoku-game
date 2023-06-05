import Layout from 'components/Layout/Layout';
import Form from 'components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import './style.scss';

const inputs = [
  {
    name: 'login',
    type: 'text',
    label: 'login',
    error: 'should be 8-20 symbols without %$##@!%^',
  },
  {
    name: 'email',
    type: 'email',
    label: 'email',
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'phone',
  },
  {
    name: 'password',
    type: 'password',
    label: 'password',
  },
  {
    name: 'password-repeat',
    type: 'password',
    label: 'repeat password',
  },
];

const RegistrationPage = () => {
  const navigate = useNavigate();

  const navigeteTologin = () => {
    navigate(AppRoute.LOGIN);
  };

  return (
    <Layout>
      <div className="wrapper wrapper--bg login">
        <Form title="Signin" inputs={inputs} submitButton="Let's go!" />

        <button
          onClick={navigeteTologin}
          className="button button--link login__button">
          already have an account?
        </button>
      </div>
    </Layout>
  );
};

export default RegistrationPage;
