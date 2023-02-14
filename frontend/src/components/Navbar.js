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
                    <Link to={"https://coffee.leoding.com"}>COFFEE</Link>
                </li>
                <li>
                    <Link to={"https://todo.leoding.com"}>TO-DO</Link>
                </li>
                <li>
                    <Link to={"https://chat.leoding.com"}>CHAT</Link>
                </li>
            </div>
        )
    }

}

export default Navbar;