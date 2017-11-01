import React from 'react';

export const partializeComponent = partialProps => Component => props => (
  <Component
    {...partialProps}
    {...props}
  />
);
