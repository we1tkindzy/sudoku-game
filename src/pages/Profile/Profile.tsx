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
    disabled: true,
  },
  {
    name: 'username',
    type: 'text',
    label: 'username',
    disabled: true,
  },
  {
    name: 'email',
    type: 'email',
    label: 'email',
    disabled: true,
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'phone',
    disabled: true,
  },
];

const ProfilePage = () => {
  const navigate = useNavigate();

  const navigeteToPassword = () => {
    navigate(AppRoute.PASSWORD);
  };

  const navigeteToProfileSettings = () => {
    navigate(AppRoute.PROFILE_SETTINGS);
  };

  return (
    <Layout>
      <div className="wrapper wrapper--bg profile">
        <Form title="Profile" inputs={inputs} />

        <div className="profile__buttons-wrapper">
          <button
            className="button button--dark"
            onClick={navigeteToProfileSettings}>
            Edit
          </button>
          <button className="button button--dark" onClick={navigeteToPassword}>
            Password
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
