import Paper from './Paper';

let paper, originalDurability = 0;

function write(text) {
  const finalText = addDurabilityOffsetSpaces(text);
  return paper.write(finalText);
}

function scoreDurabilityDegradation(text) {
  let score = 0, i;

  for (i = 0; i < text.length; i += 1) {
    if (text.charAt(i) === ' ') {
      score += 0;
    } else if (text.charAt(i) !== text.charAt(i).toUpperCase()) {
      score += 1;
    } else if (text.charAt(i) === text.charAt(i).toUpperCase()) {
      score += 2;
    }
  }

  return score;
}


function addDurabilityOffsetSpaces(text) {
  let scoredDurabilityText;

  const durabilityDegradeScore = scoreDurabilityDegradation(text),
    textDurabilityOverflow = durabilityDegradeScore - originalDurability;

  if (textDurabilityOverflow > 0) {
    scoredDurabilityText = text.substring(0, text.length - textDurabilityOverflow);
    const totalWhitespaceToPad = text.length - originalDurability || textDurabilityOverflow;

    scoredDurabilityText += ' '.repeat(totalWhitespaceToPad);
  }


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
