import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';
import './css/navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className={"navbar"}>
                <li>
                    <Link to={"/"} id={"navbar_title"}>LEO DING</Link>
                </li>
                <li>
                    <Link to={"/coffee"}>COFFEE</Link>
                </li>
                <li>
                    <Link to={"/todo"}>TO-DO</Link>
                </li>
                <li>
                    <Link to={"/chat"}>CHAT</Link>
                </li>
            </div>
        )
    }

}

export default Navbar;