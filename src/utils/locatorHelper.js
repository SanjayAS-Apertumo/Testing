import { locators } from '../test/locators/index.js';

export const locatorHelper = (platform, page, element) => {
  console.log(page, platform, element);
  return locators[page][platform][element];
};
