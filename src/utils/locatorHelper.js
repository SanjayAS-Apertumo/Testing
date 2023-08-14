import { locators } from '../test/locators/index.js';

export const locatorHelper = (platform, page, element) => {
  return locators[page][platform][element];
};
