export const capabilities = {
  'bstack-samsungS23': {
    browserstackLocal: true,
    capabilities: [
      {
        browserName: 'chrome',
        'bstack:options': {
          deviceName: 'Samsung Galaxy S23',
          deviceOrientation: 'portrait',
          osVersion: '13.0',
        },
      },
    ],
  },

  'bstack-samsungS23-app': {
    browserstackLocal: true,
    capabilities: [
      {
        'bstack:options': {
          deviceName: 'Samsung Galaxy S22 Ultra',
          deviceOrientation: 'portrait',
          platformVersion: '12.0',
        },
      },
    ],
  },

  'bstack-parallel': {
    browserstackLocal: true,
    capabilities: [
      {
        browserName: 'chrome',
        'bstack:options': {
          deviceName: 'Samsung Galaxy S23 Ultra',
          deviceOrientation: 'portrait',
          osVersion: '13.0',
        },
      },
      {
        browserName: 'chrome',
        'bstack:options': {
          deviceName: 'Xiaomi Redmi Note 11',
          deviceOrientation: 'portrait',
          osVersion: '11.0',
        },
      },
    ],
  },

  'desktop-chrome-360': {
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          mobileEmulation: {
            deviceMetrics: {
              height: 896,
              width: 414,
            },
            userAgent:
              'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36',
          },
        },
        maxInstances: 5,
      },
    ],
  },

  'safari-360': {
    capabilities: [
      {
        browserName: 'safari',
      },
    ],
    resolution: '360x640',
  },

  'emulator-Wap': {
    capabilities: [
      {
        'appium:autoGrantPermissions': true,
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Pixel XL',
        'appium:platformVersion': '11.0',
        browserName: 'chrome',
        maxInstances: 2,
        path: '/wd/hub/',
        platformName: 'Android',
      },
    ],
  },

  'emulator-App': {
    capabilities: [
      {
        'appium:app': 'path.join(process.cwd(), process.env.APK_PATH)',
        'appium:deviceName': 'Pixel XL',
        'appium:appPackage': 'process.env.APP_PACKAGE_NAME',
        'appium:appActivity': 'com.sportybet.android.home.SplashActivity',
        path: '/wd/hub/',
        platformName: 'Android',
      },
    ],
    hostname: '',
    portNumber: 4723,
  },
};
