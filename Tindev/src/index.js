import React from 'react';
import { YellowBox } from 'react-native'
import Routes from './routes'

YellowBox.ignoreWarnings(['Unrecognized WebSocket', 'perform a React state'])

export default function App () {
  return (
    <Routes/>
  );
};
