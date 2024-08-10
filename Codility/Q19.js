// peak is the element that is greater than its neighbors




const peakFlags = (A) => {
    const peaks = [];
    const length = A.length - 1;
    for (let i = 0; i < length; i++) {
        if (A[i] > 0 && A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i)
        }
    }
    const peakLength = peaks.length;
    if (peakLength < 2) {
        return peakLength
    }
    let maxFlags = 1;
    let flags = 2;
    while (flags <= peakLength) {
        let flagCount = 1;
        let currentPeak = peaks[0];
        for (let i = 1; i < peakLength; i++) {
            if (peaks[i] - currentPeak >= flags) {
                flagCount++;
                currentPeak = peaks[i]
            }
        }
        maxFlags = Math.max(maxFlags, flagCount);
        flags++
    }
    return maxFlags
}
