import React,{useState} from "react";
function Nav(props){
    return(
        <nav className={`nav-icon ${props.vari? "hidden" : ""}`}>
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