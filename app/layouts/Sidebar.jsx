import React, {Component} from 'react';
import { Drawer, Hidden, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Sidebar extends Component {


  render() {

    const { handleSidebarToggle, mobileOpen, pageClasses } = this.props;

    const drawer = (
      <div>
        <div className={pageClasses.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );



    return (
      <nav className={pageClasses.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            // container={this.props.container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleSidebarToggle}
            classes={{
              paper: pageClasses.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: pageClasses.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default Sidebar;