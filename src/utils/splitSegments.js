export const splitSegments = (data, key) => {
  const segments = [];
  let currentSegment = [];
  let lastIsAnomalous = null;

  data.forEach((point) => {
    const isAnomalous = Math.abs(point[`${key}Z`]) > 1;

    if (lastIsAnomalous === null || lastIsAnomalous === isAnomalous) {
      currentSegment.push(point);
    } else {
      if (currentSegment.length) {
        segments.push({
          data: [...currentSegment],
          isAnomalous: lastIsAnomalous,
        });
      }
      currentSegment = [point];
    }

    lastIsAnomalous = isAnomalous;
  });

  if (currentSegment.length) {
    segments.push({ data: [...currentSegment], isAnomalous: lastIsAnomalous });
  }

  return segments;
};
