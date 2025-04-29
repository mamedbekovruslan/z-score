export function getMean(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

export function getStandardDeviation(arr, mean) {
  const squaredDiffs = arr.map((val) => Math.pow(val - mean, 2));
  const avgSquaredDiff =
    squaredDiffs.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(avgSquaredDiff);
}

export function calcZScores(data, fields) {
  return data.map((item) => {
    const newItem = { ...item };
    fields.forEach(({ key, mean, std }) => {
      const z = std === 0 ? 0 : (item[key] - mean) / std;
      newItem[`${key}Z`] = z;
      newItem[`${key}Red`] = Math.abs(z) > 1 ? item[key] : null;
    });
    return newItem;
  });
}
