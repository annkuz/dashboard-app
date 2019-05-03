import React from 'react';
import Page from '../layouts/Page';
import Products from '../components/Products/Products';

const ProductsPage = props => (
  <Page noPaddingContent={true} >
    <Products />
  </Page>
);

export default ProductsPage;

