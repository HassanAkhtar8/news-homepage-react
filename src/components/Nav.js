//import { renderIntoDocument } from 'react-dom/test-utils';
import logo from './assets/images/logo.svg';
import closeIcon from './assets/images/icon-menu-close.svg';
import menuIcon from './assets/images/icon-menu.svg';


function Nav() {
    return (
        <div clasName='menu-bar'>

        <div className='logo-container'>

          <img className='logo' src={logo} alt="logo"/>
          <img src={menuIcon} alt="menu-icon"/>
          <img className='hidden' src={closeIcon} alt="close-icon"/>
          
        </div>
        
    
        <div className='nav-container'>
    
          
        <nav className='hidden'>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        </div>
        
      </div>
    );
}
export default Nav;