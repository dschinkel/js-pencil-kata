import Paper from '../Paper';

describe('Paper', () => {
  let sheet,
    initialText;

  beforeEach(() => {
    sheet = Paper();
    initialText = "When fate hands you a lemon";
  });

  describe('Positive Cases', () => {
    it('we have a sheet of paper to write on', () => {
      expect(sheet).to.exist;
    });

    it('writes text to a sheet of paper', () => {
      const output = sheet.write(initialText);
      expect(output).to.equal(output);
    });

    it('appends text to existing text', () => {
      sheet.write(initialText);
      const output = sheet.write(", make lemonade");

      expect(output).to.equal("When fate hands you a lemon, make lemonade");
    });

  });

  describe('Negative Cases', () => {
  });

});
