import State from './State';

let state;

function write(text, durability) {
  const finalText = formatTextForDurability(text, durability);
  return state.update(finalText);
}

function read() {
  return state.getCurrentState();
}

function formatTextForDurability(text, durability) {
  let finalText = text.substring(0, durability);
  const dullOffset = text.length - durability;

  if (dullOffset > 0) {
    finalText += ' '.repeat(dullOffset);
  }
  return finalText;
}

const Paper = () => {
  state = State();

  return {
    read,
    write
  };
};

export default Paper;
