export const spinDaBottle = {
  spinDaBottleGame: {
    name: "Spin da' Bottle",
    gameName: 'spinDaBottle',
    greenBtn: 'UP',
    brownBtn: 'DOWN',
    betAmount: '0.10',
    sliderMinAmount: '0.10',
    sliderMaxAmount: '100K',
    sliderMinAmountInDigit: '0.10',
    sliderMaxAmountInDigit: '100,000.00',
    chipValue: '0.1',
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
};
