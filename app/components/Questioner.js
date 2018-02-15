import { Constants, ChordQuestions, DegreeQuestions, IntervalQuestions } from 'music-theory-questions';
const Chance = require('chance');
const chance = new Chance();
import * as settings from '../js/settings';

const questionFactories = { };

export default class Questioner {

  constructor(options) {
    this.chordQuestions = new ChordQuestions(/*{ keys: Array.from(settings.keys) }*/);
    this.degreeQuestions = new DegreeQuestions(/*{ keys: Array.from(settings.keys) }*/);
    this.intervalQuestions = new IntervalQuestions(/*{ keys: Array.from(settings.keys) }*/);
  }

  getQuestion() {
    // const generator = chance.pickone([ this.chordQuestions/*, this.degreeQuestions*/ ]);
    const generator = this.chordQuestions;
    return generator.generate();
  }

}