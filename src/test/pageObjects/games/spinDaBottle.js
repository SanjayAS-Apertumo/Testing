import {
  waitForDisplayed,
  getText,
  click,
  scrollIntoView,
  findElements,
  scrollIntoXAxis,
} from '../../../utils/baseActionLibrary.js';
import { locatorHelper } from '../../../utils/locatorHelper.js';

const platform = global.argsMap['platform'];

// Validate the click on chip coins
export async function clickChipCoin(chipAmount) {
  var chipStatus, res;
  let found = false;
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'common', 'chatIcon'));
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
  return chipStatus;
}

// Validate the click on Up button
export async function clickUpBtn() {
  console.log(platform);
  const btnClicked = await click(
    locatorHelper(platform, 'spinDaBottle', 'upBtn'),
  );
  console.log(btnClicked);
}
