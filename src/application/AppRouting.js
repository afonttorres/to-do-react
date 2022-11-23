import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NotFound from '../pages/404/NotFound';
import AboutPage from '../pages/about-faqs/AboutPage';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import TaskDetail from '../pages/tasks/TaskDetail';
import Tasks from '../pages/tasks/Tasks';

const AppRouting = () => {
    return (
        <Router>
            <div>
                <aside className='col'>
                    <Link to='/' >| HOME |</Link>
                    <Link to='/profile' >| PROFILE |</Link>
                    <Link to='/about' >| ABOUT |</Link>
                    <Link to='/faqs' >| FAQs |</Link>
                    <Link to='/tasks' >| TASKS |</Link>
                    <Link to='/404' >| NO EXISTING ROUTE |</Link>
                </aside>
            </div>
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/(about|faqs)' component={AboutPage} />
                    <Route path='/tasks/:id' component={TaskDetail} />
                    <Route path='/tasks' component={Tasks} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router >
    );
}

export default AppRouting;
