// @flow
import React from 'react';
import type Node from 'react';
import type { StyleType } from 'common';

export const withProps = (partialProps: any) =>
  (Component: Node) =>
    (props: any): Node => (
      <Component
        {...partialProps}
        {...props}
      />
    );

type WithStyleProps = { style: StyleType };
export const withStyle = (baseStyles: StyleType = []) =>
  (Component: Node) =>
    ({ style = [], ...otherProps }: WithStyleProps) => (
      <Component
        {...otherProps}
        style={[
          ...baseStyles,
          ...style,
        ]}
      />
    );
