import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import './components/css/styles.css'
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
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App;
