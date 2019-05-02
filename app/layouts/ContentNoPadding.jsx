import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Content = props => {

  const { classes, children } = props;

  return (
    <main className={classes.content}>
      {children}
    </main>
  );
};

export default withStyles(styles, {withTheme: true})(Content);