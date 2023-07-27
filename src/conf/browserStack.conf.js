import { TimelineService as timeLine } from 'wdio-timeline-reporter/timeline-service.js';
import { capabilitiesHelper as capHelper } from '../utils/capabilitiesHelper.js';
import dotenv from 'dotenv';
dotenv.config();
import { argsMapHelper } from '../utils/argsMapHelper.js';
import { appNameHelper } from '../utils/appNameSelectionHelper.js';

// Get argument list
const argsMap = await argsMapHelper();

// Get device capabilities
const deviceCapabilities = capHelper([argsMap['browserCapability']], argsMap);

// Get env file
const envName = argsMap['mode'];
const envFilePath = `.env.${envName}`;
dotenv.config({ path: envFilePath });

// Get appName
const specFiles = await appNameHelper(argsMap['appName']);
console.log('appNames to be run ' + specFiles);

// Get deviceCapabilities
global.argsMap = argsMap;

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,
  hostname: 'hub.browserstack.com',
  port: 443,
  coloredLogs: true,
  screenshotPath: './errorShots/',
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  // For getting the execution files
  specs: specFiles,

  maxInstances: 5,
  //

  // For setting the different capabilities.
  capabilities: deviceCapabilities,
  commonCapabilities: {
    'bstack:options': {
      projectName: 'Games Automation',
      buildName: ' Games build',
      sessionName: 'Games Automation Test',
      debug: true,
      networkLogs: true,
    },
  },
  // Level of logging verbosity: trace | debug | info | warn | error | silent

  logLevel: 'error',

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 60000,

  services:
    global.argsMap['browserCapability'].includes('bstack') &&
    global.argsMap['platform'] === 'android'
      ? [
          [timeLine],
          ['appium'],
          [
            'browserstack',
            {
              app: process.env.APK_PATH,
              buildIdentifier: '${BUILD_NUMBER}',
              browserstackLocal: true,
              opts: {
                forceLocal: true,
              },
            },
          ],
        ]
      : global.argsMap['browserCapability'].includes('bstack')
      ? [
          [timeLine],
          ['appium'],
          [
            'browserstack',
            {
              buildIdentifier: '${BUILD_NUMBER}',
              browserstackLocal: true,
              opts: { forceLocal: true },
            },
          ],
        ]
      : [[timeLine], ['appium']],

  framework: 'mocha',
  RetriesDeferred: false,

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
// Code to support common capabilities
config.capabilities.forEach(function (caps) {
  for (let key in config.commonCapabilities)
    caps[key] = { ...caps[key], ...config.commonCapabilities[key] };
});
