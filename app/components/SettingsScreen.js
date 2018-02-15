import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-checkbox';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Constants } from 'music-theory-questions';
import * as settings from '../js/settings';

class SettingsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sceneIndex: 0,
      keys: settings.get('keys'),
      questionTypes: settings.get('questionTypes'),
    };
  }

  render() {
    const { keys, questionTypes } = this.state;
    console.log('state', this.state);
    return (
      <View id="settingsScreen">
        { /* Key Selection */ }
        <View style={sectionStyle}>
          <Text style={sectionTitleStyle}>KEYS</Text>
          <View style={sectionContentStyle}>
            { _.flatMap(keys, (isOn, key) => (
              <CheckBox
                key={key}
                label={key}
                checked={isOn}
                style={{}}
                onChange={checked => {
                  let newKeys = settings.get('keys');
                  newKeys[key] = !checked;
                  settings.set('keys', newKeys);
                  this.setState({ keys: newKeys });
                }}
              />
            )) }
          </View>
        </View>

        <View style={sectionStyle}>
          <Text style={sectionTitleStyle}>QUESTION TYPES</Text>
          <View style={sectionContentStyle}>
            { _.flatMap(questionTypes, (isOn, questionType) => (
              <CheckBox
                key={questionType}
                label={questionType}
                checked={isOn}
                style={{}}
                onChange={checked => {
                  let newQuestionTypes = settings.get('questionTypes');
                  newQuestionTypes[questionType] = checked;
                  settings.set('questionTypes', newQuestionTypes);
                  this.setState({ questionTypes: newQuestionTypes });
                }}
              />
            )) }
          </View>
        </View>

      </View>
    );
  }
};

SettingsScreen.navigationOptions = {
  title: 'Settings'
};

const sectionStyle = {
  marginTop: 20
}

const sectionTitleStyle = {
  fontSize: 24,
  padding: 10,
  marginLeft: 15
}

const sectionContentStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
};

const checkboxStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 10,
  flex: 1,
};

const keyCheckboxStyle = {
  ...checkboxStyle,
  maxWidth: 95,
  minWidth: 95
};

const questionCheckboxStyle = {
  ...checkboxStyle,
  maxWidth: 180,
  minWidth: 180
};

export default SettingsScreen;
