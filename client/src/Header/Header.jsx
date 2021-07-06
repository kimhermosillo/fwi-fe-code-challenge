import React from 'react';
import { useHistory } from 'react-router-dom';
//Utils / Styling
import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';

const Header = () => {
  // Brought in useHistory here so user can click anywhere near logo/div to return to home
  const { push } = useHistory();

  return (
    <header id="main-header" className="header">
      <div onClick={() => push('/')} className="logo">
        <CloudColor className="logo__color" />
        <CloudEffects className="logo__effects" />
      </div>
      <h1 className="header__title">FWI Poker Challenge</h1>
    </header>
  );
};

export default Header;
