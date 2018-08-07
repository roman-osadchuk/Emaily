import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';



class Payments extends Component {

    _handleToken = token => {
        this.props.handleToken(token)
    }

  render() {
    return (
      <div>
        <StripeCheckout
          name="Emaily"
          description="$5 for 5 email credits"
          amount={500}
          token={this._handleToken}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <Button variant="raised" color="primary">Add Credits</Button>
        </StripeCheckout>
      </div>
    );
  }
};

export default connect(null, actions)(Payments);
