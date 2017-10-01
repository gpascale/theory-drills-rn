import React from 'react';
import { NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import QuizView from './QuizView';

const App = StackNavigator({
  Home: { screen: MainMenu },
  QuizView: { screen: QuizView }
});

export default App;