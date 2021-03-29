import React from "react"
import {Link, NavLink} from "react-router-dom"
import "../App.css"

class Navbar extends React.Component{

    render() {
        return (
            <>
           
               <nav className = "nav">   
                {/* <div className="container"> */}
                   <div className = "navbar_div">
                       <ul className = "navbar">
                           <li className = "navbar_item">
                               <NavLink 
                                className = "nav-link"
                                activeClassName = "active"
                                isActive = {()=> window.location.pathname === "/Home"}
                                to = "/Home"
                               >
                                Home
                               </NavLink>
                           </li>
                            <li className = "navbar_item">
                               <NavLink 
                                className = "nav-link"
                                activeClassName = "active"
                                isActive = {()=> window.location.pathname === "/Contact"}
                                to = "/Contact"
                               >
                                Contact
                               </NavLink>
                           </li>
                            <li className = "navbar_item" >
                               <NavLink 
                                className = "nav-link"
                                activeClassName = "active"
                                isActive = {()=> window.location.pathname === "/Projects"}
                                to = "/Projects"
                               >
                                Projects
                               </NavLink>
                           </li>
                       </ul>
                   </div>



                {/* </div> */}
               </nav>
            </>
        )


    }



}
export default Navbar