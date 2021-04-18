import decompose from "./decompose";
import possibleResults from "./possibleResults";

// starts from a decomposition of a host and used indexes from the previous step
// and recontructs the new host to work with
function recontructHost(decomposition, usedIndexes) {
  let newHost = "";
  for (let i of usedIndexes) {
    newHost += decomposition[i];
  }
  for (
    let i = usedIndexes[usedIndexes.length - 1] + 1;
    i < decomposition.length;
    i++
  ) {
    newHost += decomposition[i];
  }
  return newHost;
}

// doesItStartWith verifies if target starts with potentialStart
// In which case, answer is true and newTarget is the remaining part of target
// Otherwise, answer is false and newTarget is empty
export function doesItStartWith(potentialStart, target) {
  let answer = target.substr(0, potentialStart.length) === potentialStart;
  let newTarget = "";
  if (answer) {
    newTarget = target.substr(potentialStart.length);
  }
  return { answer, newTarget };
}

export default function hiddenNumber(target, host, usedLast, reset = false) {
  if (reset) {
    usedLast = false;
  }

  let decompositions = decompose(host);

  for (let d of decompositions) {
    let { results, indexesUsedForResult, operations } = possibleResults(d);
    if (reset) {
      const toSaveorNotToSave = indexesUsedForResult.map(
        indexes => indexes.indexOf(0) >= 0
      );
      indexesUsedForResult = indexesUsedForResult.filter(
        (indexes, i) => toSaveorNotToSave[i]
      );
      results = results.filter((r, i) => toSaveorNotToSave[i]);
      operations = operations.filter((o, i) => toSaveorNotToSave[i]);
    }

    for (let r in results) {
      let usedLastHere = usedLast;
      let { answer, newTarget } = doesItStartWith(results[r], target);
      if (answer) {
        if (!usedLastHere && newTarget === "") {
          usedLastHere =
            indexesUsedForResult[r][indexesUsedForResult[r].length - 1] ===
            d.length - 1;
        }
        // console.log({ usedLastHere, d, indexes: indexesUsedForResult[r] });
        // console.log({
        //   host,
        //   step: operations[r],
        //   potentialStart: results[r],
        //   target,
        //   newTarget,
        //   indexes: indexesUsedForResult[r]
        // });

        if (newTarget === "" && usedLastHere) {
          return { target, success: true, steps: [operations[r]] };
        }
        let newHost = recontructHost(d, indexesUsedForResult[r]);
        let { success, steps } = hiddenNumber(newTarget, newHost, usedLastHere);
        if (success && steps.indexOf(operations[r]) < 0) {
          return { target, success, steps: [operations[r], ...steps] };
        }
      }
    }
  }

  return { target, success: false, steps: [] };
}
