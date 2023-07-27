import { androidLocatorPath } from '../../utils/constant.js';
export const lobby = {
  android: {
    gameImage: androidLocatorPath + 'game_iv"]',
    gameList: androidLocatorPath + 'card"]',
    gameNameList: androidLocatorPath + 'game_name"]',
    bannerImg: androidLocatorPath + 'sg_banner_viewpager"]',
    lobbyCategoryName: androidLocatorPath + 'categoryName"]',
    lobbyCategoryList: androidLocatorPath + 'customTabLayout"]',
    lobbyHeader: androidLocatorPath + 'toolbar_layout"]',
    lobbyTitle: androidLocatorPath + 'toolbar_id"]',
    loginBtn: androidLocatorPath + 'login"]',
    notificationIcon: androidLocatorPath + 'not_image"]',
    notificationMsg: androidLocatorPath + 'notification_layout"]',
    playerCount: androidLocatorPath + 'online_tv"]',
    registerBtn: androidLocatorPath + 'register"]',
    walletBalance: androidLocatorPath + 'wallet_balance"]',
    backIcon: androidLocatorPath + 'back_icon"]',
  },

  wap: {
    gameImage: './/*[@class="banner_image"]',
    gameList: '[id*=game_item]',
    gameNameList: './/*[@class="name"]',
    bannerImg: './/*[@id="carousel"] | .//*[@class="item active"]',
    lobbyCategoryList: ".//*[contains(@class,'category-parent col-auto')]",
    lobbyCategoryName: ".//*[@data-cms-page='sg_lobby_categories']",
    lobbyHeader: '//div[@id="lobby-header"]',
    lobbyTitle: '//*[@class="lobby-title"]',
    loginBtn:
      './/*[@data-cms-key="login_btn"] | .//*[contains(@class,"login-btn")]',
    notificationIcon: ".//*[contains(@class,'left-nof-image')]",
    notificationMsg: '//*[@id="scroll-container-notif"]/div[1]/div',
    playerCount: './/*[@data-cms-key="game_players_count"]',
    registerBtn: './/*[@data-cms-key="register_btn"]',
    walletBalance: './/*[@class="wallet-balance"]',
    backIcon: ".//span[@class='back-icon']",
  },
};
