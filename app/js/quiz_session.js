import _ from 'lodash';
const Chance = require('chance');
const chance = new Chance();
import { Constants, ChordQuestions, DegreeQuestions, IntervalQuestions } from 'music-theory-questions';
const { QuestionTypes } = Constants;
import * as settings from '../js/settings';

const questionFactories = {
  'ChordSpelling': new ChordQuestions(),
  'Degree': new ChordQuestions(),
  'Interval': new IntervalQuestions()
};

// Represents a single quiz session. Keeps track of session-y information
// like the history of questions asked, right/wrong stats, etc...
// TODO: Should settings be tied to a particular session or no?
export default class QuizSession {
  constructor() {
    this.history = [ ];
  }

  getNextQuestion() {
    const questionTypes = _.keys(_.pickBy(settings.get('questionTypes'), (val, key) => !!val));
    const randomType = chance.pickone(questionTypes);
    const factory = questionFactories[randomType];
    console.log('fact', factory);
    const question = factory.generate();
    this.history.push(question);
    return question;
  }

  getHistory() {
    return this.history;
  }
};