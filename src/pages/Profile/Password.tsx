import Layout from 'components/Layout/Layout';
import Form from 'components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'utils/constants';
import './style.scss';

const inputs = [
  {
    name: 'password',
    type: 'password',
    label: 'password',
  },
  {
    name: 'new-password',
    type: 'password',
    label: 'new password',
  },
  {
    name: 'repeat-password',
    type: 'password',
    label: 'repeat new password',
  },
];

const PasswordPage = () => {
  const navigate = useNavigate();

  const navigeteToProfile = () => {
    navigate(AppRoute.PROFILE);
  };

  return (
    <Layout>
      <div className="wrapper wrapper--bg profile">
        <button
          onClick={navigeteToProfile}
          className="button button--transparent profile__button-back">
          back
        </button>
        <Form title="Profile" inputs={inputs} submitButton="Edit info" />
      </div>
    </Layout>
  );
};

export default PasswordPage;
