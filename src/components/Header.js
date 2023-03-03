//import { renderIntoDocument } from 'react-dom/test-utils';
import logo from './assets/images/logo.svg';
import closeIcon from './assets/images/icon-menu-close.svg';
import menuIcon from './assets/images/icon-menu.svg';
import Nav from './Nav';
import React, {useState} from 'react';

function Header() {
  const [isActive, setActive] = useState(false);
  //const [isOpen, setOpen] = useState("false");
  const clickhandler = () => {
        setActive(!isActive);
        //setOpen(!isOpen);
  };
  //<div ></div>
    return (
      <header className='menu-bar'>

<div className='logo-container'>
<img  className='logo' src={logo} alt="logo"/>
<img onClick={clickhandler} className="nav-icon" src={isActive?closeIcon:menuIcon} alt="menu-icon"/>
{
  //class Names
  //className={`nav-icon ${isActive? "" : "hidden"}`} menu
  //className={`nav-icon ${isActive? "hidden" : ""}`} closeicon


  
  

  //images
  //<img onClick={clickhandler} className={`nav-icon ${isActive? "" : "hidden"}`} src={menuIcon} alt="menu-icon"/>
  //<img onClick={clickhandler} className={`nav-icon ${isActive? "hidden" : ""}`} src={closeIcon} alt="close-icon"/>
  //<img onClick={clickhandler} className="nav-icon" src={closeIcon} alt="close-icon"/>
}
  
  
  

</div>
{ 
//
  //isActive?:null
//<Nav vari={isActive} varfunc={setActive}/>
}


<Nav active={isActive}/>

</header>
        
    );
}
export default Header;