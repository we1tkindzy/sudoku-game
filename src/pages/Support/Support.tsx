import Layout from 'components/Layout/Layout';
import Modal from 'components/Modal/Modal';
import useModal from 'hooks/useModal';
import MessageForm from 'components/MessageForm/MessageForm';
import './style.scss';

const SupportPage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Layout>
      <div className="wrapper wrapper--bg support">
        <h1 className="support__title">Communication options</h1>
        <p className="support__text">
          If you encounter a bug or a problem, or you want to ask any question
          about the project, then feel free to write to the e-mail{' '}
          <a href="mailto:valentin@erdyakov.com">valentin@erdyakov.com</a> or
          telegram <a href="https://t.me/hxlser">@hxlser</a>
        </p>
        <p className="support__text support__text--bold">
          Proposals are accepted : )
        </p>
        <p className="support__text">
          For convenience, you can use the button
          <button
            onClick={handleOpenModal}
            className="button button--dark support__button">
            Write
          </button>
        </p>
      </div>

      {isOpen && (
        <Modal
          title="Write a massage"
          hasCrossButton
          canBeClosedOutside
          canBeClosedEsc
          handleCloseModal={handleCloseModal}>
          <MessageForm />
        </Modal>
      )}
    </Layout>
  );
};

export default SupportPage;
