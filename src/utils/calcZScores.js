export function calcZScores(data, key, mean, std) {
  return data.map((item) => ({
    ...item,
    [`${key}Z`]: std === 0 ? 0 : (item[key] - mean) / std,
  }));
}
