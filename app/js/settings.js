import _ from 'lodash';
import { Constants } from 'music-theory-questions';

const { MajorKeys, QuestionTypes } = Constants;

let settings = {
  // How long in between questions in total (including answer time)
  QUESTION_TIME: 5000,
  // How long to wait for an answer after asking the question
  ANSWER_TIME: 3000,
  // The keys being used
  keys: _.zipObject(MajorKeys, new Array(MajorKeys.length).fill(true)),
  // The question types
  questionTypes: _.zipObject(QuestionTypes, new Array(QuestionTypes.length).fill(true))
};

settings.questionTypes['Interval'] = false;

export function get(setting) {
  if (settings[setting] === undefined)
    throw new Error('No such setting:', setting);

  if (Array.isArray(settings[setting]))
    return [ ...settings[setting] ];
  else if (typeof(settings[setting]) == 'object')
    return { ...settings[setting] };
  else
    return settings[setting];
}

export function getAll() {
  return Object.assign({ }, settings);
};

export function set(setting, value) {
  if (Array.isArray(value))
    settings[setting] = [ ...value ];
  else if (typeof(value) == 'object')
    settings[setting] = { ...value };
  else
    settings[setting] = value;
  console.log('settings is now:', settings);
}