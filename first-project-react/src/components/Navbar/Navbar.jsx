import React from "react";
import logoIMG from "../../assets/image/logo.png";

export class Navbar extends React.Component{
    render(){
        return(
            <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoIMG} alt=""/>
            <h1>Space Flight News</h1>
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Tranding</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About us</a></li>
          </ul>
        </nav>
      </header>           
        )
    }
}
