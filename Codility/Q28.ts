import {flattenDeep, flatten,sortBy, uniq, chain, concat, zipObject, intersection } from "lodash"

/*
_.concat          → merge arrays
_.uniq            → unique values (you can skip)
_.flatten         → flatten one level
_.flattenDeep     → flatten deeply
_.zipObject       → array → object
_.fromPairs       → pairs → object
_.toPairs         → object → pairs
_.sortBy          → sort
_.groupBy         → group
_.chunk           → break into chunks
_.cloneDeep       → deep clone

*/


// sort with uniq 
const arr1 = [1, 2, 3, 8, 12, 4, 10, 6, 1, 9]
const arr2 = [8, 7, 6, 8, 5, 4, 9, 10, 3, 1, 2, [122,123]]

const uniqSorted = sortBy(uniq([...arr1, ...arr2]))

const toObject = zipObject(arr1)