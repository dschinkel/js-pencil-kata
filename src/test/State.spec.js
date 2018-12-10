import State from '../State';

describe('State', () => {
  let state;

  beforeEach(() => {
    state = State();
  });

  it('initial state is empty', () => {
    expect(state.getCurrentState()).to.equal("");
  });

  it('holds initial state', () => {
    const currentState = state.update("When fate hands you a lemon");
    expect(currentState).to.equal("When fate hands you a lemon");
  });

  it('appends additional text to state', () => {
    state.update("When fate hands you a lemon");

    const currentState = state.update(", make lemonade");

    expect(currentState).to.equal("When fate hands you a lemon, make lemonade");
  });
});