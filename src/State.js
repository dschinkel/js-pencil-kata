
let currentState = "";

function update(text) {
  currentState += text;
  return currentState;
}

function clear() {
  return "";
}

const State = () => {
  currentState = "";

  return {
    clear,
    update
  };
};

export default State;
