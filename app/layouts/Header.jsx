import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  }
});

const Header = props =>
  <AppBar position="fixed" className={props.pageClasses.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Menu"
        onClick={props.handleSidebarToggle}
        className={props.classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>

export default withStyles(styles, {withTheme: true})(Header);
