import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Header = ({name, contactEmail})=>{
    return(
        <div>
            <div className="header_container">
                <Link to="/react-portfolio"><h1>{name}</h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/about">ABOUT</Link></li>
                        {/* shortcut to contacts */}
                        <li><a href={`./react-portfolio/#contact`}>CONTACT</a></li>
                        {/* <li><a href={`mailto:${contactEmail}`}>CONTACT</a></li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Header