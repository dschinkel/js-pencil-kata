
let currentState = "";

function update(text) {
  currentState += text;
  return this.getCurrentState();
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
