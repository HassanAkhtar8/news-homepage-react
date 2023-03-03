import React from "react";
function Nav(props){
    return(
        
        <nav id="desktop" className={`slide ${props.active? "slider" : "" }`} >
            <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
            </ul>

        </nav>
    );
}
export default Nav;