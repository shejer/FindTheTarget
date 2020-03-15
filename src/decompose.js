// precondition : array has 2 dimensions
// concat adds element in the beginning of each array component
function concat(element, array) {
  if (array.length === 0) {
    return [[element]];
  }

  return array.map(e => [element, ...e]);
}

function rawDecomposition(number) {
  if (number.length === 0) {
    return [];
  }

  if (number.length === 1) {
    //  console.log("case 1 : ", [[number]]);
    return [[number]];
  }

  if (number.length === 2) {
    //console.log("case 2 : ", [[number[0], number[1]], [number]]);
    return [[number[0], number[1]], [number]];
  }

  if (number.length === 3) {
    return [
      [number.substr(0, 1), number.substr(1, 1), number.substr(2, 1)],
      [number.substr(0, 1), number.substr(1, 2)],
      [number.substr(0, 2), number.substr(2, 1)],
      [number]
    ];
  }

  return [
    ...concat(number.substr(0, 1), decompose(number.substr(1))),
    ...concat(number.substr(0, 2), decompose(number.substr(2))),
    ...concat(number.substr(0, 3), decompose(number.substr(3))),
    ...concat(number.substr(0, 4), decompose(number.substr(4)))
  ];
}

export default function decompose(number) {
  const decompositions = rawDecomposition(number);
  for (let i in decompositions) {
    decompositions[i] = decompositions[i].map(str =>
      str.replace(/0+(.+)/, "$1")
    );
  }
  return decompositions;
}
