import { testLaunchPage } from '../../testCases/common/launch.js';
import {
  testLobbyLaunch,
  testClickLogin,
} from '../../testCases/common/lobby.js';
import {
  testLoginLaunch,
  testLoginPageData,
  testLoginApplication,
} from '../../testCases/common/login.js';
import {
  switchToFrameForWap,
  switchToParentFrameForWap,
} from '../../pageObjects/common/common.js';

import { describe, before, it } from 'mocha';
import { testDataHelper } from '../../../utils/testDataHelper.js';

const platform = global.argsMap['platform'];

describe('Login Page TestCase', () => {
  before('Launch the application', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickLogin();
    await switchToParentFrameForWap();
  });

  it('Validate the login page is launched', async () => {
    await testLoginLaunch();
  });

  it('Validate the login Page data', async () => {
    await testLoginPageData(testDataHelper(platform, 'common', 'loginPage'));
  });

  it('Validate the login functionally for correct credentials', async () => {
    await testLoginApplication(
      process.env.ACCOUNT1_USERNAME,
      process.env.ACCOUNT1_PASSWORD,
    );
    await switchToFrameForWap(0);
    await testLobbyLaunch();
  });
});
