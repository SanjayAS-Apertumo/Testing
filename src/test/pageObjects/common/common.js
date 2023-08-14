import {
  waitForDisplayed,
  getElementCount,
  getText,
  waitForEnabled,
  click,
  findElements,
  hideKeyboard,
  setValue,
  switchToParentFrame,
  switchToFrame,
  waitForClickable,
  scrollIntoYAxis,
} from '../../../utils/baseActionLibrary.js';
import { locatorHelper } from '../../../utils/locatorHelper.js';
import { androidLocatorPath, appURL } from '../../../utils/constant.js';
const platform = global.argsMap['platform'];

export async function switchToParentFrameForWap() {
  if (platform === 'wap') {
    await browser.pause(2000);
    return switchToParentFrame();
  }
}

export async function switchToFrameForWap(id) {
  if (platform === 'wap') {
    await browser.pause(2000);
    return switchToFrame(id);
  }
}

export async function launchApplication() {
  if (platform === 'android') {
    const skipBtnExist = await getElementCount(
      locatorHelper(platform, 'common', 'skipBtn'),
    );
    if (skipBtnExist > 0) {
      await click(locatorHelper(platform, 'common', 'skipBtn'));
    }
    await waitForDisplayed(locatorHelper(platform, 'common', 'gameBtn'));
    return await click(locatorHelper(platform, 'common', 'gameBtn'));
  } else {
    await browser.url(appURL);
    if (
      (await getElementCount(
        locatorHelper(platform, 'common', 'regionPanelCloseBtn'),
      )) > 0
    ) {
      await click(locatorHelper(platform, 'common', 'regionPanelCloseBtn'));
    }
    await waitForDisplayed(locatorHelper(platform, 'common', 'gameBtn'));
    await click(locatorHelper(platform, 'common', 'gameBtn'));
    await browser.pause(2000);
    await waitForDisplayed('.//*[@id="pageLoading"]', 30000, true);
  }
}

// Validate the click on profile button
export async function clickProfileBtn() {
  if (platform === 'wap') {
    await browser.url(appURL);
    await browser.pause(3000);
  }
  if (
    (await getElementCount(locatorHelper(platform, 'common', 'popUpBtn'))) > 0
  ) {
    await click(
      await click(locatorHelper(platform, 'common', 'popUpCloseBtn')),
    );
  }
  await waitForDisplayed(locatorHelper(platform, 'common', 'profileBtn'), 5000);
  if (
    (await getElementCount(locatorHelper(platform, 'common', 'profileBtn'))) > 0
  ) {
    await waitForClickable(locatorHelper(platform, 'common', 'profileBtn'));
    return await click(locatorHelper(platform, 'common', 'profileBtn'));
  } else return true;
}

// Validate the click on logout button on profile page
export async function clickLogoutBtn() {
  if (platform === 'wap') {
    await waitForClickable(
      locatorHelper(platform, 'common', 'logOutBtn'),
      10000,
    );
    // await scrollIntoView(locatorHelper(platform, 'common', 'logOutBtn'));
    const res = await click(locatorHelper(platform, 'common', 'logOutBtn'));
    await waitForDisplayed(locatorHelper(platform, 'common', 'loginBtn'));
    return res;
  } else {
    await waitForClickable(
      locatorHelper(platform, 'common', 'logOutBtn'),
      10000,
    );
    const element = $(locatorHelper(platform, 'common', 'logOutBtn'));
    while (!(await element.isDisplayed())) {
      const btnLocation = await $(
        androidLocatorPath + 'all_right"]',
      ).getLocation();

      await scrollIntoYAxis(btnLocation);
    }
    const res = await click(locatorHelper(platform, 'common', 'logOutBtn'));
    await waitForDisplayed(
      locatorHelper(platform, 'common', 'logOutBtnOfModal'),
    );
    await click(locatorHelper(platform, 'common', 'logOutBtnOfModal'));
    return res;
  }
}

/* Functions For Login */

// Validate the login page is launched
export async function isInitialized() {
  return {
    inputUsername: await waitForDisplayed(
      locatorHelper(platform, 'common', 'inputUsername'),
    ),
  };
}

// Get the data of login page for validate the launch
export async function loginPageData() {
  await browser.pause(2000);
  await hideKeyboard();
  return {
    inputUsername:
      (await getElementCount(
        locatorHelper(platform, 'common', 'inputUsername'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'inputUsername'),
          )
        : null,
    inputPassword:
      (await getElementCount(
        locatorHelper(platform, 'common', 'inputPassword'),
      )) > 0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'inputPassword'),
          )
        : null,
    loginButton:
      (await getElementCount(
        locatorHelper(platform, 'common', 'loginButton'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'loginButton'))
        : null,
    changeBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'changeBtn'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'changeBtn'))
        : null,
    closeBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'closeBtn'))) > 0
        ? await waitForDisplayed(locatorHelper(platform, 'common', 'closeBtn'))
        : null,
    forgotPasswordBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'forgotPasswordBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'forgotPasswordBtn'))
        : null,
    createNewAccountBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'createNewAccountBtn'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'createNewAccountBtn'),
          )
        : null,
    footerText:
      (await getElementCount(locatorHelper(platform, 'common', 'footerText'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'footerText'))
        : null,
    clickHerBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'clickHerBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'clickHerBtn'))
        : null,
    loginPasswordErrorMsg:
      (await getElementCount(
        locatorHelper(platform, 'common', 'loginPasswordErrorMsg'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'loginPasswordErrorMsg'),
          )
        : null,
    loginUserNameErrorMsg:
      (await getElementCount(
        locatorHelper(platform, 'common', 'loginUserNameErrorMsg'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'loginUserNameErrorMsg'),
          )
        : null,
  };
}

// Validate the login into the application on wap
export async function login(username, password) {
  await waitForDisplayed(locatorHelper(platform, 'common', 'inputUsername'));
  if (
    (await getElementCount(
      locatorHelper(platform, 'common', 'clearUserNameBtn'),
    )) > 0
  ) {
    await click(locatorHelper(platform, 'common', 'clearUserNameBtn'));
    await browser.pause(2000);
  }
  await setValue(locatorHelper(platform, 'common', 'inputUsername'), username);
  await browser.pause(2000);
  await setValue(locatorHelper(platform, 'common', 'inputPassword'), '');
  await browser.pause(2000);
  await setValue(locatorHelper(platform, 'common', 'inputPassword'), password);
  await hideKeyboard();
  await waitForEnabled(locatorHelper(platform, 'common', 'loginButton'));
  await browser.pause(2000);
  return await click(locatorHelper(platform, 'common', 'loginButton'));
}

/* Functions for Games Common */

export async function isInitializedGames() {
  // need to update function so that it will be common for all games
  return {
    onboardImg: await waitForDisplayed(
      locatorHelper(platform, 'common', 'onboardImg'),
    ),
  };
}

// Get the data of initial onboarding screen
export async function initialOnBoardScreenData() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'onboardImg'));
  await waitForDisplayed(locatorHelper(platform, 'common', 'skipBtn'));
  const res = {
    onboardImg:
      (await getElementCount(locatorHelper(platform, 'common', 'onboardImg'))) >
      0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'onboardImg'),
          )
        : null,
    skipBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'skipBtn'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'skipBtn'))
        : null,
    nextBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'nextBtn'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'nextBtn'))
        : null,
  };
  return res;
}

// Get the data of final onboarding screen
export async function finalOnBoardScreenData() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'onboardImg'));
  await waitForDisplayed(locatorHelper(platform, 'common', 'doneBtn'));
  const res = {
    onboardImg:
      (await getElementCount(locatorHelper(platform, 'common', 'onboardImg'))) >
      0
        ? await waitForDisplayed(
            locatorHelper(platform, 'common', 'onboardImg'),
          )
        : null,
    doneBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'doneBtn'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'doneBtn'))
        : null,
  };
  return res;
}

// Get the data of bet confirm panel
export async function betConfirmPanelData() {
  const res = {
    confirmBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'confirmBtn'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'confirmBtn'))
        : null,
    cancelBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'cancelBtn'))) >
      0
        ? await getText(locatorHelper(platform, 'common', 'cancelBtn'))
        : null,
    confirmPanelHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'confirmPanelHeader'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'confirmPanelHeader'))
        : null,
    confirmPanelSubHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'confirmPanelSubHeader'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'confirmPanelSubHeader'),
          )
        : null,
  };
  return res;
}

// Get the data of low wallet confirm panel
export async function lowWalletBalanceConfirmPanelData() {
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'lowBalanceConfirmModalHeader'),
  );
  const res = {
    lowBalanceConfirmModalHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'lowBalanceConfirmModalHeader'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'lowBalanceConfirmModalHeader'),
          )
        : null,
    addMoneyConfirmModalBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'addMoneyConfirmModalBtn'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'addMoneyConfirmModalBtn'),
          )
        : null,
  };
  return res;
}

// Get the data of exit Modal of the Game
export async function exitGamePanelData() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'exitModalHeader'));
  const res = {
    exitModalHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'exitModalHeader'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'exitModalHeader'))
        : null,
    exitBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'exitBtn'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'exitBtn'))
        : null,
    stayBtn:
      (await getElementCount(locatorHelper(platform, 'common', 'stayBtn'))) > 0
        ? await getText(locatorHelper(platform, 'common', 'stayBtn'))
        : null,
  };
  return res;
}

// Validate the click on skip button
export async function clickSkipBtn() {
  await waitForEnabled(locatorHelper(platform, 'common', 'skipBtn'));
  return await click(locatorHelper(platform, 'common', 'skipBtn'));
}

// Validate the click on close button on confirm modal
export async function clickCloseConfirmModalBtn() {
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'closeConfirmModalBtn'),
  );
  return await click(locatorHelper(platform, 'common', 'closeConfirmModalBtn'));
}

// Validate the click on next button
export async function clickNextBtn() {
  // Validate the click on Next button
  var res;
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'onBoardingScreenDot'),
  );
  const totalScreens = await findElements(
    locatorHelper(platform, 'common', 'onBoardingScreenDot'),
  );
  const lastScreenIndex = totalScreens.length - 1;
  for (let i = 0; i < lastScreenIndex; i++) {
    await waitForClickable(locatorHelper(platform, 'common', 'nextBtn'));
    res = await click(locatorHelper(platform, 'common', 'nextBtn'));
    await browser.pause(1000);
  }
  return res;
}

// Validate the click on done button
export async function clickDoneBtn() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'doneBtn'));
  return await click(locatorHelper(platform, 'common', 'doneBtn'));
}
// Validate the click on chipOne button
export async function clickChipOne() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'doneBtn'));
  return await click(locatorHelper(platform, 'common', 'doneBtn'));
}
// Validate the click on up button
export async function clickUpBtn() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'doneBtn'));
  return await click(locatorHelper(platform, 'common', 'doneBtn'));
}

// Validate the click on confirm button
export async function clickConfirmBtn() {
  // Validate the click on confirm button
  await waitForDisplayed(locatorHelper(platform, 'common', 'confirmBtn'));
  return await click(locatorHelper(platform, 'common', 'confirmBtn'));
}

// Validate the click on exit button
export async function clickExitBtn() {
  // Validate the click on exit button
  await waitForDisplayed(locatorHelper(platform, 'common', 'exitBtn'));
  const status = await click(locatorHelper(platform, 'common', 'exitBtn'));
  await browser.pause(5000);
  return status;
}

// Validate the click on header back button
export async function clickHeaderBackBtn() {
  // Validate the click on header back button
  await waitForDisplayed(locatorHelper(platform, 'common', 'headerBackBtn'));
  return await click(locatorHelper(platform, 'common', 'headerBackBtn'));
}

// Validate the click on chat button
export async function clickChatBtn() {
  // Validate the click on chat button
  await waitForDisplayed(locatorHelper(platform, 'common', 'chatIcon'));
  return await click(locatorHelper(platform, 'common', 'chatIcon'));
}

// Validate the click on ham menu button
export async function clickHamBurgerBtn() {
  // Validate the click on Ham burger button
  await waitForDisplayed(locatorHelper(platform, 'common', 'hamBurgerBtn'));
  return await click(locatorHelper(platform, 'common', 'hamBurgerBtn'));
}

// Validate the click on play next hand button
export async function clickPlayNextHandBtn() {
  // Validate the click on PlayNextHand button
  await waitForEnabled(locatorHelper(platform, 'common', 'playNextHand'));
  const res = await click(locatorHelper(platform, 'common', 'playNextHand'));
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'playNextHand'),
    10000,
    true,
  );
  await browser.pause(5000);
  return res;
}

// Validate the click on play another round Button
export async function clickPlayAnotherRoundBtn() {
  // Validate the click on play another round button
  await waitForEnabled(
    locatorHelper(platform, 'common', 'playAnotherRoundBtn'),
  );
  const res = await click(
    locatorHelper(platform, 'common', 'playAnotherRoundBtn'),
  );
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'playAnotherRoundBtn'),
    10000,
    true,
  );
  await browser.pause(5000);
  return res;
}

// Validate the get data of login modal inside game
export async function getLoginModalInsideGame() {
  await waitForDisplayed(locatorHelper(platform, 'common', 'loginModalHeader'));
  const res = {
    loginModalHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'loginModalHeader'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'loginModalHeader'))
        : null,
    modalLoginBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'modalLoginBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'modalLoginBtn'))
        : null,
    modalExitBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'modalExitBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'modalExitBtn'))
        : null,
  };
  return res;
}

// Validate the click on login Button on modal inside game
export async function clickLoginBtnModalInsideGame() {
  await waitForEnabled(locatorHelper(platform, 'common', 'modalLoginBtn'));
  return await click(locatorHelper(platform, 'common', 'modalLoginBtn'));
}

// Validate the click on exit Button on modal inside game
export async function clickExitBtnModalInsideGame() {
  await waitForEnabled(locatorHelper(platform, 'common', 'modalExitBtn'));
  return await click(locatorHelper(platform, 'common', 'modalExitBtn'));
}

// Validate the get data otb dialogue
export async function getOTBDialogueData() {
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'otbDialogueHeader'),
  );
  const res = {
    otbDialogueHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'otbDialogueHeader'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'otbDialogueHeader'))
        : null,
    otbDialogueYesBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'otbDialogueYesBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'otbDialogueYesBtn'))
        : null,
    otbDialogueNoBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'otbDialogueNoBtn'),
      )) > 0
        ? await getText(locatorHelper(platform, 'common', 'otbDialogueNoBtn'))
        : null,
  };
  return res;
}

// Validate the click on Yes Button on otb dialogue
export async function clickOTBDialogueYesBtn() {
  await waitForEnabled(locatorHelper(platform, 'common', 'otbDialogueYesBtn'));
  const res = await click(
    locatorHelper(platform, 'common', 'otbDialogueYesBtn'),
  );
  return res;
}

// Validate the click on no Button on otb dialogue
export async function clickOTBDialogueNoBtn() {
  await waitForEnabled(locatorHelper(platform, 'common', 'otbDialogueNoBtn'));
  return await click(locatorHelper(platform, 'common', 'otbDialogueNoBtn'));
}

// Validate the click on New Round Button
export async function clickNewRoundBtn() {
  await waitForClickable(locatorHelper(platform, 'common', 'newRoundBtn'));
  return await click(locatorHelper(platform, 'common', 'newRoundBtn'));
}

// Validate the get data of new round dialogue
export async function getNewRoundDialogueData() {
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'newRoundDialogStayBtn'),
  );
  const res = {
    newRoundDialogueHeader:
      (await getElementCount(
        locatorHelper(platform, 'common', 'newRoundDialogueHeader'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'newRoundDialogueHeader'),
          )
        : null,
    newRoundDialogStayBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'newRoundDialogStayBtn'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'newRoundDialogStayBtn'),
          )
        : null,
    newRoundDialogNewRoundBtn:
      (await getElementCount(
        locatorHelper(platform, 'common', 'newRoundDialogNewRoundBtn'),
      )) > 0
        ? await getText(
            locatorHelper(platform, 'common', 'newRoundDialogNewRoundBtn'),
          )
        : null,
  };
  return res;
}

// Validate the click on stay Button new round dialogue
export async function clickNewRoundDialogStayBtn() {
  await waitForClickable(
    locatorHelper(platform, 'common', 'newRoundDialogStayBtn'),
  );
  return await click(
    locatorHelper(platform, 'common', 'newRoundDialogStayBtn'),
  );
}

// Validate the click on New Round Button on new round dialogue
export async function clickNewRoundDialogNewRoundBtn() {
  await waitForClickable(
    locatorHelper(platform, 'common', 'newRoundDialogNewRoundBtn'),
  );
  return await click(
    locatorHelper(platform, 'common', 'newRoundDialogNewRoundBtn'),
  );
}

// Validate the click on close button on statics modal
export async function clickRoundStaticsModalCloseBtn() {
  await waitForDisplayed(
    locatorHelper(platform, 'common', 'roundStaticsModalCloseBtn'),
  );
  return await click(
    locatorHelper(platform, 'common', 'roundStaticsModalCloseBtn'),
  );
}
