import Paper from './Paper';

function write(text) {
  return Paper().write(text);
}

const Pencil = () => ({
  write
});

export default Pencil;
