import { Constants, ChordQuestions, DegreeQuestions } from 'music-theory-questions';
const Chance = require('chance');
const chance = new Chance();

export default class Questioner {

  constructor(options) {
    this.chordQuestions = new ChordQuestions({ keys: ['C'] });
    this.degreeQuestions = new DegreeQuestions({ keys: ['C'] });
  }

  getQuestion() {
    const generator = chance.pickone([ this.chordQuestions, this.degreeQuestions ]);
    return generator.generate();
  }

}