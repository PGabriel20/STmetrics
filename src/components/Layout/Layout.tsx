import React from 'react';
import Header from '../Header/Header';
import './styles.scss';

const Layout: React.FC = ({children}) => {
  return(
    <main className="layout">
      <Header/>
      {children}
    </main>
  );
}

export default Layout;