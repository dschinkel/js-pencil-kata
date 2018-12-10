import Paper from '../Paper';

describe('Feature - ', () => {

  describe('Positive Cases', () => {
    it('we have a sheet of paper to write on', () => {
      const sheet = Paper();
      expect(sheet).to.exist;
    });

    it('writes text to a sheet of paper', () => {
      const sheet = Paper(),
        output = sheet.write("When fate hands you a lemon");

      expect(output).to.equal("When fate hands you a lemon");
    });

  });

  describe('Negative Cases', () => {
  });

});
