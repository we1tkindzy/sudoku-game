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
  },
  {
    name: 'username',
    type: 'text',
    label: 'username',
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
];

const ProfileSettingsPage = () => {
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

export default ProfileSettingsPage;
