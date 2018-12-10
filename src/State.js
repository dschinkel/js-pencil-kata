
let currentState = "";

function update(text) {
  currentState += text;
  return getCurrentState();
}

function clear() {
  currentState = "";
}

function getCurrentState() {
  return currentState;
}

const State = () => {
  clear();

  return {
    getCurrentState,
    update
  };
};

export default State;
