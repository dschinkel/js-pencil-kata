import State from './State';

let state;

function write(text) {
  return state.update(text);
}

function read() {
  return state.getCurrentState();
}
const Paper = () => {
  state = State();

  return {
    read,
    write
  };
};

export default Paper;
