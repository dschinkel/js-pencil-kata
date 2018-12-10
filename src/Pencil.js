import Paper from './Paper';

let paper,
  durability;

function write(text) {
  const finalText = formatTextForDurability(text, durability);
  return paper.write(finalText);
}

function formatTextForDurability(text, durability) {
  let finalText = text.substring(0, durability);
  const dullOffset = text.length - durability;

  if (dullOffset > 0) {
    finalText += ' '.repeat(dullOffset);
  }
  return finalText;
}

const Pencil = (pointDurability) => {
  paper = Paper();
  durability = pointDurability;

  return {
    write
  };
};

export default Pencil;
