import {
  testLobbyLaunch,
  testClickGame,
  testClickLogin,
  testClickBackIcon,
} from '../../testCases/common/lobby.js';
import {
  testRedBlackPageData,
  testClickChipCoinBtn,
  testScrollChipToMinValue,
  testScrollChipToMaxValue,
  testClickBlackBtn,
  testClickRedBtn,
  testRedBlackPageDataOnResultPage,
  testRedBlackPageDataAfterFirstRound,
  testRedBlackPageOnLastBet,
  testRedBlackPageDataWhenWalletAmountIsLessThenMinBetAmount,
  testRedBlackPageDataWhenWalletAmount80PercentageOfMaxBet,
  testRedBlackPageDataWhenWalletAmountLessThanDefaultBet,
  testRedBlackPageDataForNewRound,
  testCheckChipState,
} from '../../testCases/games/redBlack.js';
import {
  testClickNewRoundBtn,
  testLaunchPage,
  testLogOutFromApplication,
  testLoginLaunch,
  testLoginApplication,
  testInitialOnBoardScreenGetData,
  testClickNextBtn,
  testFinalOnBoardScreenGetData,
  testClickPlayNextHandBtn,
  testBetConfirmPanelData,
  testClickDoneBtn,
  testClickHeaderBackBtn,
  testClickExitBtn,
  testExitModalData,
  testClickConfirmBtn,
  testLowWalletBalanceConfirmPanelGetData,
  testClickCloseConfirmModalBtn,
  testGetOTBDialogueData,
  testClickOTBDialogueNoBtn,
  testClickNewRoundDialogNewRoundBtn,
  testGetNewRoundDialogueData,
  testClickRoundStaticsModalCloseBtn,
} from '../../testCases/common/common.js';
import {
  switchToFrameForWap,
  switchToParentFrameForWap,
} from '../../pageObjects/common/common.js';
import { describe, before, it, after } from 'mocha';
import { testDataHelper } from '../../../utils/testDataHelper.js';
import {
  gamePageData,
  gamePageResultData,
} from '../../pageObjects/games/redBlack.js';

let blackButton;
let redButton;
var walletAmount;
var betValue;
var updatedBetAmount;
var sliderMinAmount;

describe('When Wallet Amount is less than bet amount: Red-Black Game is Launched then Login into application and validate the chip scrolling', () => {
  before('Launch the lobby and click on the game', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(testDataHelper('redBlack', 'redBlackGame', 'name'));
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

  it('Validate the login page is launched', async () => {
    await switchToParentFrameForWap();
    await testLoginLaunch();
  });

  it('Validate the login functionally for correct credentials', async () => {
    await testLoginApplication(
      process.env.ACCOUNT2_USERNAME,
      process.env.ACCOUNT2_PASSWORD,
    );
    await switchToFrameForWap(0);
  });

  it('COM-TC-6: Validate the OTB Modal Data', async () => {
    await testGetOTBDialogueData(testDataHelper('common', 'games'));
  });

  it('COM-TC-8: Validate the click on OTB Modal NO button ', async () => {
    await testClickOTBDialogueNoBtn();
  });

  it('RB-TC-3: Validate the Red black Page data when wallet amount is less the min bet amount', async () => {
    await testRedBlackPageDataWhenWalletAmountIsLessThenMinBetAmount(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'scenarioWhenWalletAmountIsLessThenMinBet'),
      testDataHelper('redBlack', 'redBlackGame'),
    );
  });

  it('RB-TC-10: Validate the scroll the chip to Min', async () => {
    await testScrollChipToMinValue(testDataHelper('redBlack', 'redBlackGame'));
  });

  it('RB-TC-11: Validate the scroll the chip to Max', async () => {
    await testScrollChipToMaxValue(testDataHelper('redBlack', 'redBlackGame'));
  });

  it('RB-TC-12: Validate the all chips are disabled', async () => {
    await testCheckChipState(
      testDataHelper('redBlack', 'redBlackGame', 'maxChipValue'),
    );
  });

  it('RB-TC-5: Validate the click on black button', async () => {
    await testClickBlackBtn();
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-3: Validate the data of low balance modal', async () => {
    await testLowWalletBalanceConfirmPanelGetData(
      testDataHelper('common', 'games'),
    );
  });

  it('RB-TC-3: Validate the click on close button on low balance modal', async () => {
    await testClickCloseConfirmModalBtn();
  });

  it('COM-TC-9: Validate the click on Header back button', async () => {
    await testClickHeaderBackBtn();
  });

  it('COM-TC-10: Validate the data of Exit Game modal', async () => {
    await testExitModalData(testDataHelper('common', 'games'));
  });

  it('COM-TC-11: Validate the click on Exit button from exit modal', async () => {
    await testClickExitBtn();
  });

  after('optional description', async () => {
    // runs once after the last test in this block
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});

describe('When Wallet Amount is Max than default bet amount but 80% of max bet amount: Validate the following Scenarios', () => {
  before('Launch the lobby after login into application', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(testDataHelper('redBlack', 'redBlackGame', 'name'));
    await switchToParentFrameForWap();
    await testLoginLaunch();
    await testLoginApplication(
      process.env.ACCOUNT3_USERNAME,
      process.env.ACCOUNT3_PASSWORD,
    );
    await switchToFrameForWap(0);
    await testClickOTBDialogueNoBtn();
  });

  it('RB-TC-4: Validate the Red black Page data when wallet amount is less than 80% of Max bet', async () => {
    await testRedBlackPageDataWhenWalletAmount80PercentageOfMaxBet(
      testDataHelper('common', 'games'),
      testDataHelper(
        'redBlack',
        'scenarioWhenWalletAmount80PercentageOfDeafultBet',
      ),
      testDataHelper('redBlack', 'redBlackGame'),
    );
  });

  after('optional description', async () => {
    await testClickHeaderBackBtn();
    await testClickExitBtn();
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});

describe('When Wallet Amount is Less than default Bet Amount: Validate the Following Scenarios', () => {
  before('Launch the lobby after login into application', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(testDataHelper('redBlack', 'redBlackGame', 'name'));
    await switchToParentFrameForWap();
    await testLoginLaunch();
    await testLoginApplication(
      process.env.ACCOUNT4_USERNAME,
      process.env.ACCOUNT4_PASSWORD,
    );
    await switchToFrameForWap(0);
    await testClickOTBDialogueNoBtn();
  });

  it('RB-TC-2: Validate the Red black Page data when wallet amount is less the default bet amount', async () => {
    await testRedBlackPageDataWhenWalletAmountLessThanDefaultBet(
      testDataHelper('common', 'games'),
      testDataHelper(
        'redBlack',
        'scenarioWhenWalletAmountIsLessThenDefaultBetAmount',
      ),
      testDataHelper('redBlack', 'redBlackGame'),
    );
  });

  after('optional description', async () => {
    await testClickHeaderBackBtn();
    await testClickExitBtn();
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});

describe('Validate the Red-Black Betting Scenarios', () => {
  before('Launch the lobby after login into application', async () => {
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
    await testClickGame(testDataHelper('redBlack', 'redBlackGame', 'name'));
    await testClickOTBDialogueNoBtn();
  });

  it('RB-TC-1: Validate the Red black Page data', async () => {
    await testRedBlackPageData(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      1,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('RB-TC-5: Validate the click on black button', async () => {
    blackButton = await testClickBlackBtn();
  });

  it('COM-TC-13: Validate the data of Confirm dialogue', async () => {
    await testBetConfirmPanelData(testDataHelper('common', 'games'));
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-6: Validate the Red black Result Page data in Ist Round', async () => {
    await testRedBlackPageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      blackButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('RB-TC-7: Validate the click on next hand button', async () => {
    await testClickPlayNextHandBtn();
  });

  it('RB-TC-8: Validate the Red black result Page data after placing bet', async () => {
    await testRedBlackPageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      2,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('RB-TC-5: Validate the click on Red button', async () => {
    redButton = await testClickRedBtn();
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-6: Validate the Red black Result Page data after the 2nd bet', async () => {
    await testRedBlackPageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      redButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('RB-TC-7: Validate the click on next hand button', async () => {
    await testClickPlayNextHandBtn();
  });

  it('RB-TC-8: Validate the Red black Page data after placing bet', async () => {
    await testRedBlackPageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      3,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('RB-TC-5: Validate the click on black button', async () => {
    blackButton = await testClickBlackBtn();
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-6: Validate the Red black Result Page data after the 3rd bet', async () => {
    await testRedBlackPageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      blackButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('RB-TC-7: Validate the click on next hand button', async () => {
    await testClickPlayNextHandBtn();
  });

  it('RB-TC-8: Validate the Red black Page data after placing bet', async () => {
    await testRedBlackPageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      4,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('RB-TC-5: Validate the click on black button', async () => {
    blackButton = await testClickBlackBtn();
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-6: Validate the Red black result Page data after the 4th bet', async () => {
    await testRedBlackPageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      blackButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'redBlack',
        'redBlackGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('RB-TC-7: Validate the click on next hand button', async () => {
    await testClickPlayNextHandBtn();
  });

  it('RB-TC-8: Validate the Red black Page data after placing bet', async () => {
    await testRedBlackPageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      5,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('RB-TC-5: Validate the click on Red button', async () => {
    redButton = await testClickRedBtn();
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-8: Validate the Red black Page data after the 5th bet', async () => {
    await testRedBlackPageOnLastBet(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'redBlackGame'),
      redButton,
      walletAmount,
      betValue,
    );
  });

  after('optional description', async () => {
    // runs once after the last test in this block
    await testClickHeaderBackBtn();
    await testClickExitBtn();
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});

describe('Validate the New Round Scenario', () => {
  before('Launch the lobby after login into application', async () => {
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
    await testClickGame(testDataHelper('redBlack', 'redBlackGame', 'name'));
    await testClickOTBDialogueNoBtn();
  });

  it('RB-TC-9: Validate the adding the chip value in bet amount', async () => {
    await testClickChipCoinBtn(testDataHelper('redBlack', 'redBlackGame'));
  });

  it('RB-TC-5: Validate the click on black button', async () => {
    blackButton = await testClickBlackBtn();
  });

  it('COM-TC-14: Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('RB-TC-7: Validate the click on next hand button', async () => {
    await testClickPlayNextHandBtn();
  });

  it('COM-TC-15: Validate the Click on New Round Button', async () => {
    await testClickNewRoundBtn();
  });

  it('COM-TC-16: Validate the Data on New Round Dialogue Modal', async () => {
    await testGetNewRoundDialogueData(testDataHelper('common', 'games'));
  });

  it('COM-TC-17: Validate the Click on New Round Button from NewRound Dialogue modal', async () => {
    await testClickNewRoundDialogNewRoundBtn();
  });

  it('COM-TC-18: Validate the Click on close button on round statics Dialogue modal', async () => {
    await testClickRoundStaticsModalCloseBtn();
  });

  it('RB-TC-1: Validate the Red black Page data', async () => {
    await testRedBlackPageDataForNewRound(
      testDataHelper('common', 'games'),
      testDataHelper('redBlack', 'scenarioForNewRoundAfterUpdatingDefaultBet'),
      1,
    );
  });

  after('optional description', async () => {
    // runs once after the last test in this block
    await testClickHeaderBackBtn();
    await testClickExitBtn();
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});
