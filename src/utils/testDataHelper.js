import { testData } from '../test/testData/index.js';

export const testDataHelper = (page, ...args) => {
  let result = testData[page];
  for (const arg of args) {
    result = result?.[arg];
    if (!result) {
      break;
    }
  }
  return result;
};
