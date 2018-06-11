import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarColor: {
    backgroundColor: "red"
  }
};



class Header extends Component {
  constructor(props) {
    super(props);
    
    
  }
  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return  <Button variant="raised" href="/auth/google"> Login with Google </Button>  
      default: 
        return <Button variant="raised" href="/api/logout"> Logout </Button>  
    }
  }
  
  
  render() {
    const { classes } = this.props;
    console.log('this.props');
    console.log(this.props);
    
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBarColor}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-between'}} >
              <Link to={this.props.auth ? '/surveys' : '/'} style={{fontSize: '36px', color: '#fff', textDecoration: 'none'}} >
                Emaily
              </Link>
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default withStyles(styles)(connect(mapStateToProps, null)(Header));
