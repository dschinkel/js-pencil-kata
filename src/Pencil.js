import Paper from './Paper';

let paper, originalDurability = 0;

function write(text) {
  const finalText = formatTextForDurability(text);
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
  const totalWhitespaceToPad = text.length - originalDurability || textOverflow;

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

function formatTextForDurability(text) {
  const durabilityDegradeScore = scoreDurabilityDegradation(text),
    textDurabilityOverflow = durabilityDegradeScore - originalDurability;

  const scoredDurabilityText = trimTextForScore(textDurabilityOverflow, text);

  return scoredDurabilityText || text;
}

const Pencil = (pointDurability) => {
  paper = Paper();
  originalDurability = pointDurability;

  return {
    write
  };
};

export default Pencil;
