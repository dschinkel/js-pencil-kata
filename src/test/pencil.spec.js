
import Pencil from '../Pencil';

describe('Pencil - Write', () => {

  const initialText = "When fate hands you a lemon";

  describe('Positive Scenarios', () => {
    it('we have a pencil to write with', () => {
      expect(Pencil(0)).to.exist;
    });

    it('writes text to a piece of paper', () => {
      const pointDurability = 200,
        pencil = Pencil(pointDurability),

        output = pencil.write(initialText);

      expect(output).to.equal("When fate hands you a lemon");
    });

    it('appends text to a sheet of paper with existing text', () => {
      const additionalText = ", make lemonade",
        pointDurability = initialText.length + 15,
        pencil = Pencil(pointDurability);

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
    it('writes whitespace for characters when pencil is dull', () => {
      const pointDurability = 38,
        pencil = Pencil(pointDurability),
        output = pencil.write("When fate hands you a lemon, make lemonade or Tea");

      expect(output).to.equal("When fate hands you a lemon, make lemonade o           ");
    });

    it('whitespace does not degrade durability', () => {
      const pointDurability = 5,
        pencil = Pencil(pointDurability),
        output = pencil.write("w    ");

      expect(output).to.equal("w    ");
    });
    
    it('lower-case letters degrades pencil point by one', () => {
      const pointDurability1 = 3,
        pencil1 = Pencil(pointDurability1),
        output1 = pencil1.write("when");

      expect(output1).to.equal("whe ");

      const pointDurability2 = 4,
        pencil2 = Pencil(pointDurability2),
        output2 = pencil2.write("when");

      expect(output2).to.equal("when");
    });

    it('upper-case letters degrades pencil point by two', () => {
      const pointDurability = 4,
        pencil = Pencil(pointDurability),
        output = pencil.write("When");

      expect(output).to.equal("Whe ");
    });
  });

});
