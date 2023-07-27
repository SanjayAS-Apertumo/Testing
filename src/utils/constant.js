export const androidLocatorPath =
  './/*[@resource-id="com.sportybet.android:id/';

export const appURL = (
  process.env.BASE_URL +
  '/' +
  process.env.COUNTRY +
  '/m'
).toString();

export const testFileMapper = {
  'lobby': 'lobby', // eslint-disable-line
  'red-black': 'redBlack',

  spinDaBottle: 'spinDaBottle',
};
