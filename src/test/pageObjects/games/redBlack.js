import {
  waitForDisplayed,
  getText,
  getElementCount,
  click,
  waitForEnabled,
  dragAndDrop,
  scrollIntoView,
  findElements,
  scrollIntoXAxis,
  getAttribute,
  isEnabled,
  getLocation,
  scrollBetweenTwoElement,
} from '../../../utils/baseActionLibrary.js';
import { locatorHelper } from '../../../utils/locatorHelper.js';

const platform = global.argsMap['platform'];

// Get the data of red-black page
export async function gamePageData() {
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'common', 'chatIcon'));
  await waitForDisplayed(locatorHelper(platform, 'redBlack', 'roundCount'));
  const gamePageDataStatus = {
    hamBurgerBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'hamBurgerBtn'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'hamBurgerBtn'),
          )
        : null,
    chatIcon:
      (await getElementCount(locatorHelper(platform, 'common', 'chatIcon'))) > 0
        ? await waitForDisplayed(locatorHelper(platform, 'common', 'chatIcon'))
        : null,
    gameName:
      (await getElementCount(locatorHelper(platform, 'common', 'gameName'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'gameName'))
        : null,
    walletAmount:
      (await getElementCount(
        locatorHelper(platform, 'common', 'walletAmount'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'walletAmount'))
        : null,
    pay2X:
      (await getElementCount(locatorHelper(platform, 'common', 'pay2X'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'pay2X'))
        : null,
    cardFaceDown:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'cardFaceDown'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'redBlack', 'cardFaceDown'),
          )
        : null,
    cardFaceUp:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'cardFaceUp'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'redBlack', 'cardFaceUp'),
          )
        : null,
    betTxt:
      (await getElementCount(locatorHelper(platform, 'common', 'betTxt'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'betTxt'))
        : null,
    betAmountValue:
      (await getElementCount(locatorHelper(platform, 'common', 'betAmount'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'betAmount'))
        : null,
    betAmount:
      (await getElementCount(locatorHelper(platform, 'common', 'betAmount'))) >
      0
        ? await waitForDisplayed(locatorHelper(platform, 'common', 'betAmount'))
        : null,
    sliderMinAmount:
      (await getElementCount(
        locatorHelper(platform, 'common', 'sliderMinAmount'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'sliderMinAmount'))
        : null,
    sliderMaxAmount:
      (await getElementCount(
        locatorHelper(platform, 'common', 'sliderMaxAmount'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'sliderMaxAmount'))
        : null,
    sliderChip:
      (await getElementCount(locatorHelper(platform, 'common', 'sliderChip'))) >
      0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'sliderChip'),
          )
        : null,
    minTxtLbl:
      (await getElementCount(locatorHelper(platform, 'common', 'minTxtLbl'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'minTxtLbl'))
        : null,
    maxTxtLbl:
      (await getElementCount(locatorHelper(platform, 'common', 'maxTxtLbl'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'maxTxtLbl'))
        : null,
    redBtn:
      (await getElementCount(locatorHelper(platform, 'redBlack', 'redBtn'))) > 0
        ? await getText(locatorHelper(platform, 'redBlack', 'redBtn'))
        : null,
    blackBtn:
      (await getElementCount(locatorHelper(platform, 'redBlack', 'blackBtn'))) >
      0
        ? await getText(locatorHelper(platform, 'redBlack', 'blackBtn'))
        : null,
    headerBackBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'headerBackBtn'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'headerBackBtn'),
          )
        : null,
    newRoundBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'newRoundBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'newRoundBtn'))
        : null,

    previousBetOpenCards:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'previousBetOpenCards'),
      )) > 0
        ? await getElementCount(
            locatorHelper(platform, 'redBlack', 'previousBetOpenCards'),
          )
        : null,
    addMoneyBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'addMoneyBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'addMoneyBtn'))
        : null,
    walletWarningMsg:
      (await getElementCount(
        locatorHelper(platform, 'common', 'walletWarningMsg'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'walletWarningMsg'))
        : null,
    roundCount:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'roundCount'),
      )) > 0
        ? await getElementCount(
            locatorHelper(platform, 'redBlack', 'roundCount'),
          )
        : null,
  };
  return gamePageDataStatus;
}

// Get the data of red-black Result page
export async function gamePageResultData() {
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'redBlack', 'resultPageBtn'));
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'sliderMaxAmount'),
    10000,
    true,
  );
  await waitForDisplayed(platform, 'redBlack', 'bannerImageAfterBet');
  const gamePageResultDataStatus = {
    gameName:
      (await getElementCount(locatorHelper(platform, 'common', 'gameName'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'gameName'))
        : null,
    walletAmount:
      (await getElementCount(
        locatorHelper(platform, 'common', 'walletAmount'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'walletAmount'))
        : null,
    cardFaceDown:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'cardFaceDown'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'redBlack', 'cardFaceDown'),
          )
        : null,
    cardFaceUp:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'cardFaceUp'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'redBlack', 'cardFaceUp'),
          )
        : null,
    betTxt:
      (await getElementCount(locatorHelper(platform, 'common', 'betTxt'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'betTxt'))
        : null,
    betAmountValue:
      (await getElementCount(locatorHelper(platform, 'common', 'betAmount'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'betAmount'))
        : null,
    betAmount:
      (await getElementCount(locatorHelper(platform, 'common', 'betAmount'))) >
      0
        ? await waitForDisplayed(locatorHelper(platform, 'common', 'betAmount'))
        : null,
    redBtn:
      (await getElementCount(locatorHelper(platform, 'redBlack', 'redBtn'))) > 0
        ? await getText(locatorHelper(platform, 'redBlack', 'redBtn'))
        : null,
    blackBtn:
      (await getElementCount(locatorHelper(platform, 'redBlack', 'blackBtn'))) >
      0
        ? await getText(locatorHelper(platform, 'redBlack', 'blackBtn'))
        : null,
    bannerImageAfterBet:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'bannerImageAfterBet'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'redBlack', 'bannerImageAfterBet'),
          )
        : null,
    youWon:
      (await getElementCount(locatorHelper(platform, 'common', 'youWon'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'youWon'))
        : null,
    trophyIcon:
      (await getElementCount(locatorHelper(platform, 'common', 'trophyIcon'))) >
      0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'trophyIcon'),
          )
        : null,
    successMsgBetAmount:
      (await getElementCount(
        locatorHelper(platform, 'common', 'successMsgBetAmount'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'successMsgBetAmount'),
          )
        : null,
    playNextHand:
      (await getElementCount(
        locatorHelper(platform, 'common', 'playNextHand'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'playNextHand'))
        : null,
    newRoundBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'newRoundBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'newRoundBtn'))
        : null,
    betLoseTxt:
      (await getElementCount(locatorHelper(platform, 'common', 'betLoseTxt'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'betLoseTxt'))
        : null,
    playAnotherRoundBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'playAnotherRoundBtn'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'playAnotherRoundBtn'),
          )
        : null,
    previousBetOpenCards:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'previousBetOpenCards'),
      )) > 0
        ? await getElementCount(
            locatorHelper(platform, 'redBlack', 'previousBetOpenCards'),
          )
        : null,
    addMoneyBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'addMoneyBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'addMoneyBtn'))
        : null,
    resultPageBtn:
      (await getElementCount(
        locatorHelper(platform, 'redBlack', 'resultPageBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'redBlack', 'resultPageBtn'))
        : null,
  };
  return gamePageResultDataStatus;
}

// Validate the click on chip coins
export async function clickChipCoin(chipAmount) {
  var chipStatus, res;
  let found = false;
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'common', 'chatIcon'));
  await waitForDisplayed(locatorHelper(platform, 'redBlack', 'roundCount'));
  const betAmountValue = await getText(
    locatorHelper(platform, 'common', 'betAmount'),
  );
  const availableChipCount = await findElements(
    locatorHelper(platform, 'common', 'availableChipList'),
  );
  if (platform === 'android') {
    while (found === false) {
      for (var chip of availableChipCount) {
        if ((await chip.isExisting()) === true) {
          if ((await chip.getText()) === chipAmount) {
            res = await click(chip);
            found = true;
            break;
          }
        }
        var location = await chip.getLocation();
      }
      await scrollIntoXAxis(location);
    }
  } else {
    for (const chip of availableChipCount) {
      await scrollIntoView(chip);
      if ((await getText(chip)) === chipAmount) {
        res = await click(chip);
        break;
      }
    }
  }
  var betAmountValueNew = await getText(
    locatorHelper(platform, 'common', 'betAmount'),
  );
  chipStatus = {
    buttonClick: res,
    betValueOld: betAmountValue,
    betAmountValueNew: betAmountValueNew,
    betValueDifference: betAmountValueNew - betAmountValue,
  };
  return chipStatus;
}

// Validate the click on red button
export async function clickRedBtn() {
  await browser.pause(2000);
  if (platform === 'wap') {
    await waitForEnabled(locatorHelper(platform, 'redBlack', 'redBtn'));
  }
  const btnStatus = {
    btnClicked: await click(locatorHelper(platform, 'redBlack', 'redBtn')),
    buttonName: 'Red',
  };
  return btnStatus;
}

// Validate the click on black button
export async function clickBlackBtn() {
  await browser.pause(2000);
  if (platform === 'wap') {
    await waitForEnabled(locatorHelper(platform, 'redBlack', 'blackBtn'));
  }
  const btnStatus = {
    btnClicked: await click(locatorHelper(platform, 'redBlack', 'blackBtn')),
    buttonName: 'Black',
  };
  return btnStatus;
}

// Validate the scroll to min value
export async function scrollChipToMin() {
  await dragAndDrop(
    locatorHelper(platform, 'common', 'sliderChip'),
    locatorHelper(platform, 'common', 'sliderMinAmount'),
  );
  return await getText(locatorHelper(platform, 'common', 'betAmount'));
}

// Validate the scroll to max value
export async function scrollChipToMax() {
  await dragAndDrop(
    locatorHelper(platform, 'common', 'sliderChip'),
    locatorHelper(platform, 'common', 'sliderMaxAmount'),
  );
  return await getText(locatorHelper(platform, 'common', 'betAmount'));
}

// Validate the Chip State
export async function checkChipState(maxChipValue) {
  const chipStatus = [];
  var i = 0;
  let found = false;
  await browser.pause(2000);
  if (platform === 'android') {
    while (!found) {
      var j = 0;
      var locationOfLastChipInTheList, locationOfFirstChip;
      const availableChipCount = await findElements(
        locatorHelper(platform, 'common', 'availableChipList'),
      );
      for (var chip of availableChipCount) {
        if (j === 0) {
          locationOfFirstChip = await getLocation(chip);
        }
        j++;
        if ((await chip.isExisting()) === true) {
          chipStatus[i++] = {
            chipValue: await getText(chip),
            chipState: await isEnabled(chip),
          };
        }
        // Need to update the logic for scrolling last value
        if ((await getText(chip)) === maxChipValue) {
          found = true;
          break;
        }
        if (availableChipCount.length - 1 === j) {
          locationOfLastChipInTheList = await getLocation(chip);
        }
      }
      // Move the chip from last chip to first chip of the list
      await scrollBetweenTwoElement(
        locationOfLastChipInTheList,
        locationOfFirstChip,
      );
    }
  } else {
    const availableChipCount = await findElements(
      locatorHelper(platform, 'common', 'availableChipList'),
    );
    for (const chip of availableChipCount) {
      await scrollIntoView(chip);
      const classValue = await getAttribute(chip, 'class');
      chipStatus[i++] = {
        chipValue: await getText(chip),
        chipState: await classValue.includes('disabled'),
      };
    }
  }
  return chipStatus;
}
