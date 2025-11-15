import { concat, groupBy } from 'lodash'

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 5, 10, 20, 30]
const arr3 = [3, 10, 20, 30]

const findRepeatedLength = (arrays: number[][]) => {
  const concatenated = concat(...arrays)
  const grouped = groupBy(concatenated, Math.floor)
  let res: Record<string, number> = {}
  //  Object.entries(grouped).forEach(([key, value]) => {
  //     res[key] = value.length;
  //   });

  Object.entries(grouped).forEach(([key, value]) => {
    if (Array.isArray(value)) res[key] = value.length
  })
  return res
}

console.log(findRepeatedLength([arr1, arr2, arr3]))
