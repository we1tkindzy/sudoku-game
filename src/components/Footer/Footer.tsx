import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a
          className="footer__link"
          href="https://github.com/we1tkindzy/sudoku-game">
          Pet-project: Sudoku
        </a>
        <p>
          ©{' '}
          <a className="footer__link" href="https://github.com/we1tkindzy">
            we1tkindzy
          </a>
          , 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
