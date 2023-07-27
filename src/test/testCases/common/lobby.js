import { assertEqual } from '../../../utils/baseAssertionLibrary.js';
import {
  isInitialized,
  lobbyPageData,
  clickGameCategoryList,
  clickGame,
  clickLoginBtn,
  clickBackIcon,
  clickDoneBtnOnLobby,
} from '../../pageObjects/common/lobby.js';

const platform = global.argsMap['platform'];

// Validate the lobby is launched
export async function testLobbyLaunch() {
  const lobbyLaunchStatus = await isInitialized();
  await assertEqual(
    lobbyLaunchStatus.lobbyHeader,
    true,
    'Lobby Page is not launched',
  );
  await assertEqual(
    lobbyLaunchStatus.bannerImg,
    true,
    'banner image is not available',
  );
  await assertEqual(
    lobbyLaunchStatus.notificationIcon,
    true,
    'notification icon is not available',
  );
}

// Validate the lobby data before login
export async function testLobbyDataBeforeLogin(testData1) {
  const lobbyPageDataStatus = await lobbyPageData();
  await assertEqual(
    lobbyPageDataStatus.lobbyHeader,
    true,
    'lobby Header is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.loginBtn,
    testData1.loginBtn,
    'login button is not correct',
  );
  await assertEqual(
    lobbyPageDataStatus.registerBtn,
    testData1.registerBtn,
    'register button is not correct',
  );
  await assertEqual(
    lobbyPageDataStatus.bannerImg,
    true,
    'banner image is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.notificationIcon,
    true,
    'notification icon is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.notificationMsg,
    true,
    'notification message is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.walletBalance,
    null,
    'wallet balance is not available',
  );
}

// Validate the lobby data after login
export async function testLobbyDataAfterLogin() {
  const lobbyPageDataStatus = await lobbyPageData();
  await assertEqual(
    lobbyPageDataStatus.lobbyHeader,
    true,
    'lobby header is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.loginBtn,
    null,
    'login button is available',
  );
  await assertEqual(
    lobbyPageDataStatus.registerBtn,
    null,
    'register button is available',
  );
  await assertEqual(
    lobbyPageDataStatus.bannerImg,
    true,
    'banner image is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.notificationIcon,
    true,
    'notificationIcon is not available',
  );
  await assertEqual(
    lobbyPageDataStatus.walletBalance,
    true,
    'wallet balance is not available',
  );
}

// Validate the game is available in each category
export async function testLobbyGamesAvailableEachCategory() {
  const gameCategoryListStatus = await clickGameCategoryList();
  gameCategoryListStatus.map((categoryStatus) => {
    // currently failing for bcs on group has not any game
    assertEqual(
      categoryStatus.gameCountInCategory > 0,
      true,
      'No Game is available in ' + categoryStatus.categoryName + ' category',
    );
  });
}

// Validate the game is available in each category
export async function testClickOnGameCategory(categoryName) {
  const categoryNameStatus = await clickGameCategoryList(categoryName);
  await assertEqual(
    categoryNameStatus[0].categoryName,
    categoryName,
    categoryName + 'category button is not clicked',
  );
}

// Validate the list of all games TODO
export async function testLobbyGameList() {
  // const sts = await getGameList();
  console.log('TODO');
}

// Validate the click on any game
export async function testClickGame(gameName) {
  const testClickedStatus = await clickGame(gameName);
  await assertEqual(
    testClickedStatus,
    true,
    gameName + 'Game button is not clicked',
  );
}

// Validate the click on login button
export async function testClickLogin() {
  const loginBtnClickStatus = await clickLoginBtn();
  await assertEqual(loginBtnClickStatus, true, 'login button is not clicked');
}

// Validate the click of back icon on lobby page
export async function testClickBackIcon() {
  const backBtnClickedStatus = await clickBackIcon();
  await assertEqual(backBtnClickedStatus, true, 'back button is not clicked');
}

// Validate the click on done button on lobby page
export async function testClickDoneBtnOnLobby() {
  // TODO we will remove platform when search feature will come on app also.
  if (platform === 'wap') {
    const nextBtnStatus = await clickDoneBtnOnLobby();
    await assertEqual(
      nextBtnStatus,
      true,
      'Next/Done button PopUp on Lobby Page is not clicked',
    );
  }
}
