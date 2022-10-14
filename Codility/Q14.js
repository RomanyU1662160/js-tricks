/*
Codility NumberOfDiscIntersections
*/

function solution(A) {
    var N = A.length;
    var disc = [];
    for (var i = 0; i < N; i++) {
        disc.push({ start: i - A[i], end: i + A[i] });
    }
    console.log('disc ::::>>>', disc)
    disc.sort(function (a, b) {
        return a.start - b.start;
    });
    var count = 0;
    for (var i = 0; i < N; i++) {
        var j = i + 1;
        while (j < N && disc[j].start <= disc[i].end) {
            count++;
            if (count > 10000000) {
                return -1;
            }
            j++;
        }
    }
    return count;
}

const result = solution([1, 5, 2, 1, 4, 0]);
console.log('result ::::>>>', result)