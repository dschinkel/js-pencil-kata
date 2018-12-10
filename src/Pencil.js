import Paper from './Paper';

let paper,
  durabliity;

function write(text) {
  return paper.write(text, durabliity);
}

const Pencil = (pointDurability) => {
  paper = Paper();
  durabliity = pointDurability;

  return {
    write
  };
};

export default Pencil;
