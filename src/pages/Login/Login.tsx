import Layout from 'components/Layout/Layout';
import Form from 'components/Form/Form';
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
  return (
    <Layout>
      <div className="wrapper">
        <Form title="Login" inputs={inputs} submitButton="Let's go!" />
      </div>
    </Layout>
  );
};

export default LoginPage;
