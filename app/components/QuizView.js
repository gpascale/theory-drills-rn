import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'music-theory-questions';
import Questioner from './Questioner';
import settings from '../config/settings';
import speak from '../js/speaker';

const Status = {
  STOPPED: Symbol('STOPPED'),
  QUESTION: Symbol('QUESTION'),
  ANSWER: Symbol('ANSWER'),
  PAUSED: Symbol('PAUSED')
};

export default class QuizView extends React.Component {

  constructor(props) {
    super(props);
    this.questioner = new Questioner();
    this.timer = null;
    this.state = {
      status: Status.STOPPED
    };
  }

  componentDidMount() {
    this.askLoop();
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  askLoop() {
    const askOne = this.askOne.bind(this);

    function doAskOne() {
      askOne(() => setImmediate(doAskOne));
    }

    doAskOne();
  }

  askOne(cb) {
    console.log('askOne!');
    const question = this.questioner.getQuestion();
    this.setState({ status: Status.QUESTION, question });
    speak(question.questionText);
    this.timer = setTimeout(() => {
      this.setState({ status: Status.ANSWER });
      this.timer = setTimeout(cb, settings.ANSWER_TIME);
      speak(question.answer);
    }, settings.QUESTION_TIME);
  }

  render() {
    const { status, question } = this.state;
    console.log('status, question = ', status, question);
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        alignContent:'center'
      }}>
        { (status == Status.QUESTION || status == Status.ANSWER) && question &&
          <View style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: 200
          }}>
            <Text style={{alignSelf:'center', fontSize:24, height: 50}}>
              {question.questionText}
            </Text>
            <Text style={{alignSelf:'center', fontSize:24, height: 50}}>
              {status == Status.ANSWER ? question.answer : ''}
            </Text>
          </View>
        }
      </View>
    );
  }
}