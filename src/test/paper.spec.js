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
      sheet.write(initialText);
      expect(sheet.read()).to.equal(initialText);
    });

    it('appends text', () => {
      sheet.write(initialText);
      const output = sheet.write(", make lemonade");

      expect(sheet.read()).to.equal("When fate hands you a lemon, make lemonade");
    });

  });

  describe('Negative Cases', () => {

  });

});
