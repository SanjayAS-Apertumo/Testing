import { TimelineService as timeLine } from 'wdio-timeline-reporter/timeline-service.js';
import { capabilitiesHelper as capHelper } from '../utils/capabilitiesHelper.js';
import { argsMapHelper } from '../utils/argsMapHelper.js';
import { appNameHelper } from '../utils/appNameSelectionHelper.js';
import dotenv from 'dotenv';
dotenv.config();
// Get argument list
const argsMap = await argsMapHelper();

global.argsMap = argsMap;
const envName = argsMap['mode'];
const envFilePath = `.env.${envName}`;
dotenv.config({ path: envFilePath });
const specFiles = await appNameHelper(argsMap['appName']);
console.log('appNames to be run ' + specFiles);

// Get device capabilities
let deviceCapabilities = capHelper(
  [argsMap['browserCapability']],
  global.argsMap,
);

export const config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // For getting the execution files
  specs: specFiles,

  // Patterns to exclude.
  exclude: [],

  maxInstances: 5,

  // Get device capabilities
  capabilities: deviceCapabilities,

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Default timeout for all waitFor* commands.
  waitforTimeout: 50000,

  // TestServices configuration
  services: global.argsMap['browserCapability'].includes('desktop')
    ? [[timeLine], ['chromedriver']]
    : global.argsMap['browserCapability'].includes('safari')
    ? [
        [timeLine],
        [
          'safaridriver',
          {
            outputDir: './logs',
            logFileName: 'wdio-safaridriver.log',
          },
        ],
      ]
    : [[timeLine], ['appium']],

  framework: 'mocha',
  RetriesDeferred: false,

  // Test reporter for stdout.
  reporters: [
    [
      'spec',
      {
        symbols: {
          passed: '[PASS]',
          failed: '[FAIL]',
        },
      },
    ],
    [
      'timeline',
      {
        outputDir:
          './report/' +
          global.argsMap['platform'] +
          '/' +
          global.argsMap['browserCapability'] +
          '/reports-' +
          Math.round(Date.now() / 60000),
        fileName: 'index.html',
        embedImage: true,
        images: {
          quality: 40,
          resize: true,
          reductionRatio: 1,
        },
        screenshotStrategy: 'before:click',
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 600000,
  },
  //
};
