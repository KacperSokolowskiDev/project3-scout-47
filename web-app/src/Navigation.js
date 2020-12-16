import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(){


        return(
            <ul style={{display: 'flex'}}>
                <Link to="/">
                    <li style={{marginLeft: 10, listStyle:'none'}}>Profil</li>
                </Link>
                
                <Link to="/Rapport">
                    <li style={{marginLeft: 10, listStyle:'none'}}>Rapport</li>
                </Link>
                
                <Link to="/Critères">
                    <li style={{marginLeft: 10, listStyle:'none'}}>Critères</li>
                </Link>
                
                <Link to="/Agenda">
                    <li style={{marginLeft: 10, listStyle:'none'}}>Agenda</li>
                </Link>

            </ul>
        )
}

export default Navigation;