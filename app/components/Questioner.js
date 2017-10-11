import { Constants, ChordQuestions, DegreeQuestions } from 'music-theory-questions';
const Chance = require('chance');
const chance = new Chance();
import settings from '../js/settings';

export default class Questioner {

  constructor(options) {
    this.chordQuestions = new ChordQuestions({ keys: Array.from(settings.keys) });
    this.degreeQuestions = new DegreeQuestions({ keys: Array.from(settings.keys) });
  }

  getQuestion() {
    const generator = chance.pickone([ this.chordQuestions/*, this.degreeQuestions*/ ]);
    return generator.generate();
  }

}