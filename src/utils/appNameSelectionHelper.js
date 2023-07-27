import { testFileMapper } from './constant.js';
export async function appNameHelper(appName) {
  if (!appName) {
    console.error(
      '\nERROR: "appName" is mandatory. \nPlease provide the correct appName using the following format:',
    );
    console.error('npm run *script* -- --appName="appName"');
    console.error('Exiting program...');
    process.exit(1);
  }

  if (appName.includes(',')) {
    const multipleSpecs = appName.split(',');
    const specFiles = multipleSpecs.map((file) => {
      const mappedFile = testFileMapper[file];
      if (!mappedFile) {
        console.error(
          `ERROR: "${file}" is incorrect. Please provide a valid app file name.`,
        );
        process.exit(1);
      }
      return `../test/execution/**/${mappedFile}.js`;
    });
    return specFiles;
  }

  if (appName === 'all') {
    return ['../test/execution/games/*.js'];
  }

  const mappedFile = testFileMapper[appName];
  if (!mappedFile) {
    console.error(
      `ERROR: "${appName}" is incorrect. Please provide a valid app file Name.`,
    );
    process.exit(1);
  }
  return [`../test/execution/**/${mappedFile}.js`];
}
