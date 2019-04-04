import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TaskEdit from './components/TaskEdit';
import App from './components/App';

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topic = () => (
    <div>
        <h2>Topic</h2>
    </div>
);

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/:id/edit" component={TaskEdit}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topic}/>
                    <App />
                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
