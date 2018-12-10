function formatTextForDurability(text, durability) {
  let finalText = text.substring(0, durability);
  const dullOffset = text.length - durability;

  if (dullOffset > 0) {
    finalText += ' '.repeat(dullOffset);
  }
  return finalText;
}

export {
  formatTextForDurability
};
