import {
  testLobbyLaunch,
  testLobbyDataBeforeLogin,
  testLobbyGamesAvailableEachCategory,
  testClickLogin,
  testLobbyDataAfterLogin,
  testClickOnGameCategory,
  testClickGame,
} from '../../testCases/common/lobby.js';
import {
  testLoginLaunch,
  testLaunchPage,
  testLoginApplication,
} from '../../testCases/common/common.js';
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
  });

  it('Validate the lobby data before login', async () => {
    await testLobbyLaunch();
    await testLobbyDataBeforeLogin(
      testDataHelper(platform, 'lobby', 'lobbyPage'),
    );
  });

  it('Validate the game is available in each category', async () => {
    await testLobbyGamesAvailableEachCategory();
  });

  it('Validate the click on login button', async () => {
    await testClickLogin();
  });

  it('Validate the login into application', async () => {
    await switchToParentFrameForWap();
    await testLoginLaunch();
    await testLoginApplication(
      process.env.ACCOUNT1_USERNAME,
      process.env.ACCOUNT1_PASSWORD,
    );
  });

  it('Validate the lobby is launched', async () => {
    await switchToFrameForWap(0);
    await testLobbyLaunch();
  });

  it('Validate the lobby data after login', async () => {
    await testLobbyDataAfterLogin();
  });

  it('Validate the click on a category of game', async () => {
    await testClickOnGameCategory('Quick');
  });

  it('Validate the click on provided game', async () => {
    await testClickGame('Red Black');
  });
});
