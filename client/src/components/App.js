import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'


import Header from './Header';
import { Footer } from './Footer';
import Landing from './Landing';
import { Thanks } from './Thanks';
import { Dashboard } from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import MyGithubAccount from './MyGithubAccount';


class App extends Component {


  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/api/surveys/thank" component={Thanks} />
            <Route exact path="/github" component={MyGithubAccount} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};



export default connect(null, actions)(App);
