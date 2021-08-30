import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../App';
// import IntroPage from '../views/IntroPage/IntroPage';
import QuizPage from '../views/QuizPage/QuizPage';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/quiz" component={QuizPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}