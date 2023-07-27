import { androidLocatorPath } from '../../utils/constant.js';
export const redBlack = {
  android: {
    bannerImageAfterBet: androidLocatorPath + 'result_card_name"]',
    blackBtn: androidLocatorPath + 'black"]',
    cardFaceDown:
      androidLocatorPath +
      'deck_frame"]//*[@resource-id="com.sportybet.android:id/card_front_face"]',
    cardFaceUp:
      androidLocatorPath +
      'deck_frame"]//*[@resource-id="com.sportybet.android:id/card_back_face"]',
    previousBetOpenCards: androidLocatorPath + 'user_history_card_item"]',
    redBtn: androidLocatorPath + 'red"]',
    roundCount: androidLocatorPath + 'indicator_item"]',
    resultPageBtn: androidLocatorPath + 'result_card_name"]',
  },

  wap: {
    bannerImageAfterBet: './/*[contains(@class,"banner-image")]',
    blackBtn: './/*[@data-cms-key="black"]',
    cardFaceDown: './/*[@class="playing-card"]//*[@class="face-down"]',
    cardFaceUp: './/*[@id="card"]//*[contains(@class,"face-up ")]',
    previousBetOpenCards:
      './/*[contains(@class,"playing-card")]//*[contains(@class,"face-up ")]',
    redBtn: './/*[@data-cms-key="red"]',
    roundCount: './/*[contains(@class,"current-or-done")]',
    resultPageBtn:
      ".//*[contains(@class,'win-lose')]//*[contains(@class,'banner-image')]/div",
  },
};
