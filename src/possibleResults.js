export default function possibleResults(decomposition) {
  const results = [];
  const indexesUsedForResult = [];
  const operations = [];

  function loop(decomposition, index, val, stepsForVal, indexes = []) {
    for (let i = index + 1; i < decomposition.length; i++) {
      const add = val + 1 * decomposition[i];
      results.push(`${add}`);
      indexesUsedForResult.push([...indexes, index, i]);
      operations.push(`${stepsForVal} (${val} + ${decomposition[i]} = ${add})`);
      loop(
        decomposition,
        i,
        val + 1 * decomposition[i],
        `${stepsForVal} (${val} + ${decomposition[i]} = ${add})`,
        [...indexes, index]
      );

      const sub = Math.abs(val - 1 * decomposition[i]);
      results.push(`${sub}`);
      indexesUsedForResult.push([...indexes, index, i]);
      operations.push(`${stepsForVal} (${val} - ${decomposition[i]} = ${sub})`);
      loop(
        decomposition,
        i,
        Math.abs(val - 1 * decomposition[i]),
        `${stepsForVal} (${val} - ${decomposition[i]} = ${sub})`,
        [...indexes, index]
      );
    }
  }

  loop(decomposition, 0, 1 * decomposition[0], "");

  return { results, indexesUsedForResult, operations };
}
