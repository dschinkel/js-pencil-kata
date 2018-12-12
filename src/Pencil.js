import Paper from './Paper';

let paper, originalDurabilty = 0, durablity = 0;

function updateCurrentDurability(durabilityDegradeScore) {
  durablity = durabilityDegradeScore;
}

function write(text) {
  const durabilityDegradeScore = scoreDurabilityDegradation(text),
    finalText = formatTextForDurability(text, durabilityDegradeScore);

  updateCurrentDurability(durablity - durabilityDegradeScore);

  return paper.write(finalText);
}

function isUpperCase(text) {
  return text === text.toUpperCase();
}

function scoreDurabilityDegradation(text) {
  let score = 0, i;

  for (i = 0; i < text.length; i += 1) {
    if (text.charAt(i) === ' ') { continue; }
    else if (!isUpperCase(text.charAt(i))) {
      score += 1;
    } else if (isUpperCase(text.charAt(i))) {
      score += 2;
    }
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
  durablity = originalDurabilty;
}

const Pencil = (pointDurability) => {
  paper = Paper();
  durablity = pointDurability;
  originalDurabilty = pointDurability;

  return {
    write,
    sharpen
  };
};

export default Pencil;
