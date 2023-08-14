import {
  waitForDisplayed,
  getText,
  click,
  scrollIntoView,
  findElements,
  scrollIntoXAxis,
  dragAndDrop,
  getElementCount,
  isEnabled,
  getLocation,
  scrollBetweenTwoElement,
  getAttribute,
} from '../../../utils/baseActionLibrary.js';
import { locatorHelper } from '../../../utils/locatorHelper.js';
import {
  testClickExitBtn,
  testClickHeaderBackBtn,
  testClickNewRoundBtn,
  testClickRebetBtn,
} from '../../testCases/games/spinDaBottle.js';
testClickNewRoundBtn;
testClickRebetBtn;
testClickHeaderBackBtn;
testClickExitBtn;
const platform = global.argsMap['platform'];

// Validate the click on chip coins
export async function clickChipCoin(chipAmount) {
  var chipStatus, res;
  let found = false;
  await browser.pause(5000);
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'availableChipList'),
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
  chipStatus = {
    buttonClick: res,
  };
  console.log(chipStatus.buttonClick);
  return chipStatus.buttonClick;
}
// Validate the click on Up button
export async function clickUpBtn() {
  console.log(platform);
  const upBtnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'upBtn'),
  );
  return upBtnClicked;
}
// Validate the click on down button
export async function clickDownBtn() {
  console.log(platform);
  const btnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'downBtn'),
  );
  console.log(btnClicked);
  return btnClicked;
}
// Validate the click on confirm button
export async function clickConfirmBtn() {
  await browser.pause(5000);
  console.log(platform);
  const btnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'confirmBtn'),
  );
  console.log(btnClicked);
}
// Validate the click on New round  button
export async function clickNewRoundBtn() {
  await browser.pause(3000);
  console.log(platform);
  const NewRoundBtnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'NewRoundBtn'),
  );
  console.log(NewRoundBtnClicked);
  return NewRoundBtnClicked;
}
// Validate the click on rebet button
export async function clickRebetBtn() {
  await browser.pause(3000);
  console.log(platform);
  const RebetBtnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'RebetBtn'),
  );
  console.log(RebetBtnClicked);
  return RebetBtnClicked;
}
// Validate the click on rebet button
export async function clickHeaderBackBtn() {
  await browser.pause(3000);
  console.log(platform);
  const headerBackBtnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'HeaderBackButton'),
  );
  console.log(headerBackBtnClicked);
  return headerBackBtnClicked;
}
// Validate the click on rebet button
export async function clickExitBtn() {
  await browser.pause(3000);
  console.log(platform);
  const ExitBtnBtnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'ExitBtn'),
  );
  console.log(ExitBtnBtnClicked);
  return ExitBtnBtnClicked;
}
// Validate the scroll to max value
export async function scrollChipToMax() {
  await dragAndDrop(
    locatorHelper(platform, 'common', 'sliderChip'),
    locatorHelper(platform, 'common', 'sliderMaxAmount'),
  );
  await browser.pause(5000);

  return await getText(locatorHelper(platform, 'common', 'betAmount'));
}
// Validate the scroll to min value
export async function scrollChipToMin() {
  await dragAndDrop(
    locatorHelper(platform, 'common', 'sliderChip'),
    locatorHelper(platform, 'common', 'sliderMinAmount'),
  );
  return await getText(locatorHelper(platform, 'common', 'betAmount'));
}
// Get the data of spinDaBottle page
export async function gamePageData() {
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'common', 'chatIcon'));
  await waitForDisplayed(platform, 'spinDaBottle', 'bannerImageAfterBet');
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
    clickUpBtn:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'upBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'spinDaBottle', 'upBtn'))
        : null,
    clickDownBtn:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'downBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'spinDaBottle', 'downBtn'))
        : null,
    bannerImageAfterBet:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'bannerImageAfterBet'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'spinDaBottle', 'bannerImageAfterBet'),
          )
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
  };
  return gamePageDataStatus;
}
// Get the data of spinDaBottle Result page
export async function gamePageResultData() {
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'spinDaBottle', 'results'));
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'sliderMaxAmount'),
    10000,
    true,
  );
  await waitForDisplayed(platform, 'spinDaBottle', 'bannerImageAfterBet');
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
    clickUpBtn:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'upBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'spinDaBottle', 'upBtn'))
        : null,
    clickDownBtn:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'downBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'spinDaBottle', 'downBtn'))
        : null,
    bannerImageAfterBet:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'bannerImageAfterBet'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'spinDaBottle', 'bannerImageAfterBet'),
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
    addMoneyBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'addMoneyBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'addMoneyBtn'))
        : null,
    resultPageBtn:
      (await getElementCount(
        locatorHelper(platform, 'spinDaBottle', 'results'),
      )) > 0
        ? await getText(locatorHelper(platform, 'spinDaBottle', 'results'))
        : null,
  };
  return gamePageResultDataStatus;
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
