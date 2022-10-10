
// A small frog wants to get to the other side of the road.


/*
The frog is currently located at position X and wants to get to a
 position greater than or equal to Y. The small frog always jumps
 a fixed distance, D.

For example, given:
  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:
after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
*/

const solution = (x, y, d) => {
    const requiredDistance = y - x
    const numberOfJumps = requiredDistance / d
    console.log('numberOfJumps  :::->>>', numberOfJumps);
    const result = Math.ceil(numberOfJumps)
    return result
}

const solution2 = (x, y, d) => {
    return Math.ceil((x - (y / d)))
}


const res = solution(10, 105, 20)
const res2 = solution2(10, 105, 20)



console.log('res  :::->>>', res);
console.log('res2  :::->>>', res2);