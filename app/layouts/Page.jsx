import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { withStyles } from '@material-ui/core/styles';
import { sidebarWidth } from "./constants";

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: sidebarWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${sidebarWidth}px)`,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: sidebarWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  contentNoPadding: {
    flexGrow: 1,
  },
});



class Page extends Component {

  state = {
    mobileOpen: false,
  };

  handleSidebarToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen}));
  };

  render() {
    const { classes, children, noPaddingContent } = this.props;
    const contentClass = noPaddingContent? classes.contentNoPadding : classes.content;

    return (
      <div className={classes.root}>
        <Header pageClasses={classes} handleSidebarToggle={this.handleSidebarToggle}/>
        <Sidebar pageClasses={classes} mobileOpen={this.state.mobileOpen} handleSidebarToggle={this.handleSidebarToggle}/>
        <main className={contentClass}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>

    );
  }
}

export default withStyles(styles, {withTheme: true})(Page);