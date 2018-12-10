import Paper from './Paper';
import { formatTextForDurability } from './Utility';

let paper,
  durability;

function write(text) {
  const finalText = formatTextForDurability(text, durability);
  return paper.write(finalText);
}

const Pencil = (pointDurability) => {
  paper = Paper();
  durability = pointDurability;

  return {
    write
  };
};

export default Pencil;
