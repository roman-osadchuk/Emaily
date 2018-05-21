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
        return <a href="/auth/google"> Login with Google </a>;
      default: 
        return <a href="/api/logout"> Logout </a>;
    }
  }
  
  
  render() {
    const { classes } = this.props;
    console.log('this.props');
    console.log(this.props);
    
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBarColor}>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="title" color="inherit" className={classes.flex}>
              Emaily
            </Typography>
            {this.renderContent()}
            {/* <Button color="inherit">Login with Google</Button> */}
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




// import Button from '@material-ui/core/Button';
// 
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         Header
//         <Button variant="raised" color="primary">
//           Hello World
//         </Button>
//       </div>
//     )
//   }
// }
// 
// export default Header;