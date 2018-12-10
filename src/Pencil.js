import Paper from './Paper';

let paper, durability = 0;
const dullThreshhold = 42;

function write(text) {
  const finalText = formatTextForDurability(text);
  return paper.write(finalText);
}

function formatTextForDurability(text) {
  let i, durabilityOffset;

  // add offset spaces for any durability left over after point degradation
  if (durability >= dullThreshhold) {
    durabilityOffset = durability - dullThreshhold;
    text += ' '.repeat(durabilityOffset);
  }

  // reduce durability for lower-case chars. Do not check spaces though.
  for (i = 0; i < text.trim().length; i += 1) {
    if (text.charAt(i) !== text.charAt(i).toUpperCase()) {
      durability -= 1;
    }
  }

  text.substring(0, durability);

  return text;
}

const Pencil = (pointDurability) => {
  paper = Paper();
  durability = pointDurability;

  return {
    write
  };
};

export default Pencil;
