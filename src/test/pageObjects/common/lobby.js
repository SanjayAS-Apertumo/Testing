// const action = require('../../../../utils/baseActionLibrary.js');
import {
  waitForDisplayed,
  getText,
  getElementCount,
  findElements,
  click,
  scrollIntoView,
  waitForClickable,
  scrollIntoYAxis,
} from '../../../utils/baseActionLibrary.js';
import { locatorHelper } from '../../../utils/locatorHelper.js';
import { androidLocatorPath } from '../../../utils/constant.js';
import { spinDaBottle } from '../../locators/spinDaBottle.js';

const platform = global.argsMap['platform'];

export async function isInitialized() {
  // Validate the lobby page is launched and get the lobby header.
  await waitForDisplayed(locatorHelper(platform, 'lobby', 'lobbyHeader'));
  await waitForDisplayed(locatorHelper(platform, 'lobby', 'notificationIcon'));
  await waitForDisplayed(locatorHelper(platform, 'lobby', 'bannerImg'));
  const res = {
    lobbyHeader: await waitForDisplayed(
      locatorHelper(platform, 'lobby', 'lobbyHeader'),
    ),
    lobbyTitle: await getText(locatorHelper(platform, 'lobby', 'lobbyTitle')),
    bannerImg:
      (await getElementCount(locatorHelper(platform, 'lobby', 'bannerImg'))) > 0
        ? await waitForDisplayed(locatorHelper(platform, 'lobby', 'bannerImg'))
        : null,
    notificationIcon:
      (await getElementCount(
        locatorHelper(platform, 'lobby', 'notificationIcon'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'lobby', 'notificationIcon'),
          )
        : null,
  };
  return res;
}

export async function lobbyPageData() {
  // TODO: will update this page content
  await waitForDisplayed(locatorHelper(platform, 'lobby', 'lobbyHeader'));
  const res = {
    lobbyHeader:
      (await getElementCount(locatorHelper(platform, 'lobby', 'lobbyHeader'))) >
      0
        ? await waitForDisplayed(
            locatorHelper(platform, 'lobby', 'lobbyHeader'),
          )
        : null,
    loginBtn:
      (await getElementCount(locatorHelper(platform, 'lobby', 'loginBtn'))) > 0
        ? await getText(locatorHelper(platform, 'lobby', 'loginBtn'))
        : null,
    registerBtn:
      (await getElementCount(locatorHelper(platform, 'lobby', 'registerBtn'))) >
      0
        ? await getText(locatorHelper(platform, 'lobby', 'registerBtn'))
        : null,
    bannerImg:
      (await getElementCount(locatorHelper(platform, 'lobby', 'bannerImg'))) > 0
        ? await waitForDisplayed(locatorHelper(platform, 'lobby', 'bannerImg'))
        : null,
    notificationIcon:
      (await getElementCount(
        locatorHelper(platform, 'lobby', 'notificationIcon'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'lobby', 'notificationIcon'),
          )
        : null,
    notificationMsg: await waitForDisplayed(
      locatorHelper(platform, 'lobby', 'notificationMsg'),
    ),
    walletBalance:
      (await getElementCount(
        locatorHelper(platform, 'lobby', 'walletBalance'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'lobby', 'walletBalance'),
          )
        : null,
  };
  return res;
}

// TODO not used currently
export async function clickGameCategoryList(
  categoryNameAvailable, // Getting the game category
) {
  const lobbyCategoryListCount = await findElements(
    locatorHelper(platform, 'lobby', 'lobbyCategoryList'),
  );
  const obj = [];
  var i = 0;

  if (platform === 'android') {
    // TODO
  } else {
    for (const listOfCategory of lobbyCategoryListCount) {
      await browser.pause(500);
      await scrollIntoView(listOfCategory);
      const categoryName = await listOfCategory.$(
        ".//*[@data-cms-page='sg_lobby_categories']",
      );
      const gameCategoryName = await getText(categoryName);
      if (categoryNameAvailable) {
        if ((await getText(categoryName)) === categoryNameAvailable) {
          //  await scrollIntoView(listOfCategory)
          await click(listOfCategory);
          await browser.pause(2000);
          const gameCountInCategory = await getElementCount(
            ".//div[contains(@class,'lobby-home')]/div[not(contains(@style,'display: none'))]//div[contains(@class,'row')]//*[contains(@class,'list-item')]",
          );
          obj[i] = {
            categoryName: gameCategoryName,
            gameCountInCategory: gameCountInCategory,
          };
          i++;
          break;
        }
      } else {
        await click(listOfCategory);
        await browser.pause(2000);
        const gameCountInCategory = await getElementCount(
          ".//div[contains(@class,'lobby-home')]/div[not(contains(@style,'display: none'))]//div[contains(@class,'row')]//*[contains(@class,'list-item')]",
        );

        obj[i++] = {
          categoryName: gameCategoryName,
          gameCountInCategory: gameCountInCategory,
        };
      }
    }
  }
  return obj;
}

// TODO not used currently
export async function getGameCategoryList() {
  // Getting the game category
  const lobbyCategoryListCount = await findElements(
    locatorHelper(platform, 'lobby', 'lobbyCategoryList'),
  );
  const obj = [];
  var i = 0;

  if (platform === 'android') {
    // TODO
  } else {
    for (const listOfCategory of lobbyCategoryListCount) {
      await browser.pause(500);
      await scrollIntoView(listOfCategory);
      const categoryName = await listOfCategory.$(
        ".//*[@data-cms-page='sg_lobby_categories']",
      );
      const gameCategoryName = await getText(categoryName);
      await click(listOfCategory);
      await browser.pause(2000);
      const gameCountInCategory = await getElementCount(
        ".//div[contains(@class,'lobby-home')]/div[not(contains(@style,'display: none'))]//div[contains(@class,'row')]//*[contains(@class,'list-item')]",
      );

      obj[i++] = {
        categoryName: gameCategoryName,
        gameCountInCategory: gameCountInCategory,
      };
    }
  }
  return obj;
}

// Validate the click on a Game
export async function clickGame(gameNameExist) {
  console.log(gameNameExist);
  let res;
  if (platform === 'android') {
    await browser.pause(2000);
    let found = false;
    while (!found) {
      const gameListCount = await findElements(
        locatorHelper(platform, 'lobby', 'gameList'),
      );
      for (var listOfGame of gameListCount) {
        var gameName = await listOfGame.$(androidLocatorPath + 'game_name"]');
        console.log(gameName);
        if ((await getText(gameName)) === gameNameExist) {
          res = await click(listOfGame);
          found = true;
          break;
        }
        var location = await gameListCount[
          gameListCount.length - 1
        ].getLocation();
      }

      await scrollIntoYAxis(location);
    }

    await browser.pause(1000); // Adjust the pause duration as needed
    return res;
  } else {
    let found = false;
    while (!found) {
      const gameListCount = await findElements(
        locatorHelper(platform, 'lobby', 'gameList'),
      );
      for (const listOfGame of gameListCount) {
        gameName = await listOfGame.$(
          locatorHelper(platform, 'lobby', 'gameNameList'),
        );
        console.log(await getText(gameName));
        if ((await getText(gameName)) === gameNameExist) {
          res = await click(gameName);
          found = true;
          break;
        }
      }
      await scrollIntoView(gameName);
      await browser.pause(1000); // Adjust the pause duration as needed
    }
    return res;
  }
}

export async function clickLoginBtn() {
  // Click on login button from lobby header
  await waitForClickable(locatorHelper(platform, 'lobby', 'loginBtn'), 10000);
  return await click(locatorHelper(platform, 'lobby', 'loginBtn'));
}

export async function clickBackIcon() {
  // Click on back button from lobby header
  await waitForDisplayed(locatorHelper(platform, 'lobby', 'bannerImg'));
  await browser.pause(5000);
  await waitForDisplayed(locatorHelper(platform, 'lobby', 'backIcon'));
  await waitForClickable(locatorHelper(platform, 'lobby', 'backIcon'));
  return await click(locatorHelper(platform, 'lobby', 'backIcon'));
}

export async function clickDoneBtnOnLobby() {
  // Validate the click on Next button
  await waitForClickable(locatorHelper(platform, 'common', 'nextBtn'));
  return await click(locatorHelper(platform, 'common', 'nextBtn'));
}
