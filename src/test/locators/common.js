import { androidLocatorPath } from '../../utils/constant.js';
export const common = {
  android: {
    // Login Selector
    changeBtn: androidLocatorPath + 'change_region"]',
    clearUserNameBtn:
      ".//*[contains(@class,'m-input-wap-icon--show m-icon-delete')]",
    clickHerBtn: androidLocatorPath + 'btn_link"]',
    closeBtn: androidLocatorPath + 'close"]',
    createNewAccountBtn: androidLocatorPath + 'create_new"]',
    footerText: androidLocatorPath + 'text_account_activation"]',
    forgotPasswordBtn:
      androidLocatorPath +
      'forgot_password"]/*[@resource-id="com.sportybet.android:id/text"]',
    inputPassword: androidLocatorPath + 'password"]',
    inputUsername: androidLocatorPath + 'mobile"]',
    loginButton:
      androidLocatorPath +
      'log_in"]/*[@resource-id="com.sportybet.android:id/text"]',
    loginPasswordErrorMsg: androidLocatorPath + 'error"]',
    loginUserNameErrorMsg: androidLocatorPath + 'error2"]',

    // Common Application
    gameBtn: "//*[@text='Games']",
    skipBtn: androidLocatorPath + 'skip"]',
    headerGamesTab: '',
    profileBtn: "//*[@text='Me']",
    logOutBtn: androidLocatorPath + 'log_out"]',
    regionPanelCloseBtn: '',
    loginBtn: androidLocatorPath + 'login"]',
    logOutBtnOfModal: './/*[@resource-id="android:id/button1"]',
    loginModalHeader: androidLocatorPath + 'error_message"]',
    modalLoginBtn: androidLocatorPath + 'exit_button"]',
    modalExitBtn: androidLocatorPath + 'login_button"]',
    popUpBtn: '',
    popUpCloseBtn: '',

    // Games Selector
    youWon: androidLocatorPath + 'message_win"]',
    availableChipList: androidLocatorPath + 'number"]',
    betLoseTxt: androidLocatorPath + 'message"]',
    betAmount: androidLocatorPath + 'bet_amount"]',
    betTxt: androidLocatorPath + 'bet_text"]',
    cancelBtn: androidLocatorPath + 'cancel_button"]',
    chatIcon: androidLocatorPath + 'chat"]',
    confirmPanelHeader: androidLocatorPath + 'message_text"]',
    confirmPanelSubHeader: androidLocatorPath + 'gift_count_text"]',
    confirmBtn: androidLocatorPath + 'confirm_button"]',
    doneBtn: androidLocatorPath + 'done_btn"]',
    exitBtn: androidLocatorPath + 'cancel_button"]',
    stayBtn: androidLocatorPath + 'confirm_button"]',
    exitModalHeader: androidLocatorPath + 'message_text"]',
    gameName: androidLocatorPath + 'main_title"]',
    hamBurgerBtn: androidLocatorPath + 'navigation"]',
    headerBackBtn: androidLocatorPath + 'backicon"]',
    maxTxtLbl: androidLocatorPath + 'min_amount"]',
    minTxtLbl: androidLocatorPath + 'min_amount"]',
    newRoundBtn: androidLocatorPath + 'new_round_button"]',
    nextBtn: androidLocatorPath + 'next_btn"]',
    onboardImg: androidLocatorPath + 'ob_img"]',
    pay2X: androidLocatorPath + 'pay_text"]',
    playAnotherRoundBtn: androidLocatorPath + 'next_hand_text"]',
    playNextHand: androidLocatorPath + 'next_hand_text"]',
    sliderChip: androidLocatorPath + 'seekbar"]',
    sliderMaxAmount: androidLocatorPath + 'max_seek_bar"]',
    sliderMinAmount: androidLocatorPath + 'min_seek_bar"]',
    trophyIcon: androidLocatorPath + 'win_trophy"]',
    walletAmount: androidLocatorPath + 'text_balance"]',
    onBoardingScreenDot:
      './/*[@class="android.widget.LinearLayout" and @focusable="true"]',
    addMoneyBtn: androidLocatorPath + 'add_money"]',
    walletWarningMsg: androidLocatorPath + 'error_text"]',
    lowBalanceConfirmModalHeader: androidLocatorPath + 'error_message"]',
    closeConfirmModalBtn: androidLocatorPath + 'error_dialog_close"]',
    otbDialogueHeader: androidLocatorPath + 'message_text"]',
    otbDialogueYesBtn: androidLocatorPath + 'confirm_button"]',
    otbDialogueNoBtn: androidLocatorPath + 'cancel_button"]',
    addMoneyConfirmModalBtn: androidLocatorPath + 'error_action_button"]',
    successMsgBetAmount: androidLocatorPath + 'win_amount"]',
    newRoundDialogueHeader: androidLocatorPath + 'message_text"]',
    newRoundDialogStayBtn: androidLocatorPath + 'confirm_button"]',
    newRoundDialogNewRoundBtn: androidLocatorPath + 'cancel_button"]',
    roundStaticsModalCloseBtn: androidLocatorPath + 'rb_endround_close"]',
  },

  wap: {
    // Login Selector
    changeBtn: "//*[@data-cms-key='change']",
    clearUserNameBtn:
      ".//*[contains(@class,'m-input-wap-icon--show m-icon-delete')]",
    clickHerBtn: "//*[@data-cms-key='click_here']",
    closeBtn: "//*[@class='close']",
    createNewAccountBtn: "//*[@data-cms-key='create_new_account']",
    footerText: '//*[@class="activate-setting"]',
    forgotPasswordBtn: "//*[@data-op='login-forgot-pswd']",
    inputPassword: "//input[@placeholder='Password']",
    inputUsername: "//input[@placeholder='Mobile Number']",
    loginButton: './/*[@data-op="login-btn"]',
    loginPasswordErrorMsg: "//*[@data-op='login-pswd-err']/p",
    loginUserNameErrorMsg: "//*[@data-op='login-phone-err']/p",

    // Common Application
    gameBtn: '[data-op=bottom-nav-games] [data-cms-key=games]',
    skipBtn: './/*[@data-cms-key="on_board_skip"]',
    headerGamesTab: "[class*='m-sports-choose'] [data-cms-key='games']",
    profileBtn: "[data-cms-key='me']",
    logOutBtn: "[data-cms-key='log_out']",
    regionPanelCloseBtn: '[data-op=region-close]',
    loginBtn: '[class=m-btn-login]',
    loginModalHeader:
      './/*[contains(@class,"sg-confirm-modal")]//*[@class="modal-header"]',
    modalExitBtn: ".//button[normalize-space()='Exit']",
    modalLoginBtn: ".//button[normalize-space()='Login']",
    popUpBtn: '//*[contains(@class,"m-act-pop")]',
    popUpCloseBtn: '//i[@data-op="ad_pop_close"]',

    // Games Selector
    youWon: './/*[@data-cms-key="won_txt"]',
    availableChipList: './/*[contains(@class,"bet-configuration-chip-fix")]',
    betLoseTxt: './/*[@data-cms-key="sorry_txt"]',
    betAmount: ".//*[contains(@class,'amount-bet')]",
    betTxt: './/*[@data-cms-key="bet_text"]',
    cancelBtn: "//button[normalize-space()='Cancel']",
    chatIcon: './/*[@class="chat-icon"]',
    confirmPanelHeader: "(//div[@class='dialog-text'])[1]",
    confirmPanelSubHeader: "//span[@class='mx-2 use-gift-text'][1]",
    confirmBtn: "//button[normalize-space()='Confirm']",
    doneBtn:
      './/*[@data-cms-key="on_board_done"] | .//*[contains(@class,"done-button")]',
    exitBtn: "//button[normalize-space()='Exit']",
    gameName:
      './/*[contains(@class,"row-header")]//*[@data-cms-key="game_name"]',
    hamBurgerBtn: './/*[contains(@class,"hamburger-container")]',
    headerBackBtn: "//div[@class='back col-4']//*[name()='svg']",
    maxTxtLbl: './/*[@data-cms-key="max_text"]',
    minTxtLbl: './/*[@data-cms-key="min_text"]',

    newRoundBtn:
      './/*[contains(@class,"row-bet-amount")]//*[@data-cms-key="btn_new_round"][1]',
    nextBtn:
      './/*[@data-cms-key="on_board_next"] | .//*[contains(@class,"next-button")]',
    onboardImg: './/*[@class="image-slide"]',
    pay2X: './/*[@data-cms-key="pay2x"]',
    playAnotherRoundBtn: './/*[@data-cms-key="another_hand"][1]',
    playNextHand: './/*[@data-cms-key="next_hand"][1]',
    sliderChip: './/*[contains(@class,"slider")]/*[contains(@class,"chip")]',
    sliderMaxAmount: './/*[contains(@class,"slider-row")]/div[3]/div',
    sliderMinAmount: './/*[contains(@class,"slider-row")]/div[1]/div',
    trophyIcon: './/*[contains(@class,"sporty-trophy")]',
    walletAmount: './/*[@class="amount-text"]',
    otbDialogueHeader: "//div[@class='dialog-text']",
    otbDialogueYesBtn: "//button[normalize-space()='Yes']",
    otbDialogueNoBtn: "//button[normalize-space()='No']",
    stayBtn: "//button[normalize-space()='Stay']",
    exitModalHeader: "//div[@class='dialog-text']",
    onBoardingScreenDot: ".//*[contains(@class,'dot mx')]",
    addMoneyBtn:
      ".//*[contains(@class,'add-money ')]//*[@data-cms-key='addmoney_text']",
    walletWarningMsg: ".//*[contains(@class,'warning-text')]",
    lowBalanceConfirmModalHeader:
      ".//*[contains(@class,'confirm-modal')]//*[@class='modal-header']",
    closeConfirmModalBtn: ".//*[@class='floating-close-button']",
    addMoneyConfirmModalBtn:
      ".//*[contains(@class,'confirm-modal')]//*[@class='btn btn-primary']",
    successMsgBetAmount: ".//*[contains(@class,'gold')]/span",
    newRoundDialogueHeader: '//*[@aria-modal="true"]//*[@class="dialog-text"]',
    newRoundDialogStayBtn:
      '//*[@aria-modal="true"]//*[@class="btn btn-primary"]',
    newRoundDialogNewRoundBtn:
      '//*[@aria-modal="true"]//*[@class="btn btn-secondary"]',
    roundStaticsModalCloseBtn:
      '//*[@aria-modal="true"]//*[@class="floating-close-button"]',
  },
};
