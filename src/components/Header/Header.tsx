import React from 'react';

import './styles.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className="innerContainer">
        <h1><span>SW</span>metrics</h1>
        <a href="#">API LINK</a>
      </div>
    </header>  
  );
}

export default Header;