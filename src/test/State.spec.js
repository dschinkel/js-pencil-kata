import State from '../State';

describe('State', () => {
  const state = State();

  it('holds initial state', () => {
    const currentState = state.update("When fate hands you a lemon");
    expect(currentState).to.equal("When fate hands you a lemon");
  });

  it('appends additional text to state', () => {
    const currentState = state.update(", make lemonade");
    expect(currentState).to.equal("When fate hands you a lemon, make lemonade");
  });

  it('can clear state', () => {
    const currentState = state.clear();
    expect(currentState).to.equal("");
  });

});