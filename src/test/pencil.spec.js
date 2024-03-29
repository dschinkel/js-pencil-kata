
import Pencil from '../Pencil';

describe('Pencil - Write', () => {

  const initialText = "When fate hands you a lemon";

  it('we have a pencil to write with', () => {
    expect(Pencil()).to.exist;
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


describe('Pencil - Point Degradation', () => {
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

describe('Pencil - Sharpening', () => {

  it('regains original durability when sharpened', () => {
    const pointDurability = 17,
      pencilLength = 2,
      pencil = Pencil(pointDurability, pencilLength);

    pencil.write("When fate hands you");
    pencil.sharpen();
    const sharpenedOutput = pencil.write(" When");

    expect(sharpenedOutput).to.equal("When fate hands you When");
  });

  it('point durability is not restored when pencil can no longer be sharpened', () => {
    const pointDurability = 2,
      pencilLength = 3,
      pencil = Pencil(pointDurability, pencilLength);

    pencil.write("W");
    pencil.sharpen();
    pencil.write("W");
    pencil.sharpen();
    pencil.sharpen();
    pencil.write("A");
    pencil.write("B");
    pencil.write("C");
    const output = pencil.write("W");

    expect(output).to.equal('WWA         ');
  });
});

describe('Pencil - Erasing', () => {

  it('erases last occurrence of specified text', () => {
    const pointDurability = 30,
      pencilLength = 1,
      pencil = Pencil(pointDurability, pencilLength);

    pencil.write("SueDaveSueDaveSueDave");
    const output1 = pencil.erase("Dave");
    expect(output1).to.equal("SueDaveSueDaveSue");

    const pencil2 = Pencil(pointDurability, pencilLength);
    pencil2.write("SueDave    SueDave");
    const output2 = pencil2.erase("Dave");
    expect(output2).to.equal("SueDave    Sue");
  });
});
