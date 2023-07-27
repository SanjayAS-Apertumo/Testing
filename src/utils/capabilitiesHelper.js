import { capabilities } from '../capabilities.js';
import path from 'path';

export const capabilitiesHelper = (browserCapability) => {
  if (capabilities[browserCapability] === undefined) {
    console.log(
      'ERROR: Browser capability not found in the capabilities.js file. Please update the capabilities.js as required.',
    );
    console.log('browserCapability = ' + browserCapability);
    console.log('Exiting program..');
    process.exit(1);
  } else {
    return capabilities[browserCapability].capabilities.map((capability) => {
      const updatedCapability = { ...capability };
      if (capability['appium:app']) {
        const app = eval(capability['appium:app']);
        const resolvedAppPath = path.resolve(app);
        updatedCapability['appium:app'] = resolvedAppPath;
      }
      if (capability['appium:appPackage']) {
        const app = eval(capability['appium:appPackage']);
        updatedCapability['appium:appPackage'] = app;
      }
      return updatedCapability;
    });
  }
};
