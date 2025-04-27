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
