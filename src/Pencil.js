import Paper from './Paper';

let paper;

function write(text) {
  return paper.write(text);
}

const Pencil = () => {
  paper = Paper();

  return {
    write
  };
};

export default Pencil;
