import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

const listBoxWidth = 350;

const styles = () => ({
  productsBox: {
    display: 'flex',
    flexFlow:'row nowrap',

  },
  productsListBox: {
    width: listBoxWidth,
  },
  productsShowBox: {
    width: `calc(100% - ${listBoxWidth}px)`,
  }
});

class Products extends Component {

  constructor() {
    super();
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.productsBox}>
        <div className={classes.productsListBox}>
          list is here
        </div>
        <div className={classes.productsShowBox}>
          show box is here
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(Products);