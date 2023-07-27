import {
  initialOnBoardScreenData,
  finalOnBoardScreenData,
  clickSkipBtn,
  clickNextBtn,
  clickDoneBtn,
  clickExitBtn,
  clickConfirmBtn,
  clickHeaderBackBtn,
  clickPlayNextHandBtn,
  clickPlayAnotherRoundBtn,
  betConfirmPanelData,
  isInitialized,
  getLoginModalInsideGame,
  clickLoginBtnModalInsideGame,
  clickExitBtnModalInsideGame,
  getOTBDialogueData,
  clickOTBDialogueYesBtn,
  exitGamePanelData,
  clickOTBDialogueNoBtn,
  lowWalletBalanceConfirmPanelData,
  clickCloseConfirmModalBtn,
  clickNewRoundBtn,
  launchApplication,
  clickProfileBtn,
  clickLogoutBtn,
  login,
  loginPageData,
  getNewRoundDialogueData,
  clickNewRoundDialogStayBtn,
  clickNewRoundDialogNewRoundBtn,
  clickRoundStaticsModalCloseBtn,
} from '../../pageObjects/common/common.js';
import {
  assertEqual,
  assertTest as assert,
} from '../../../utils/baseAssertionLibrary.js';

/* Login Application */

// Validate the login page is launched
export async function testLoginLaunch() {
  const loginPageLaunchStatus = await isInitialized();
  await assertEqual(
    loginPageLaunchStatus.inputUsername,
    true,
    'login Page is not available',
  );
}

// Validate the login page data
export async function testLoginPageData(testData1) {
  const loginPageDataStatus = await loginPageData();
  await assertEqual(
    loginPageDataStatus.inputUsername,
    true,
    'UserName Input box is not available',
  );
  await assertEqual(
    loginPageDataStatus.inputPassword,
    true,
    'Password Inout box is not available',
  );
  await assertEqual(
    loginPageDataStatus.closeBtn,
    true,
    'close button is not available',
  );
  await assertEqual(
    loginPageDataStatus.loginButton,
    testData1.loginButton,
    'Submit button is not correct',
  );
  await assertEqual(
    loginPageDataStatus.changeBtn,
    testData1.changeBtn,
    'change button is not correct',
  );
  await assertEqual(
    loginPageDataStatus.forgotPasswordBtn,
    testData1.forgotPasswordBtn,
    'forgotPassword button is not correct',
  );
  await assertEqual(
    loginPageDataStatus.createNewAccountBtn,
    testData1.createNewAccountBtn,
    'createNewAccount button is not correct',
  );
  await assertEqual(
    loginPageDataStatus.footerText,
    testData1.footerText,
    'footerText is not correct',
  );
}

// Enter correct login details and validate the click on login button
export async function testLoginApplication(userName, passWord) {
  const loginStatus = await login(userName, passWord);
  await assertEqual(loginStatus, true, 'login button is clicked');
  await browser.pause(2000);
  const loginDataStatus = await loginPageData();
  await assertEqual(
    loginDataStatus.loginButton,
    null,
    'Login button is visible',
  );
}

/* Launch/Logout Application */

// Validate the application is launched
export async function testLaunchPage() {
  await launchApplication();
}

// Validate the Logout from application
export async function testLogOutFromApplication() {
  const profileBtnStatus = await clickProfileBtn();
  await assertEqual(profileBtnStatus, true, 'Profile button is not clicked');
  const logOutBtnStatus = await clickLogoutBtn();
  await assertEqual(logOutBtnStatus, true, 'logout button is not clicked');
}

/* Games TestCases */

// Validate the game page is launched
export async function testGamePageLunch() {
  const onboardStatus = await isInitialized();
  await assertEqual(
    onboardStatus.onboardImg,
    true,
    'onboard image is not available',
  );
}

// Validate the initial onboarding screen data
export async function testInitialOnBoardScreenGetData(testData1) {
  const onboardStatus = await initialOnBoardScreenData();
  await assertEqual(
    onboardStatus.onboardImg,
    true,
    'onboard image is not available',
  );
  await assertEqual(
    onboardStatus.skipBtn,
    testData1.skipBtn,
    'skip button is not available',
  );
  await assertEqual(
    onboardStatus.nextBtn,
    testData1.nextBtn,
    'next button is not available',
  );
}

// Validate the final onboarding screen data
export async function testFinalOnBoardScreenGetData(testData1) {
  const onboardStatus = await finalOnBoardScreenData();
  await assertEqual(
    onboardStatus.onboardImg,
    true,
    'onboard image is not available',
  );
  await assertEqual(
    onboardStatus.doneBtn,
    testData1.doneBtn,
    'done button is not available',
  );
}

// Validate the click on Skip button on onboarding screen
export async function testClickSkipBtn() {
  const skipBtnStatus = await clickSkipBtn();
  await assertEqual(skipBtnStatus, true, 'Skip button is not clicked');
}

// Validate the click on Next button on onboarding screen
export async function testClickNextBtn() {
  const nextBtnStatus = await clickNextBtn();
  await assertEqual(nextBtnStatus, true, 'Next button is not clicked');
}

// Validate the click on Done button on onboarding screen
export async function testClickDoneBtn() {
  const doneBtnStatus = await clickDoneBtn();
  await assertEqual(doneBtnStatus, true, 'Done button is not clicked');
}

// Validate the click on Exit button
export async function testClickExitBtn() {
  const exitBtnStatus = await clickExitBtn();
  await assertEqual(exitBtnStatus, true, 'Exit button is not clicked');
}

// Validate the click on Confirm button on OTB Modal
export async function testClickConfirmBtn() {
  const confirmBtnStatus = await clickConfirmBtn();
  await assertEqual(confirmBtnStatus, true, 'Confirm button is not clicked');
}

// Validate the click on click on Header Back button
export async function testClickHeaderBackBtn() {
  const headerBtnClickStatus = await clickHeaderBackBtn();
  await assertEqual(
    headerBtnClickStatus,
    true,
    'HeaderBack button is not clicked',
  );
}

// Validate the click on Play Next Hand button
export async function testClickPlayNextHandBtn() {
  const headerBackBtnStatus = await clickPlayNextHandBtn();
  await assertEqual(
    headerBackBtnStatus,
    true,
    'PlayNextHand button is not clicked',
  );
}

// Validate the click on Play Another Round button
export async function testClickPlayAnotherRoundBtn() {
  const playAnotherRoundBtnStatus = await clickPlayAnotherRoundBtn();
  await assertEqual(
    playAnotherRoundBtnStatus,
    true,
    'PlayAnotherRound button is not clicked',
  );
}

// Validate the data of confirm modal
export async function testBetConfirmPanelData(testData1) {
  const betConfirmPaneData = await betConfirmPanelData();
  await assert(
    betConfirmPaneData.confirmPanelHeader.includes(testData1.confirmHeader),
    'confirm modal header is not available',
  );
  await assertEqual(
    betConfirmPaneData.cancelBtn,
    testData1.cancelBtn,
    'cancel button is not available',
  );
  await assertEqual(
    betConfirmPaneData.confirmBtn,
    testData1.confirmBtn,
    'confirm button is not available',
  );
}

// Validate the data of login modal inside game
export async function testGetLoginModalDataInsideGame(testData1) {
  const loginModalInsideGameStatus = await getLoginModalInsideGame();
  await assertEqual(
    loginModalInsideGameStatus.loginModalHeader,
    testData1.loginModalHeader,
    'login modal header is not available',
  );
  await assertEqual(
    loginModalInsideGameStatus.modalLoginBtn,
    testData1.modalLoginBtn,
    'modalLogin button is not available',
  );
  await assertEqual(
    loginModalInsideGameStatus.modalExitBtn,
    testData1.modalExitBtn,
    'modalExit button is not available',
  );
}

// Validate the click on login button on login modal
export async function testClickLoginBtnModalInsideGames() {
  const loginBtnInsideGameStatus = await clickLoginBtnModalInsideGame();
  await assertEqual(
    loginBtnInsideGameStatus,
    true,
    'login button inside game from login modal is not clicked',
  );
}

// Validate the click on exit button on login modal
export async function testClickExitBtnModalInsideGames() {
  const exitBtnInsideGameStatus = await clickExitBtnModalInsideGame();
  await assertEqual(
    exitBtnInsideGameStatus,
    true,
    'exit button Inside game from login modal is not clicked',
  );
}

// Validate the data of Exit Game Panel
export async function testExitModalData(testData1) {
  const exitGamePanelDataStatus = await exitGamePanelData();
  await assertEqual(
    exitGamePanelDataStatus.exitModalHeader,
    testData1.exitModalHeader,
    'exit modal header is not available',
  );
  await assertEqual(
    exitGamePanelDataStatus.exitBtn,
    testData1.exitBtn,
    'exit button is not available',
  );
  await assertEqual(
    exitGamePanelDataStatus.stayBtn,
    testData1.stayBtn,
    'stay button is not available',
  );
}

// Validate the click on NO button on OTB modal
export async function testClickOTBDialogueNoBtn() {
  const otbDialogueNoBtnStatus = await clickOTBDialogueNoBtn();
  await assertEqual(
    otbDialogueNoBtnStatus,
    true,
    'NO button Inside Game from OTB modal is not clicked',
  );
}

// Validate the click on YES button on otb Modal
export async function testClickOTBDialogueYesBtn() {
  const otbDialogueYesBtnStatus = await clickOTBDialogueYesBtn();
  await assertEqual(
    otbDialogueYesBtnStatus,
    true,
    'Yes button Inside Game from OTB modal is not clicked',
  );
}

// Validate the data of OTB modal
export async function testGetOTBDialogueData(testData1) {
  const otbDialogueDataStatus = await getOTBDialogueData();
  await assertEqual(
    otbDialogueDataStatus.otbDialogueHeader,
    testData1.otbDialogueHeader,
    'otbDialogue modal Header is not available',
  );
  await assertEqual(
    otbDialogueDataStatus.otbDialogueYesBtn,
    testData1.otbDialogueYesBtn,
    'YES button Inside Game from OTB modal is not available',
  );
  await assertEqual(
    otbDialogueDataStatus.otbDialogueNoBtn,
    testData1.otbDialogueNoBtn,
    'NO button Inside Game from OTB modal is not available',
  );
}

// Validate the data of low wallet balance confirm modal
export async function testLowWalletBalanceConfirmPanelGetData(testData1) {
  const lowWalletBalanceConfirmPanelDataStatus =
    await lowWalletBalanceConfirmPanelData();
  await assertEqual(
    lowWalletBalanceConfirmPanelDataStatus.lowBalanceConfirmModalHeader,
    testData1.lowBalanceConfirmModalHeader,
    'lowBalanceConfirm Modal Header is not available',
  );
  await assertEqual(
    lowWalletBalanceConfirmPanelDataStatus.addMoneyConfirmModalBtn,
    testData1.addMoneyConfirmModalBtn,
    'addMoney button from Confirm modal is not available',
  );
}

// Validate the click on Close button on confirm modal
export async function testClickCloseConfirmModalBtn() {
  const AddMoneyConfirmModalBtnStatus = await clickCloseConfirmModalBtn();
  await assertEqual(
    AddMoneyConfirmModalBtnStatus,
    true,
    'Close button from confirm modal is not clicked',
  );
}

// Validate the Click on New Round Button
export async function testClickNewRoundBtn() {
  const newRoundBtnStatus = await clickNewRoundBtn();
  await assertEqual(newRoundBtnStatus, true, 'New Round button is not clicked');
}

// Validate the data of New Round modal
export async function testGetNewRoundDialogueData(testData1) {
  const newRoundDialogueDataStatus = await getNewRoundDialogueData();
  await assertEqual(
    newRoundDialogueDataStatus.newRoundDialogueHeader,
    testData1.newRoundDialogueHeader,
    'new rounds modal Header is not available',
  );
  await assertEqual(
    newRoundDialogueDataStatus.newRoundDialogStayBtn,
    testData1.newRoundDialogStayBtn,
    'Stay button New Round modal is not available',
  );
  await assertEqual(
    newRoundDialogueDataStatus.newRoundDialogNewRoundBtn,
    testData1.newRoundDialogNewRoundBtn,
    'New Round button New Round modal is not available',
  );
}

// Validate the click on stay button on new round modal
export async function testClickNewRoundDialogStayBtn() {
  const newRoundDialogueStayBtnStatus = await clickNewRoundDialogStayBtn();
  await assertEqual(
    newRoundDialogueStayBtnStatus,
    true,
    'Stay button New Round modal is not clicked',
  );
}

// Validate the click on New Round button on new round Modal
export async function testClickNewRoundDialogNewRoundBtn() {
  const newRoundDialogueNewRoundBtnStatus =
    await clickNewRoundDialogNewRoundBtn();
  await assertEqual(
    newRoundDialogueNewRoundBtnStatus,
    true,
    'New Round button new round modal is not clicked',
  );
}

// Validate the click on close button on new round Modal statics
export async function testClickRoundStaticsModalCloseBtn() {
  const roundStaticsModalCloseBtnStatus =
    await clickRoundStaticsModalCloseBtn();
  await assertEqual(
    roundStaticsModalCloseBtnStatus,
    true,
    'Close button round statics modal is not clicked',
  );
}
