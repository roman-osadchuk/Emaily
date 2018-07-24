import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Landing extends Component {



  render() {
    return (
      <div className="landing_container">
        <h1>Emaily</h1>
        <span>Collect feedbacks from your users</span>
        <Link to={this.props.auth ? '/surveys' : '/'} style={{display: 'block', fontSize: '18px', color: '#f5f', textDecoration: 'none'}} >
          Go to all Surveys
        </Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Landing);
