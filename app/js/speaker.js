import Tts from 'react-native-tts';

export default function speak(text) {

  const degreeRegex = /^(x|bb|\#|b?)([0-9]+)([^a-zA-Z_0-9]*?)$/;
  const pitchRegex = /^(A|B|C|D|E|F|G)(x|bb|\#|b?)([^a-zA-Z_0-9]*?)$/;
  const chordRegex = /^(A|B|C|D|E|F|G?)(x|bb|\#|b?)(maj7|min7|7|9|min11|13|dim7|m7b5|min7b5)([^a-zA-Z_0-9]*?)$/;
  const tokens = text.split(/\s/);
  const fixedTokens = tokens.map(token => {
    // First, see if it is a degree.
    var degree = degreeRegex.exec(token);
    if (degree) {
      var accidental = degree[1] ? fixAccidental(degree[1]) : '';
      var number = degree[2];
      var extra = degree[3];
      return (accidental ? (accidental + ' ' + number) : number) + extra;
    }
    // Next, see if it is a pitch.
    var pitch = pitchRegex.exec(token);
    if (pitch) {
      var letter = fixLetter(pitch[1]);
      var accidental = pitch[2] ? fixAccidental(pitch[2]) : '';
      var extra = pitch[3];
      return (accidental ? (letter + ' ' + accidental) : letter) + extra;
    }
    // Next, see if it is a chord.
    var chord = chordRegex.exec(token);
    if (chord) {
      var letter = chord[1] ? fixLetter(chord[1]) : '';
      var accidental = chord[2] ? fixAccidental(chord[2]) : '';
      var chordQuality = fixChordQuality(chord[3]);
      var extra = chord[4];
      return letter + ' ' + accidental + ' ' + chordQuality + ' ' + extra;
    }
    // If neither, leave the token unchanged.
    else {
      return token;
    }
  });

  Tts.speak(fixedTokens.join(' '));
}


function fixLetter(pitch) {
  pitch = pitch.toUpperCase();
  var pitchFixes = {
    'A': 'Eh',
    'B': 'Bee',
    'C': 'See',
    'D': 'Dee',
    'E': 'Eeh',
    'F': 'Eff',
    'G': 'Gee'
  };
  return pitchFixes[pitch] || pitch;
}

function fixAccidental(accidental) {
  accidental = accidental.toLowerCase();
  switch(accidental) {
    case '#':
      return 'Sharp';
    case 'b':
      return 'Flat';
    case 'x':
      return 'Double Sharp';
    case 'bb':
      return 'Double Flat';
  }
  return accidental;
}

function fixChordQuality(chordQuality) {
  chordQuality = chordQuality.toLowerCase();
  switch(chordQuality) {
    case 'maj7': case 'M7':
      return 'Major Seven';
    case 'min7': case 'm7':
      return 'Minor Seven';
    case '7': case 'dom7':
      return 'Seven';
    case 'dim7':
      return 'Diminished Seven';
    case 'm7b5': case 'min7b5':
      return 'Minor Seven Flat Five';
    case '9':
      return 'Nine';
  }
  return chordQuality;
}
