import React from 'react';
import Header from '../Header/Header';
import './styles.scss';

const Layout: React.FC = ({children}) => {
  return(
    <main className="layout">
      <Header/>
      <section>
        {children}
      </section>
    </main>
  );
}

export default Layout;