/*
As a writer
I want to be able use a pencil to write text on a sheet of paper
so that I can better remember my thoughts

When the pencil is instructed to write a string of text on a sheet of paper,
the paper should reflect the text that was written.

Text written by the pencil should always be appended to existing text on the paper.
  - Thus, given a piece of paper with the text "She sells sea shells", when a pencil is instructed to write "
  down by the sea shore" on the paper, the paper will then contain the entire string
  (i.e. "She sells sea shells down by the sea shore").
*/

import Pencil from '../Pencil';

describe('Pencil', () => {
  let pencil,
    initialText;

  beforeEach(() => {
    pencil = Pencil();
    initialText = "When fate hands you a lemon";
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
