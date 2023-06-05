import './style.scss';

const MessageForm = () => {
  return (
    <form className="message-form" action="">
      <textarea className="message-form__textarea" name="" id=""></textarea>
      <button
        className="button button--dark message-form__button"
        type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageForm;
