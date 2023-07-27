import {
  gamePageData,
  clickRedBtn,
  clickBlackBtn,
  clickChipCoin,
  scrollChipToMin,
  scrollChipToMax,
  gamePageResultData,
  checkChipState,
} from '../../pageObjects/games/redBlack.js';
import {
  assertEqual,
  assertNotEqual,
  assertTest as assert,
} from '../../../utils/baseAssertionLibrary.js';
import { formatNumber } from '../../../utils/numberFormat.js';

var roundOffDigits;
const platform = global.argsMap['platform'];

// Validate the RedBlack game page data
export async function testRedBlackPageData(testData1, testData2, roundCount) {
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
    gamePageDataStatus.cardFaceDown,
    true,
    'cardFace down position is not correct',
  );
  await assertEqual(
    gamePageDataStatus.cardFaceUp,
    null,
    'cardFace up position is displayed',
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
    gamePageDataStatus.pay2X,
    testData1.pay2X,
    'pay2X is not available',
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
    gamePageDataStatus.redBtn,
    testData2.redBtn,
    'red button is not available',
  );
  await assertEqual(
    gamePageDataStatus.blackBtn,
    testData2.blackBtn,
    'black button is not available',
  );
  if (platform === 'wap') {
    await assertEqual(
      gamePageDataStatus.roundCount,
      roundCount,
      'roundCount is not correct',
    );
  }
}

// Validate the RedBlack game result page data
export async function testRedBlackPageDataOnResultPage(
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
      gamePageDataStatus.cardFaceDown,
      null,
      'cardFace down position is not correct',
    );
    await assertEqual(
      gamePageDataStatus.cardFaceUp,
      true,
      'cardFace up position is not correct',
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
      gamePageDataStatus.redBtn,
      null,
      'red button is not available',
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
    await assertEqual(gamePageDataStatus.youWon, null, 'youWon is available');
    await assertEqual(
      gamePageDataStatus.playNextHand,
      testData1.playNextHand,
      'playNextHand is not displayed',
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
      gamePageDataStatus.cardFaceDown,
      null,
      'cardFace down position is not correct',
    );
    await assertEqual(
      gamePageDataStatus.cardFaceUp,
      true,
      'cardFace up position is not correct',
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
      gamePageDataStatus.redBtn,
      null,
      'red button is not available',
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
    await assertEqual(
      gamePageDataStatus.playNextHand,
      testData1.playNextHand,
      'playNextHand is not displayed',
    );
  }
}

// Validate the RedBlack Page Data after placing the first bet
export async function testRedBlackPageDataAfterFirstRound(
  testData1,
  testData2,
  roundCount,
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
    gamePageDataStatus.cardFaceDown,
    true,
    'cardFace down position is not correct',
  );
  await assertEqual(
    gamePageDataStatus.cardFaceUp,
    null,
    'cardFace up position is displayed',
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
    gamePageDataStatus.pay2X,
    testData1.pay2X,
    'pay2X is not available',
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
    /* Update required when issue https://opennetltd.atlassian.net/browse/SGI-3234 is fixed */

    await formatNumber(sliderMinAmount, roundOffDigits),
    'sliderMinAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.sliderMaxAmount,
    testData2.sliderMaxAmount,
    'sliderMaxAmount is not available',
  );
  await assertEqual(
    gamePageDataStatus.redBtn,
    testData2.redBtn,
    'red button is not available',
  );
  await assertEqual(
    gamePageDataStatus.blackBtn,
    testData2.blackBtn,
    'black button is not available',
  );
  await assertEqual(
    gamePageDataStatus.previousBetOpenCards,
    roundCount - 1,
    'open card count is not correct',
  );
  if (platform === 'wap') {
    await assertEqual(
      gamePageDataStatus.roundCount,
      roundCount,
      'roundCount is not correct',
    );
  }
}

// Validate the RedBlack Page Data on Last bet
export async function testRedBlackPageOnLastBet(
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
      gamePageDataStatus.cardFaceDown,
      null,
      'cardFace down position is not correct',
    );
    await assertEqual(
      gamePageDataStatus.cardFaceUp,
      true,
      'cardFace up position is not correct',
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
      gamePageDataStatus.redBtn,
      null,
      'red button is not available',
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
    await assertEqual(
      gamePageDataStatus.playAnotherRoundBtn,
      testData1.playAnotherRoundBtn,
      'playAnotherRound button is not displayed',
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
      gamePageDataStatus.cardFaceDown,
      null,
      'cardFace down position is not correct',
    );
    await assertEqual(
      gamePageDataStatus.cardFaceUp,
      true,
      'cardFace up position is not correct',
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
      gamePageDataStatus.redBtn,
      null,
      'red button is not available',
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
    await assertEqual(
      gamePageDataStatus.playAnotherRoundBtn,
      testData1.playAnotherRoundBtn,
      'playAnotherRound button is not displayed',
    );
  }
}

// Validate the RedBlack Page Data on when wallet amount is less then min bet amount
export async function testRedBlackPageDataWhenWalletAmountIsLessThenMinBetAmount(
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

// Validate the RedBlack Page Data on when wallet amount is 80% of max bet amount
export async function testRedBlackPageDataWhenWalletAmount80PercentageOfMaxBet(
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

// Validate the RedBlack Page Data on when wallet amount is greater than max bet amount
export async function testRedBlackPageDataWhenWalletAmountLessThanDefaultBet(
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

// Validate the Click on Red Button
export async function testClickRedBtn() {
  const redBtnClickStatus = await clickRedBtn();
  await assertEqual(
    redBtnClickStatus.btnClicked,
    true,
    'Red button is not clicked',
  );
  return redBtnClickStatus.buttonName;
}

// Validate the Click on Black Button
export async function testClickBlackBtn() {
  const blackBtnClickStatus = await clickBlackBtn();
  await assertEqual(
    blackBtnClickStatus.btnClicked,
    true,
    'Black button is not clicked',
  );
  return blackBtnClickStatus.buttonName;
}

// Validate the Click on chip coin Button
export async function testClickChipCoinBtn(testData1) {
  const chipCoinClickStatus = await clickChipCoin(testData1.chipValue);
  await assertEqual(
    chipCoinClickStatus.betValueDifference,
    testData1.chipValue,
    'Chip value is not added in bet amount',
  );
}

// Validate the Scroll Chip to Min Value
export async function testScrollChipToMinValue(testData1) {
  const minChipCoinValue = await scrollChipToMin();
  await assertEqual(
    minChipCoinValue,
    testData1.sliderMinAmountInDigit,
    'Min Value is not set',
  );
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

export async function testRedBlackPageDataForNewRound(
  testData1,
  testData2,
  roundCount,
) {
  const gamePageDataStatus = await gamePageData();
  await assertEqual(
    gamePageDataStatus.cardFaceDown,
    true,
    'cardFace down position is not correct',
  );
  await assertEqual(
    gamePageDataStatus.cardFaceUp,
    null,
    'cardFace up position is displayed',
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
    gamePageDataStatus.betAmountValue,
    testData2.betAmount,
    'bet amount Value is not Correct',
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

  if (platform === 'wap') {
    await assertEqual(
      gamePageDataStatus.roundCount,
      roundCount,
      'roundCount is not correct',
    );
  }
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
