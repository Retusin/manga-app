import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
