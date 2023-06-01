import { ReactNode } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './style.scss';

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <main className="main">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
