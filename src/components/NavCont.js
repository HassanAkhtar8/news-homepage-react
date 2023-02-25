//import { renderIntoDocument } from 'react-dom/test-utils';
import logo from './assets/images/logo.svg';
import closeIcon from './assets/images/icon-menu-close.svg';
import menuIcon from './assets/images/icon-menu.svg';
import Nav from './Nav';
import React, {useState} from 'react';

function NavCont() {
  const [isActive, setActive] = useState("false");

  const clickhandler = () => {
        setActive(!isActive);
  };
    return (
        <div clasName='menu-bar'>

        <div className='logo-container'>

          <img  className='logo' src={logo} alt="logo"/>
          <img onClick={clickhandler} className={`nav-icon ${isActive? "" : "hidden"}`} src={menuIcon} alt="menu-icon"/>
          <img onClick={clickhandler} className={`nav-icon ${isActive? "hidden" : ""}`} src={closeIcon} alt="close-icon"/>
          
        </div>
        
        <div className='nav-container'>
        <Nav vari={isActive} varfunc={setActive}/>
        </div>
        
      </div>
    );
}
export default NavCont;