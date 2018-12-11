import Paper from './Paper';

let paper, durability = 0;
const dullThreshhold = 42;

function write(text) {
  const finalText = formatTextForDurability(text);
  return paper.write(finalText);
}

function reduceDurability(text) {
  let i;
  for (i = 0; i < text.trim().length; i += 1) {
    if (text.charAt(i) !== text.charAt(i).toUpperCase()) {
      durability -= 1;
    }
  }
}

function formatTextForDurability(text) {
  text = addDurabilityOffsetSpaces(text);
  reduceDurability(text);
  text.substring(0, durability);

  return text;
}

function addDurabilityOffsetSpaces(text) {
  let durabilityOffset;

  if (durability >= dullThreshhold) {
    durabilityOffset = durability - dullThreshhold;
    text += ' '.repeat(durabilityOffset);
  }
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
