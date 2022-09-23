import React, { Component} from "react"
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../images/foto.jpg'
import '../styles/style.css'

class NavbarComponent extends Component {
 render() {
    return (
        <Navbar id="header">
            <div className="d-flex flex-column">
                <div class="profile">
                    <img src={Image} alt="" class="img-fluid rounded-circle"/>
                    <h1 className="text-light">Diah Pramesti</h1>
                    
                </div>

                <nav id="navbar" className="nav-menu navbar">             
                    <div class="p-4 pt-5">
                        
                        <ul class="list-unstyled components mb-5">
                            <li class="active">
                                <Link to="/home">HOME</Link>
                            </li>
                            <li class="active">
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li class="active">
                                <Link to="/experience">EXPERIENCE</Link>
                            </li>
                            <li class="active">
                                <Link to="/education">EDUCATION</Link>
                            </li>
                            <li class="active">
                                <Link to="/skills">SKILLS</Link>
                            </li>
                            <li class="active">
                                <Link to="/interest">INTEREST</Link>
                            </li>
                            <li class="active">
                                <Link to="/awards">AWARDS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            
        </Navbar> 
        // className="SideNav-TableOfContents-module--cls2--1iPNK SideNav-TableOfContents-module--cls1--11ARC pt-2 pb-4 flex-column nav" role="complementary"
    )
 }   
}

export default NavbarComponent