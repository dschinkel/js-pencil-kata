
import Pencil from '../Pencil';

describe('Pencil - Write', () => {
  let pencil, initialText;

  beforeEach(() => {
    initialText = "When fate hands you a lemon";
    pencil = Pencil(initialText.length);
  });

  describe('Positive Scenarios', () => {
    it('we have a pencil to write with', () => {
      expect(pencil).to.exist;
    });

    it('writes text to a piece of paper', () => {
      const output = pencil.write(initialText);
      expect(output).to.equal(initialText);
    });

    it('appends text to a sheet of paper with existing text', () => {
      const additionalText = ", make lemonade";
      pencil.write(initialText);
      const output = pencil.write(additionalText);

      expect(output).to.equal("When fate hands you a lemon, make lemonade");
    });
  });

  describe('Negative Scenarios', () => {
  });

});


describe('Pencil - Point Degradation', () => {

  describe('Positive Cases', () => {

  });

  describe('Negative Cases', () => {
    it('writes space for characters when pencil is dull', () => {
      const pointDurability = 43,
        pencil = Pencil(pointDurability),
        output = pencil.write("When fate hands you a lemon, make lemonade or Tea");

      expect(output).to.equal("When fate hands you a lemon, make lemonade or Tea ");
    });
    
    it('lower-case letters degrades pencil point by one', () => {
      const pointDurability = 4,
        pencil = Pencil(pointDurability),
        output = pencil.write("when");

      expect(output).to.equal("when");
    });
  });

});
