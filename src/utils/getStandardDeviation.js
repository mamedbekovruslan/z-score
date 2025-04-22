export function getStandardDeviation(arr, mean) {
  const squaredDiffs = arr.map((val) => Math.pow(val - mean, 2));
  const avgSquaredDiff =
    squaredDiffs.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(avgSquaredDiff);
}
