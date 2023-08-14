import {
  clickChipCoin,
  clickUpBtn,
  clickDownBtn,
  clickConfirmBtn,
  clickNewRoundBtn,
  clickRebetBtn,
  clickHeaderBackBtn,
  clickExitBtn,
  scrollChipToMax,
  scrollChipToMin,
  gamePageData,
  gamePageResultData,
  checkChipState,
} from '../../pageObjects/games/spinDaBottle.js';
import {
  assertEqual,
  assertTest as assert,
  assertNotEqual,
} from '../../../utils/baseAssertionLibrary.js';
import {} from '../../pageObjects/common/lobby.js';
import {} from '../../pageObjects/common/common.js';
import {} from '../../pageObjects/games/spinDaBottle.js';
import { formatNumber } from '../../../utils/numberFormat.js';
var roundOffDigits;
const platform = global.argsMap['platform'];
// Validate the click on done button on onboarding screen
export async function testClickDownBtn() {
  const doneBtnStatus = await clickDownBtn();
  await assertEqual(doneBtnStatus, true, 'Done button is clicked');
}
// Validate the click on chip icon on onboarding screen
export async function testClickChipCoin(chipAmount) {
  const chipIconBtnStatus = await clickChipCoin(chipAmount);
  await assertEqual(chipIconBtnStatus, true, 'chip icon is clicked');
}
// Validate the click on up button on onboarding screen
export async function testClickUpButton() {
  const doneBtnStatus = await clickUpBtn();
  console.log(doneBtnStatus);
  await assertEqual(doneBtnStatus, true, 'up button is  clicked');
}
// Validate the click on Down button on onboarding screen
export async function testClickDownButton() {
  const doneBtnStatus = await clickDownBtn();
  console.log(doneBtnStatus);
  await assertEqual(doneBtnStatus, true, 'Down button is  clicked');
}
// Validate the click on Confirm button on OTB Modal
export async function testClickConfirmBtn() {
  const confirmBtnStatus = await clickConfirmBtn();
  await assertEqual(confirmBtnStatus, true, 'Confirm button is  clicked');
}
// Validate the spinDaBottle Page Data after placing the first bet
export async function testSpinDaBottlePageDataAfterFirstRound(
  testData1,
  testData2,
  updatedBetAmount,
  sliderMinAmount,
) {
  const gamePageDataStatus = await gamePageData();
  await assertEqual(
    gamePageDataStatus.hamBurgerBtn,
    true,
    'hamBurger button is not available',
  );
  await assert(
    updatedBetAmount.includes(gamePageDataStatus.betAmountValue),
    'bet amount Value is not Correct',
  );
  await assertEqual(
    gamePageDataStatus.chatIcon,
    true,
    'chatIcon is not available',
  );
  await assertEqual(
    gamePageDataStatus.headerBackBtn,
    true,
    'headerBack button is not available',
  );
  await assertEqual(
    gamePageDataStatus.bannerImageAfterBet,
    null,
    'bannerImageAfterBet is not available',
  );
  await assert(
    gamePageDataStatus.walletAmount.includes(testData1.currency),
    'Currency is not available',
  );
  await assertEqual(
    gamePageDataStatus.gameName,
    testData2.gameName,
    'gameName is not available',
  );
  await assertEqual(
    gamePageDataStatus.betTxt,
    testData1.betTxt,
    'betTxt is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmount,
    true,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.newRoundBtn,
    testData1.newRoundBtn,
    'newRound button is  displayed',
  );
  if (platform === 'wap') {
    roundOffDigits = 1;
  } else {
    roundOffDigits = 2;
  }
  await assertEqual(
    gamePageDataStatus.sliderMinAmount,
    await formatNumber(sliderMinAmount, roundOffDigits),
    'sliderMinAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.sliderMaxAmount,
    testData2.sliderMaxAmount,
    'sliderMaxAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.clickUpBtn,
    testData2.clickUpBtn,
    'Up button is not available',
  );
  await assertEqual(
    gamePageDataStatus.clickDownBtn,
    testData2.clickDownBtn,
    'Down button is not available',
  );
}
// Validate the spinDaBottle game result page data
export async function testSpinDaBottlePageDataOnResultPage(
  testData1,
  testData2,
  btnName,
  walletAmount,
  betValue,
) {
  const gamePageDataStatus = await gamePageResultData();
  if (gamePageDataStatus.youWon === null) {
    const updatedWalletAmount = walletAmount - betValue;
    await assertEqual(
      gamePageDataStatus.walletAmount.replace(/[^0-9.]/g, ''),
      updatedWalletAmount,
      updatedWalletAmount + 'updatedWalletAmount',
    );
    await assertNotEqual(
      gamePageDataStatus.resultPageBtn,
      btnName.toUpperCase(),
      btnName + ' button is available',
    );
    await assertEqual(
      gamePageDataStatus.gameName,
      testData2.gameName,
      'gameName is not available',
    );
    await assertEqual(
      gamePageDataStatus.bannerImageAfterBet,
      true,
      'bannerImageAfterBet is not available',
    );
    await assertEqual(
      gamePageDataStatus.betAmount,
      null,
      'betAmount is not available',
    );
    await assert(
      gamePageDataStatus.walletAmount.includes(testData1.currency),
      'walletAmount is not available',
    );
    await assertEqual(
      gamePageDataStatus.clickUpBtn,
      testData2.clickUpBtn,
      'Up button is not available',
    );
    await assertEqual(
      gamePageDataStatus.trophyIcon,
      null,
      'trophyIcon is displayed',
    );
    await assertEqual(
      gamePageDataStatus.betLoseTxt,
      testData1.betLoseTxt + btnName.toUpperCase() + '!',
      'betLoseTxt is not available',
    );
  } else {
    const updatedWalletAmount = walletAmount + betValue;
    await assertEqual(
      gamePageDataStatus.walletAmount.replace(/[^0-9.]/g, ''),
      updatedWalletAmount,
      updatedWalletAmount + ' is not correct',
    );
    await assertEqual(
      parseFloat(
        gamePageDataStatus.successMsgBetAmount.replace(/[^0-9.]/g, ''),
      ),
      betValue * 2,
      gamePageDataStatus.successMsgBetAmount + ' is not correct',
    );
    await assertEqual(
      gamePageDataStatus.resultPageBtn,
      btnName.toUpperCase(),
      btnName + ' button is not available',
    );
    await assertEqual(
      gamePageDataStatus.betAmount,
      null,
      'betAmount is not available',
    );
    await assertEqual(
      gamePageDataStatus.gameName,
      testData2.gameName,
      'gameName is not available',
    );
    await assertEqual(
      gamePageDataStatus.bannerImageAfterBet,
      true,
      'bannerImageAfterBet is not available',
    );
    await assert(
      gamePageDataStatus.walletAmount.includes(testData1.currency),
      'Currency is not available',
    );
    await assertEqual(
      gamePageDataStatus.betTxt,
      null,
      'betTxt is not available',
    );
    await assertEqual(
      gamePageDataStatus.clickUpBtn,
      testData2.clickUpBtn,
      'Up button is not available',
    );
    await assertEqual(
      gamePageDataStatus.betLoseTxt,
      null,
      'betLoseTxt is not available',
    );
    await assertEqual(
      gamePageDataStatus.newRoundBtn,
      null,
      'newRound button is not displayed',
    );
    await assertEqual(
      gamePageDataStatus.trophyIcon,
      true,
      'trophyIcon is not displayed',
    );
    await assert(
      gamePageDataStatus.youWon.includes(testData1.youWon),
      'youWon is not available',
    );
  }
}
// Validate the click on New round button
export async function testClickNewRoundBtn() {
  const confirmBtnStatus = await clickNewRoundBtn();
  await assertEqual(confirmBtnStatus, true, 'New round button is  clicked');
}
// Validate the click on rebet button
export async function testClickRebetBtn() {
  const confirmBtnStatus = await clickRebetBtn();
  await assertEqual(confirmBtnStatus, true, 'rebet button is  clicked');
}
// Validate the click on click on Header Back button
export async function testClickHeaderBackBtn() {
  const headerBtnClickStatus = await clickHeaderBackBtn();
  await assertEqual(headerBtnClickStatus, true, 'HeaderBack button is clicked');
}
// Validate the click on click on Exit button
export async function testClickExitBtn() {
  const ExitBtnClickStatus = await clickExitBtn();
  await assertEqual(ExitBtnClickStatus, true, 'Exit button is clicked');
}
// Validate the Scroll Chip to Max Value
export async function testScrollChipToMaxValue(testData1) {
  const maxChipCoinValue = await scrollChipToMax();
  await assertEqual(
    maxChipCoinValue,
    testData1.sliderMaxAmountInDigit,
    'Max value is not set',
  );
}
// Validate the Scroll Chip to Min Value
export async function testScrollChipToMinValue(testData1) {
  const minChipCoinValue = await scrollChipToMin();
  await assertEqual(
    minChipCoinValue,
    testData1.sliderMinAmountInDigit,
    'Min value is not set',
  );
}
// Validate the SpinDaBottle game page data
export async function testSpinDaBottlePageData(testData1, testData2) {
  const gamePageDataStatus = await gamePageData();
  await assertEqual(
    gamePageDataStatus.hamBurgerBtn,
    true,
    'hamBurger button is not available',
  );
  await assertEqual(
    gamePageDataStatus.chatIcon,
    true,
    'chat icon is not available',
  );
  await assertEqual(
    gamePageDataStatus.headerBackBtn,
    true,
    'headerBack button is not available',
  );
  await assertEqual(
    gamePageDataStatus.bannerImageAfterBet,
    null,
    'banner image after the Bet is not available',
  );
  await assert(
    gamePageDataStatus.walletAmount.includes(testData1.currency),
    'wallet amount is not available',
  );
  await assertEqual(
    gamePageDataStatus.gameName,
    testData2.gameName,
    'game name is not available',
  );
  await assertEqual(
    gamePageDataStatus.betTxt,
    testData1.betTxt,
    'bet text is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmountValue,
    testData2.betAmount,
    'bet amount Value is not Correct',
  );
  await assertEqual(
    gamePageDataStatus.betAmount,
    true,
    'bet amount is not available',
  );
  await assertEqual(
    gamePageDataStatus.sliderMinAmount,
    testData2.sliderMinAmount,
    'sliderMinAmount is not correct',
  );
  await assertEqual(
    gamePageDataStatus.sliderMaxAmount,
    testData2.sliderMaxAmount,
    'sliderMaxAmount is not correct',
  );
  await assertEqual(
    gamePageDataStatus.clickUpBtn,
    testData2.clickUpBtn,
    'Up button is not available',
  );
  await assertEqual(
    gamePageDataStatus.clickDownBtn,
    testData2.clickDownBtn,
    'Down button is not available',
  );
}
// Validate the SpinDaBottle Page Data on Last bet
export async function testSpinDaBottlePageOnLastBet(
  testData1,
  testData2,
  btnName,
  walletAmount,
  betValue,
) {
  const gamePageDataStatus = await gamePageResultData();
  if (gamePageDataStatus.youWon === null) {
    const updatedWalletAmount = walletAmount - betValue;
    await assertEqual(
      gamePageDataStatus.walletAmount.replace(/[^0-9.]/g, ''),
      updatedWalletAmount,
      updatedWalletAmount + 'updatedWalletAmount',
    );
    await assertNotEqual(
      gamePageDataStatus.resultPageBtn,
      btnName.toUpperCase(),
      btnName + ' button is available',
    );
    await assertEqual(
      gamePageDataStatus.gameName,
      testData2.gameName,
      'gameName is not available',
    );
    await assertEqual(
      gamePageDataStatus.bannerImageAfterBet,
      true,
      'bannerImageAfterBet is not available',
    );
    await assertEqual(
      gamePageDataStatus.betAmount,
      null,
      'betAmount is not available',
    );
    await assert(
      gamePageDataStatus.walletAmount.includes(testData1.currency),
      'currency is not available',
    );
    await assertEqual(
      gamePageDataStatus.betTxt,
      null,
      'betTxt is not available',
    );
    await assertEqual(
      gamePageDataStatus.clickUpBtn,
      testData2.clickUpBtn,
      'Up button is not available',
    );
    await assertEqual(
      gamePageDataStatus.newRoundBtn,
      null,
      'newRound button is  displayed',
    );
    await assertEqual(
      gamePageDataStatus.betLoseTxt,
      testData1.betLoseTxt + btnName.toUpperCase() + '!',
      'betLoseTxt is not available',
    );
    await assertEqual(
      gamePageDataStatus.youWon,
      null,
      'You Won text is available',
    );
  } else {
    const updatedWalletAmount = walletAmount + betValue;
    await assertEqual(
      gamePageDataStatus.walletAmount.replace(/[^0-9.]/g, ''),
      updatedWalletAmount,
      updatedWalletAmount + 'updatedWalletAmount',
    );
    await assertEqual(
      parseFloat(
        gamePageDataStatus.successMsgBetAmount.replace(/[^0-9.]/g, ''),
      ),
      betValue * 2,
      gamePageDataStatus.successMsgBetAmount + ' is not correct',
    );
    await assertEqual(
      gamePageDataStatus.resultPageBtn,
      btnName.toUpperCase(),
      btnName + ' button is not available',
    );
    await assertEqual(
      gamePageDataStatus.betAmount,
      null,
      'betAmount is not available',
    );
    await assertEqual(
      gamePageDataStatus.gameName,
      testData2.gameName,
      'gameName is not available',
    );
    await assertEqual(
      gamePageDataStatus.bannerImageAfterBet,
      true,
      'bannerImageAfterBet is not available',
    );
    await assert(
      gamePageDataStatus.walletAmount.includes(testData1.currency),
      'currency is not available',
    );
    await assertEqual(
      gamePageDataStatus.betTxt,
      null,
      'betTxt is not available',
    );
    await assertEqual(
      gamePageDataStatus.clickUpBtn,
      testData2.clickUpBtn,
      'Up button is not available',
    );
    await assertEqual(
      gamePageDataStatus.betLoseTxt,
      null,
      'betLoseTxt is not available',
    );
    await assertEqual(
      gamePageDataStatus.newRoundBtn,
      null,
      'newRound button is not displayed',
    );
    await assert(
      gamePageDataStatus.youWon.includes(testData1.youWon),
      'youWon is not available',
    );
  }
}
// Validate the spinDaBottle Page Data on when wallet amount is less then min bet amount
export async function testSpinDaBottlePageDataWhenWalletAmountIsLessThenMinBetAmount(
  testData1,
  testData2,
  testData3,
) {
  const gamePageDataStatus = await gamePageData();
  await assert(
    gamePageDataStatus.walletAmount.includes(testData1.currency),
    'Currency label is not correct',
  );
  await assert(
    gamePageDataStatus.walletAmount.includes(testData2.walletAmount),
    'walletAmount is not correct',
  );
  await assertEqual(
    gamePageDataStatus.gameName,
    testData3.gameName,
    'gameName is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmount,
    true,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmountValue,
    testData2.betAmount,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.sliderMinAmount,
    testData2.sliderMinAmount,
    'sliderMinAmount is not correct',
  );
  await assertEqual(
    gamePageDataStatus.sliderMaxAmount,
    testData2.sliderMaxAmount,
    'sliderMaxAmount is not correct',
  );
  await assert(
    gamePageDataStatus.addMoneyBtn.includes(testData1.addMoneyBtn),
    'addMoney button is not available',
  );
  await assertEqual(
    gamePageDataStatus.walletWarningMsg,
    testData1.walletWarningMsg,
    'walletWarningMsg is not available',
  );
}
export async function testCheckChipState(maxChipValue) {
  const chipStatus = await checkChipState(maxChipValue);
  for (let i = 0; i < chipStatus.length; i++) {
    await assertEqual(
      chipStatus[i].chipState,
      true,
      chipStatus[i].chipValue + 'Chip is not disabled',
    );
  }
}
// Validate the spinDaBottle Page Data on when wallet amount is 80% of max bet amount
export async function testSpinDaBottlePageDataWhenWalletAmount80PercentageOfMaxBet(
  testData1,
  testData2,
  testData3,
) {
  const gamePageDataStatus = await gamePageData();
  await assert(
    gamePageDataStatus.walletAmount.includes(testData1.walletAmountLbl),
    'walletAmount is not available',
  );
  await assert(
    gamePageDataStatus.walletAmount.includes(testData2.walletAmount),
    'walletAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.gameName,
    testData3.gameName,
    'gameName is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmount,
    true,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmountValue,
    testData2.betAmount,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.sliderMinAmount,
    testData2.sliderMinAmount,
    'sliderMinAmount is not correct',
  );
  await assertEqual(
    gamePageDataStatus.sliderMaxAmount,
    testData2.sliderMaxAmount,
    'sliderMaxAmount is not correct',
  );
  await assert(
    gamePageDataStatus.addMoneyBtn.includes(testData1.addMoneyBtn),
    'addMoney button is not available',
  );
  if (platform === 'wap') {
    await assertEqual(
      gamePageDataStatus.walletWarningMsg,
      '',
      'walletWarningMsg is not available',
    );
  } else {
    await assertEqual(
      gamePageDataStatus.walletWarningMsg,
      null,
      'walletWarningMsg is not available',
    );
  }
}
// Validate the spinDaBottle Page Data on when wallet amount is greater than max bet amount
export async function testSpinDaBottlePageDataWhenWalletAmountLessThanDefaultBet(
  testData1,
  testData2,
  testData3,
) {
  const gamePageDataStatus = await gamePageData();
  await assert(
    gamePageDataStatus.walletAmount.includes(testData1.walletAmountLbl),
    'walletAmount is not available',
  );
  await assert(
    gamePageDataStatus.walletAmount.includes(testData2.walletAmount),
    'walletAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.gameName,
    testData3.gameName,
    'gameName is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmount,
    true,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.betAmountValue,
    testData2.betAmount,
    'betAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.sliderMinAmount,
    testData2.sliderMinAmount,
    'sliderMinAmount is not correct',
  );
  await assertEqual(
    gamePageDataStatus.sliderMaxAmount,
    testData2.sliderMaxAmount,
    'sliderMaxAmount is not correct',
  );
  await assert(
    gamePageDataStatus.addMoneyBtn.includes(testData1.addMoneyBtn),
    'addMoney button is not available',
  );
  if (platform === 'wap') {
    await assertEqual(
      gamePageDataStatus.walletWarningMsg,
      '',
      'walletWarningMsg is not available',
    );
  } else {
    await assertEqual(
      gamePageDataStatus.walletWarningMsg,
      null,
      'walletWarningMsg is not available',
    );
  }
}
