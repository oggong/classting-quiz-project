import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../App';
import QuizPage from '../views/QuizPage/QuizPage';
import ResultPage from '../views/ResultPage/ResultPage';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';
import ReviewPage from '../views/ReviewPage/ReviewPage';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/quiz" component={QuizPage} />
                    <Route path="/results" component={ResultPage} />
                    <Route path="/review" component={ReviewPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}