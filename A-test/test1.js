/*
codility ; return (0,1,-1) based on the muliplication of the array elements
*/

const solution = (A) => {
    const isContainZeros = A.some((item) => item === 0);
    if (isContainZeros) {
        return 0;
    }
    const
    const negativeElementsLength = A.filter((item) => item < 0).length;


}