import Paper from './Paper';
import { isUpperCase, isWhitespace } from './test/Utility';

let paper, originalDurabilty = 0, durablity = 0, currentLength = 0;

function updateCurrentDurability(degradeScore) {
  durablity -= degradeScore;
}

function write(text) {
  const degradeScore = scorePointDegradation(text),
    finalText = formatTextForDurability(text, degradeScore);

  updateCurrentDurability(degradeScore);

  return paper.write(finalText);
}

function scorePointDegradation(text) {
  let score = 0, i, character;

  for (i = 0; i < text.length; i += 1) {
    character = text.charAt(i);

    if (isWhitespace(character)) { continue; }
    score += scoreLowerCase(character) + scoreUpperCase(character);
  }

  return score;
}

function addWhitespace(text, textOverflow, durabilityText) {
  const totalWhitespaceToPad = text.length - durablity || textOverflow;

  let textWithWhitespaces = durabilityText;
  textWithWhitespaces += ' '.repeat(totalWhitespaceToPad);

  return textWithWhitespaces;
}

function trimTextForScore(textDurabilityOverflow, text) {
  let finalText;

  if (textDurabilityOverflow > 0) {
    const textTrimmed = text.substring(0, text.length - textDurabilityOverflow);
    finalText = addWhitespace(text, textDurabilityOverflow, textTrimmed);
  }

  return finalText;
}

function formatTextForDurability(text, degradeScore) {
  const textDurabilityOverflow = degradeScore - durablity,
    scoredText = trimTextForScore(textDurabilityOverflow, text);

  return scoredText || text;
}

function sharpen() {
  durablity = currentLength > 1 ? originalDurabilty : durablity;
  currentLength -= 1;
}

/*
  todo: erase() uses clean code (good variable names / intent),
  but try other ways to simplify this, e.g. regex, etc.
*/
function erase(text) {
  const currentText = paper.read(),
    lastFoundIndex = currentText.lastIndexOf(text),
    precedingText = currentText.substring(0, lastFoundIndex),
    textWithLastOccurance = currentText.substring(lastFoundIndex, currentText.length),
    erasedText = textWithLastOccurance.replace(text, ""),
    finalText = `${precedingText}${erasedText}`;

  return finalText;
}

function scoreLowerCase(char) {
  return !isUpperCase(char) ? 1 : 0;
}

function scoreUpperCase(char) {
  return isUpperCase(char) ? 2 : 0;
}

const Pencil = (pointDurability, length) => {
  paper = Paper();
  durablity = pointDurability;
  originalDurabilty = pointDurability;
  currentLength = length;

  return {
    erase,
    sharpen,
    write
  };
};

export default Pencil;
