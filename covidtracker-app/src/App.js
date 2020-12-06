import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './pages'



const App = () =>{
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <div>
                            <h4>Julian Evant Waluyan</h4>
                        </div>
                        <div>
                            <h1>Covid Tracker</h1>
                        </div>
                        <li>
                            <Link to="/global">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/Provinsi">
                                Provinsi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Indonesia">
                    <Indonesia />
                </Route>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
                <Route path="/Global">
                    <Global />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;