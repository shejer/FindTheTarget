export default function possibleResults(decomposition) {
  const results = [];
  const indexesUsedForResult = [];
  const operations = [];

  // This loop computes all possible combinations between two elements of decomposition
  for (let i = 0; i < decomposition.length - 1; i++) {
    for (let j = i + 1; j < decomposition.length; j++) {
      const add = 1 * decomposition[i] + 1 * decomposition[j];
      results.push(`${add}`);
      indexesUsedForResult.push([i, j]);
      operations.push(`(${decomposition[i]} + ${decomposition[j]} = ${add})`);

      const sub = Math.abs(1 * decomposition[i] - 1 * decomposition[j]);
      results.push(`${sub}`);
      indexesUsedForResult.push([i, j]);
      operations.push(`(${decomposition[i]} - ${decomposition[j]} = ${sub})`);
    }
  }

  // At this point results only contain combinations of two elements of decomposition
  const len = results.length;

  //This loop computes all possible results between a combination and an element of decomposition
  for (let i = 0; i < len - 1; i++) {
    for (
      let j = Math.max(...indexesUsedForResult[i]) + 1;
      j < decomposition.length;
      j++
    ) {
      const add = 1 * results[i] + 1 * decomposition[j];
      results.push(`${add}`);
      indexesUsedForResult.push([...indexesUsedForResult[i], j]);
      operations.push(
        `${operations[i]} (${results[i]} + ${decomposition[j]} = ${add})`
      );

      const sub = Math.abs(1 * results[i] - 1 * decomposition[j]);
      results.push(`${sub}`);
      indexesUsedForResult.push([...indexesUsedForResult[i], j]);
      operations.push(
        `${operations[i]} (${results[i]} - ${decomposition[j]} = ${sub})`
      );
    }
  }

  // This loop computes all possible results that are combinations between two combinations
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (
        Math.max(...indexesUsedForResult[i]) <
        Math.min(...indexesUsedForResult[j])
      ) {
        const add = 1 * results[i] + 1 * results[j];
        results.push(`${add}`);
        indexesUsedForResult.push([
          ...indexesUsedForResult[i],
          ...indexesUsedForResult[j]
        ]);
        operations.push(
          `${operations[i]} ${operations[j]} (${results[i]} + ${results[j]} = ${add})`
        );

        const sub = Math.abs(1 * results[i] - 1 * results[j]);
        results.push(`${sub}`);
        indexesUsedForResult.push([
          ...indexesUsedForResult[i],
          ...indexesUsedForResult[j]
        ]);
        operations.push(
          `${operations[i]} ${operations[j]} (${results[i]} - ${results[j]} = ${sub})`
        );
      }
    }
  }

  return { results, indexesUsedForResult, operations };
}
