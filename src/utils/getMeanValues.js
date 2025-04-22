import { data } from "../data";
import { getMeanHelper } from "./getMeanHelper";
import { getStandardDeviation } from "./getStandardDeviation";

const pvValues = data.map((item) => item.pv);
const uvValues = data.map((item) => item.uv);

export const meanPv = getMeanHelper(pvValues);
export const meanUv = getMeanHelper(uvValues);

export const stdPv = getStandardDeviation(pvValues, meanPv);
export const stdUv = getStandardDeviation(uvValues, meanUv);
