import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../../pages/Home'
import BlogPage from '../../pages/Blog'
import ActivityPage from '../../pages/Activity'
import AboutPage from '../../pages/About'
import SignUpPage from '../../pages/SignUp'
import LoginPage from '../../pages/Login'

function AppRouter() {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={HomePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/activity" component={ActivityPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default AppRouter
