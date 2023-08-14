export const spinDaBottle = {
  wap: {
    upBtn:
      './/*[not(contains(@class,"row-bet-place-disabled"))]/div[contains(@class,"bet-place-even")]',
    downBtn:
      './/*[not(contains(@class,"row-bet-place-disabled"))]/div/*[@data-cms-key="down"]',

    results: '(//div[contains(@data-cms-page,"sg_spin_da_bottle")])[3]',

    NewRoundBtn:
      '(//div[contains(@data-cms-page,"sg_common_dialog_message")])[2]',

    HeaderBackButton: '//*[@class="bi-chevron-left b-icon bi"]',

    RebetBtn: '(//div[contains(@data-cms-page,"sg_common_dialog_message")])[1]',

    ExitBtn: '//button[normalize-space()="Exit"]',

    sliderChip: './/*[contains(@class,"slider")]/*[contains(@class,"chip")]',

    sliderMaxAmount: './/*[contains(@class,"slider-row")]/div[3]/div',

    sliderMinAmount: './/*[contains(@class,"slider-row")]/div[1]/div',

    bannerImageAfterBet: './/*[contains(@class,"banner-image")]',
  },
};
