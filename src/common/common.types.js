import type { Component, Element } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type UUID = string;

export interface Scene {
  screen: string,
  component: Component | Element,
  title: string,
  label?: string,
  navigatorStyle?: any,
}

export type ReduxAction = {
  type: string,
  payload: any,
  meta?: any,
}

export type StyleType = Array<StyleObj>;
