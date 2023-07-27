export const redBlack = {
  redBlackGame: {
    name: 'Red Black',
    gameName: 'Red-Black',
    redBtn: 'RED',
    blackBtn: 'BLACK',
    betAmount: '952.00',
    sliderMinAmount: '10',
    sliderMaxAmount: '100K',
    sliderMinAmountInDigit: '10.00',
    sliderMaxAmountInDigit: '100,000.00',
    chipValue: '10',
    maxChipValue: '1M',
  },

  scenarioWhenWalletAmountIsLessThenMinBet: {
    walletAmount: '5.00',
    betAmount: '10.00',
    sliderMinAmount: '10',
    sliderMaxAmount: '100K',
    sliderMinAmountInDigit: '10.00',
    sliderMaxAmountInDigit: '100,000.00',
  },

  scenarioWhenWalletAmount80PercentageOfDeafultBet: {
    walletAmount: '1,000.00',
    betAmount: '952.00',
    sliderMinAmount: '10',
    sliderMaxAmount: '1K',
    sliderMinAmountInDigit: '10.00',
    sliderMaxAmountInDigit: '100,000.00',
  },

  scenarioWhenWalletAmountIsLessThenDefaultBetAmount: {
    walletAmount: '900.00',
    betAmount: '900.00',
    sliderMinAmount: '10',
    sliderMaxAmount: '900',
    sliderMinAmountInDigit: '10.00',
    sliderMaxAmountInDigit: '900.00',
  },

  scenarioForNewRoundAfterUpdatingDefaultBet: {
    betAmount: '962.00',
    sliderMinAmount: '10',
    sliderMaxAmount: '100K',
  },
};
