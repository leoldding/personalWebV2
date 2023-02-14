import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import './components/css/styles.css'

import Redirect from './components/Redirect.js';

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route
                            path={"/"}
                            element={<Home />} />
                        <Route
                            path={"/coffee"}
                            element={<Redirect link={"https://coffee.leoding.com"} />} />
                        <Route
                            path={"/todo"}
                            element={<Redirect link={"https://todo.leoding.com"} />} />
                        <Route
                            path={"/chat"}
                            element={<Redirect link={"https://chat.leoding.com"} />} />
                        <Route
                            path={"*"}
                            element={<Navigate to={"/"} replace />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App;
