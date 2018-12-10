import Paper from '../Paper';

describe('Feature - ', () => {
  let sheet;

  beforeEach(() => {
    sheet = Paper();
  })
  describe('Positive Cases', () => {
    it('we have a sheet of paper to write on', () => {
      expect(sheet).to.exist;
    });

    it('writes text to a sheet of paper', () => {
      const output = sheet.write();
      expect(output).to.equal("When fate hands you a lemon");
    });

  });

  describe('Negative Cases', () => {
  });

});
