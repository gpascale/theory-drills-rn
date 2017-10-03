import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from 'apsl-react-native-button';

import QuizView from './QuizView';

export default class MainMenu extends React.Component {

  static navigationOptions = {
    title: 'Main Menu'
  };

  constructor(props) {
    super(props);
    this.state = {
      sceneIndex: 0
    };
  }

  _onNewQuizClicked = () => {
    const { navigate } = this.props.navigation;
    navigate('QuizView');
  }

  render() {
    return (
      <View id="mainMenu" style={{marginTop: 80, flex: 1, width: '100%', alignContent:'center'}}>
        <Button
          style={buttonStyle}
          textStyle={{fontSize: 18, color: 'white'}}
          onPress={this._onNewQuizClicked}
          alignConent='center'>
          New Quiz
        </Button>
      </View>
    )
  }
}

const buttonStyle = {
  backgroundColor: '#1b99c9',
  borderColor: '#1b99c9',
  width: 200,
  alignSelf:'center'
};
