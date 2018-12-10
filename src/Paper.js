import State from './State';

let state;

function write(text) {
  return state.update(text);
}

const Paper = () => {
  state = State();

  return {
    write
  };
};

export default Paper;
