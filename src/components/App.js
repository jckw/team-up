import React, {Component} from 'react';
import '../styles/App.css';
import {Navbar} from './Navbar'
import RepoList from './RepoList'
import {CategoryNav} from "./CategoryNav";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="columns">
                    <div className="column col-3 col-md-4">
                        <CategoryNav/>
                    </div>

                    <div className="column col-6 col-md-8">
                        <div className="input-group mb-2">
                            <input className="form-input" type="text" placeholder="search"/>
                            <button className="btn btn-primary input-group-btn">Search</button>
                        </div>
                        <RepoList/>
                    </div>

                    <div className="column col-3 hide-md">
                        <p>Work on awesome projects, together!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
