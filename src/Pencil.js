import Paper from './Paper';

let paper, durability = 0;

function write(text) {
  const finalText = addDurabilityOffsetSpaces(text);
  return paper.write(finalText);
}

// function reduceDurability(text) {
//   // if(text.length > durability) return;
//   let i;
//   for (i = 0; i < text.length; i += 1) {
//     if (text.charAt(i) === ' ') { return; }
//     if (text.charAt(i) !== text.charAt(i).toUpperCase()) {
//       durability -= 1;
//     }
//     if (text.charAt(i) === text.charAt(i).toUpperCase()) {
//       durability -= 2;
//     }
//   }
// }


function addDurabilityOffsetSpaces(text) {
  let durabilityOffset, finalText;

  if (text.length > durability) {
    durabilityOffset = text.length - durability;

    const textOverflowToReplace = text.substring(text.length, text.length - durabilityOffset);

    finalText = text.replace(textOverflowToReplace, ' '.repeat(durabilityOffset));
  }

  return finalText || text;
}


const Pencil = (pointDurability) => {
  paper = Paper();
  durability = pointDurability;

  return {
    write
  };
};

export default Pencil;
