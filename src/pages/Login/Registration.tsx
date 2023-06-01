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
  return (
    <Layout>
      <div className="wrapper">
        <Form title="Signin" inputs={inputs} submitButton="Let's go!" />
      </div>
    </Layout>
  );
};

export default RegistrationPage;
