import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Constants } from 'music-theory-questions';
import settings from '../js/settings';

console.log(settings.keys);

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings'
  };

  constructor(props) {
    super(props);
    this.state = {
      sceneIndex: 0
    };
  }

  render() {
    return (
      <View id="settingsScreen">
        <View style={sectionStyle}>
          <Text style={sectionTitleStyle}>KEYS</Text>
          {
            _.chunk(Constants.MajorKeys, 4).map((chunk, chunkIdx) => {
              return (
                <View key={chunkIdx} style={{flexDirection: 'row'}}>
                  { chunk.map(key => (
                    <CheckBox
                      key={key}
                      leftText={key}
                      isChecked={settings.keys.has(key)}
                      style={checkboxStyle}
                      onClick={(e) => {
                        if (settings.keys.has(key))
                          settings.keys.delete(key);
                        else
                          settings.keys.add(key);
                      }}
                    />
                  )) }
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
};

const sectionStyle = {
  marginTop: 20
}

const sectionTitleStyle = {
  fontSize: 24,
  padding: 10,
  marginLeft: 15
}

const checkboxStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 10,
  flex: 1
};
