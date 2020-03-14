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

let usedFirst = false;
let usedLast = false;

export default function hiddenNumber(target, host, reset = false) {
  if (reset) {
    usedFirst = false;
    usedLast = false;
  }

  let decompositions = decompose(host);

  for (let d of decompositions) {
    let { results, indexesUsedForResult, operations } = possibleResults(d);

    if (!usedFirst) {
      indexesUsedForResult.filter((indexes, i) => {
        const usesFirst = indexes.indexOf(0) >= 0;
        if (!usesFirst) {
          results.splice(i);
        }
        return usesFirst;
      });
    }
    usedFirst = true;

    for (let r in results) {
      let { answer, newTarget } = doesItStartWith(results[r], target);
      if (answer) {
        if (!usedLast) {
          usedLast =
            indexesUsedForResult[r][indexesUsedForResult[r].length - 1] ===
            d.length - 1;
        }
        // console.log({
        //   host,
        //   step: operations[r],
        //   potentialStart: results[r],
        //   target,
        //   newTarget,
        //   indexes: indexesUsedForResult[r]
        // });
        if (newTarget === "" && usedLast) {
          return { success: true, steps: [operations[r]] };
        }
        let newHost = recontructHost(d, indexesUsedForResult[r]);
        let { success, steps } = hiddenNumber(newTarget, newHost);
        if (success) {
          return { success, steps: [operations[r], ...steps] };
        }
      }
    }
  }

  return { success: false, steps: [] };
}
