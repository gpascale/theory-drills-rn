import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import QuizView from './QuizView';
import SettingsScreen from './SettingsScreen';

const App = StackNavigator({
  Home: {
    screen: MainMenu,
    navigationOptions: ({navigation}) => ({
      headerRight: <Button
        title={'Settings'}
        onPress={() => navigation.navigate('Settings')}
      />
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({navigation}) => ({
      headerRight: <Button
        title={'Settings'}
        onPress={() => navigation.navigate('Settings')}
      />
    })
  },
  Settings: {
    screen: SettingsScreen
  },
},
{
  mode: 'modal',
  headerMode: 'float'
});

export default App;