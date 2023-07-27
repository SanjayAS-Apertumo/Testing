import {
  testLobbyLaunch,
  testClickGame,
  testClickLogin,
} from '../../testCases/common/lobby.js';
import {
  testClickChipCoin,
  testClickUpButton,
} from '../../testCases/games/spinDaBottle.js';
import {
  testLaunchPage,
  testLoginLaunch,
  testLoginApplication,
  testInitialOnBoardScreenGetData,
  testClickNextBtn,
  testFinalOnBoardScreenGetData,
  testClickDoneBtn,
  testGetOTBDialogueData,
  testClickOTBDialogueNoBtn,
} from '../../testCases/common/common.js';
import {
  switchToFrameForWap,
  switchToParentFrameForWap,
} from '../../pageObjects/common/common.js';
import { describe, before, it } from 'mocha';
import { testDataHelper } from '../../../utils/testDataHelper.js';

describe('launch the game', () => {
  before('Launch the lobby and click on the game', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickLogin();
    await switchToParentFrameForWap();
    await testLoginLaunch();
    await testLoginApplication(
      process.env.ACCOUNT1_USERNAME,
      process.env.ACCOUNT1_PASSWORD,
    );
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(
      testDataHelper('spinDaBottle', 'spinDaBottleGame', 'name'),
    );
  });
  it('COM-TC-1: Validate the initial onboarding screen', async () => {
    await testInitialOnBoardScreenGetData(testDataHelper('common', 'games'));
  });

  it('COM-TC-3: Validate the click on Next/done button on initial onboarding screen', async () => {
    await testClickNextBtn();
  });

  it('COM-TC-4: Validate the Last onboarding screen', async () => {
    await testFinalOnBoardScreenGetData(testDataHelper('common', 'games'));
  });

  it('COM-TC-5: Validate the click on Done button on Last onboarding screen', async () => {
    await testClickDoneBtn();
  });

  it('COM-TC-8: Validate the click on OTB Modal NO button ', async () => {
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the click on chip Coin button', async () => {
    await testClickChipCoin('0.1');
  });

  it('Validate the click on up button', async () => {
    await testClickUpButton();
  });
});
