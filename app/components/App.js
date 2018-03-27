import React from 'react';
import { Button, YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import QuizView from './QuizView';
import SettingsScreen from './SettingsScreen';

// hide the annoying, spammy tts warnings
console.log('yellowbox, fuck you react native', YellowBox);
YellowBox.ignoreWarnings([ 'Sending `tts' ]);

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