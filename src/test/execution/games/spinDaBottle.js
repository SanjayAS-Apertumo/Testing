import {
  testLobbyLaunch,
  testClickGame,
  testClickLogin,
  testClickBackIcon,
} from '../../testCases/common/lobby.js';
import {
  testClickChipCoin,
  testClickUpButton,
  testSpinDaBottlePageDataOnResultPage,
  testClickNewRoundBtn,
  testClickRebetBtn,
  testClickHeaderBackBtn,
  testClickExitBtn,
  testClickDownButton,
  testScrollChipToMaxValue,
  testScrollChipToMinValue,
  testSpinDaBottlePageData,
  testSpinDaBottlePageDataAfterFirstRound,
  testSpinDaBottlePageOnLastBet,
  testSpinDaBottlePageDataWhenWalletAmountIsLessThenMinBetAmount,
  testCheckChipState,
  testSpinDaBottlePageDataWhenWalletAmount80PercentageOfMaxBet,
  testSpinDaBottlePageDataWhenWalletAmountLessThanDefaultBet,
} from '../../testCases/games/spinDaBottle.js';

import {
  testLaunchPage,
  testLoginLaunch,
  testLoginApplication,
  testInitialOnBoardScreenGetData,
  testClickNextBtn,
  testFinalOnBoardScreenGetData,
  testClickDoneBtn,
  testClickOTBDialogueNoBtn,
  testClickConfirmBtn,
  testLogOutFromApplication,
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
} from '../../pageObjects/games/spinDaBottle.js';

let DownButton;
let UpButton;
var walletAmount;
var betValue;
var updatedBetAmount;
var sliderMinAmount;

///Launch page For Bottle to spin with Up Button click
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
  it('Validate the initial onboarding screen', async () => {
    await testInitialOnBoardScreenGetData(testDataHelper('common', 'games'));
  });

  it(' Validate the click on Next/done button on initial onboarding screen', async () => {
    await testClickNextBtn();
  });

  it(' Validate the Last onboarding screen', async () => {
    await testFinalOnBoardScreenGetData(testDataHelper('common', 'games'));
  });

  it(' Validate the click on Done button on Last onboarding screen', async () => {
    await testClickDoneBtn();
  });

  it(' Validate the click on OTB Modal NO button ', async () => {
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the click on chip Coin button', async () => {
    await testClickChipCoin('0.1');
  });

  it('Validate the click on up button', async () => {
    await testClickUpButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it(' Validate the page result data', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('Validate the click on New round button', async () => {
    await testClickNewRoundBtn();
  });

  it('Validate the click on chip Coin button', async () => {
    await testClickChipCoin('0.1');
  });

  it('Validate the click on up button', async () => {
    await testClickUpButton();
  });

  it('Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it(' Validate the page result data', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });
  it('Validate the click on Rebet Button', async () => {
    await testClickRebetBtn();
  });

  it('Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it(' Validate the page result data', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('Validate the click on Header back button', async () => {
    await testClickHeaderBackBtn();
  });

  it('Validate the click on Exit button', async () => {
    await testClickExitBtn();
  });

  after('optional description', async () => {
    // Logout
    await testLogOutFromApplication();
  });
});

//Launch page For Bottle to spin with Down Button click
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

  it(' Validate the click on OTB Modal NO button ', async () => {
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the click on chip Coin button', async () => {
    await testClickChipCoin('0.1');
  });

  it('Validate the click on Down button', async () => {
    await testClickDownButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it(' Validate the page result data', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('Validate the click on New round button', async () => {
    await testClickNewRoundBtn();
  });

  it('Validate the scroll the chip to Min', async () => {
    await testScrollChipToMinValue(
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
    );
  });

  it('Validate the scroll the chip to Max', async () => {
    await testScrollChipToMaxValue(
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
    );
  });

  it('Validate the click on chip Coin button', async () => {
    await testClickChipCoin('0.1');
  });

  it('Validate the click on Down button', async () => {
    await testClickDownButton();
  });

  it('Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it(' Validate the page result data', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });
  it('Validate the click on Rebet Button', async () => {
    await testClickRebetBtn();
  });

  it('Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it(' Validate the page result data', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'SpinDaBottle',
        'SpinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });
  it('Validate the click on Header back button', async () => {
    await testClickHeaderBackBtn();
  });

  it('Validate the click on Exit button', async () => {
    await testClickExitBtn();
  });

  after('optional description', async () => {
    // Logout
    await testLogOutFromApplication();
  });
});

//Launch page For validating betting scenarios
describe('Validate the spinDaBottle Betting Scenarios', () => {
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
    await testClickGame(
      testDataHelper('spinDaBottle', 'spinDaBottleGame', 'name'),
    );
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the SpinDaBottle Page data', async () => {
    await testSpinDaBottlePageData(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      1,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('Validate the click on Down button', async () => {
    await testClickDownButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('Validate the SpinDaBottle Result Page data in Ist Round', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      DownButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('Validate the click on New round button', async () => {
    await testClickNewRoundBtn();
  });

  it('Validate the SpinDaBottle result Page data after placing bet', async () => {
    await testSpinDaBottlePageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      2,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('Validate the click on up button', async () => {
    await testClickUpButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('Validate the spin Da bottle Result Page data after the 2nd bet', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      UpButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('Validate the click on New round button', async () => {
    await testClickNewRoundBtn();
  });

  it('RB-TC-8: Validate the spin Da bottle  Page data after placing bet', async () => {
    await testSpinDaBottlePageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      3,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('Validate the click on Down button', async () => {
    await testClickDownButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('Validate the SpinDaBottle Result Page data in 3rd bet', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      DownButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });
  it('Validate the click on New round button', async () => {
    await testClickNewRoundBtn();
  });
  it('Validate the SpinDaBottle Page data after placing bet', async () => {
    await testSpinDaBottlePageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      4,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('Validate the click on up button', async () => {
    await testClickUpButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('Validate the SpinDaBottle result Page data after the 4th bet', async () => {
    await testSpinDaBottlePageDataOnResultPage(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      UpButton,
      walletAmount,
      betValue,
    );
    const gamePageDataStatus = await gamePageResultData();
    if (gamePageDataStatus.youWon === null) {
      updatedBetAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'betAmount',
      );
      sliderMinAmount = testDataHelper(
        'spinDaBottle',
        'spinDaBottleGame',
        'sliderMinAmount',
      );
    } else {
      updatedBetAmount = gamePageDataStatus.successMsgBetAmount;
      sliderMinAmount = gamePageDataStatus.successMsgBetAmount;
    }
  });

  it('Validate the click on New round button', async () => {
    await testClickNewRoundBtn();
  });

  it('Validate the SpinDaBottle Page data after placing bet', async () => {
    await testSpinDaBottlePageDataAfterFirstRound(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      5,
      updatedBetAmount,
      sliderMinAmount,
    );
    const betPageData = await gamePageData();
    walletAmount = parseFloat(betPageData.walletAmount.replace(/[^0-9.]/g, ''));
    betValue = parseFloat(betPageData.betAmountValue.replace(/[^0-9.]/g, ''));
  });

  it('Validate the click on Down button', async () => {
    await testClickDownButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('Validate the SpinDaBottle Page data after the 5th bet', async () => {
    await testSpinDaBottlePageOnLastBet(
      testDataHelper('common', 'games'),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
      DownButton,
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
//Launch page For wallet amount is max than bet amount 80% max
describe('When Wallet Amount is Max than default bet amount but 80% of max bet amount: Validate the following Scenarios', () => {
  before('Launch the lobby after login into application', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(
      testDataHelper('spinDaBottle', 'spinDaBottleGame', 'name'),
    );
    await switchToParentFrameForWap();
    await testLoginLaunch();
    await testLoginApplication(
      process.env.ACCOUNT3_USERNAME,
      process.env.ACCOUNT3_PASSWORD,
    );
    await switchToFrameForWap(0);
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the spinDaBottle Page data when wallet amount is less than 80% of Max bet', async () => {
    await testSpinDaBottlePageDataWhenWalletAmount80PercentageOfMaxBet(
      testDataHelper('common', 'games'),
      testDataHelper(
        'spinDaBottle',
        'scenarioWhenWalletAmount80PercentageOfDeafultBet',
      ),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
    );
  });

  after('optional description', async () => {
    await testClickHeaderBackBtn();
    await testClickExitBtn();
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});
//Launch page For wallet amount is less than default bet amount
describe('When Wallet Amount is Less than default Bet Amount: Validate the Following Scenarios', () => {
  before('Launch the lobby after login into application', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(
      testDataHelper('spinDaBottle', 'spinDaBottleGame', 'name'),
    );
    await switchToParentFrameForWap();
    await testLoginLaunch();
    await testLoginApplication(
      process.env.ACCOUNT4_USERNAME,
      process.env.ACCOUNT4_PASSWORD,
    );
    await switchToFrameForWap(0);
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the SpinDaBottle Page data when wallet amount is less the default bet amount', async () => {
    await testSpinDaBottlePageDataWhenWalletAmountLessThanDefaultBet(
      testDataHelper('common', 'games'),
      testDataHelper(
        'SpinDaBottle',
        'scenarioWhenWalletAmountIsLessThenDefaultBetAmount',
      ),
      testDataHelper('SpinDaBottle', 'SpinDaBottleGame'),
    );
  });

  after('optional description', async () => {
    await testClickHeaderBackBtn();
    await testClickExitBtn();
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});
//Launch page For wallet amount is less than bet amount
describe('When Wallet Amount is less than bet amount: spinDaBottle Game is Launched then Login into application and validate the chip scrolling', () => {
  before('Launch the lobby and click on the game', async () => {
    await testLaunchPage();
    await switchToFrameForWap(0);
    await testLobbyLaunch();
    await testClickGame(
      testDataHelper('spinDaBottle', 'spinDaBottleGame', 'name'),
    );
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

  it(' Validate the click on OTB Modal NO button ', async () => {
    await testClickOTBDialogueNoBtn();
  });

  it('Validate the spinDaBottle Page data when wallet amount is less the min bet amount', async () => {
    await testSpinDaBottlePageDataWhenWalletAmountIsLessThenMinBetAmount(
      testDataHelper('common', 'games'),
      testDataHelper(
        'spinDaBottle',
        'scenarioWhenWalletAmountIsLessThenMinBet',
      ),
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
    );
  });

  it('Validate the scroll the chip to Min', async () => {
    await testScrollChipToMinValue(
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
    );
  });

  it('Validate the scroll the chip to Max', async () => {
    await testScrollChipToMaxValue(
      testDataHelper('spinDaBottle', 'spinDaBottleGame'),
    );
  });

  it('Validate the all chips are disabled', async () => {
    await testCheckChipState(
      testDataHelper('spinDaBottle', 'spinDaBottleGame', 'maxChipValue'),
    );
  });

  it('Validate the click on Up button', async () => {
    await testClickUpButton();
  });

  it(' Validate the click on Confirm button', async () => {
    await testClickConfirmBtn();
  });

  it('COM-TC-9: Validate the click on Header back button', async () => {
    await testClickHeaderBackBtn();
  });

  it('COM-TC-11: Validate the click on Exit button from exit modal', async () => {
    await testClickExitBtn();
  });

  after('optional description', async () => {
    // The last test
    await testClickBackIcon();
    await testLogOutFromApplication();
  });
});
