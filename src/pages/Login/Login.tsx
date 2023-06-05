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
    name: 'password',
    type: 'password',
    label: 'password',
  },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const navigeteToRegistration = () => {
    navigate(AppRoute.REGISTRATION);
  };

  return (
    <Layout>
      <div className="wrapper wrapper--bg login">
        <Form title="Login" inputs={inputs} submitButton="Let's go!" />
        <button
          onClick={navigeteToRegistration}
          className="button button--link login__button">
          don't have an account?
        </button>
      </div>
    </Layout>
  );
};

export default LoginPage;
