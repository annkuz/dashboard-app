import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { listBoxWidth } from './constants';

const styles = () => ({
  listBox: {

  }
});

class ProductsList extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.listBox}>

      </div>
    );
  }
}

export default withStyles(styles)(ProductsList);