export function calcZScores(data, fields) {
  return data.map((item) => {
    const newItem = { ...item };

    fields.forEach(({ key, mean, std }) => {
      newItem[`${key}Z`] = std === 0 ? 0 : (item[key] - mean) / std;
    });

    return newItem;
  });
}
