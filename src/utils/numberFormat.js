export async function formatNumber(numberString, roundOffDigits) {
  const number = numberString.replace(/[^0-9.-]/g, '');
  if (isNaN(number)) {
    return number;
  }
  if (number < 1) {
    roundOffDigits = 2;
  }
  const numberUnits = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const expression = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let selectedNumberUnitIndex = 0;
  for (
    selectedNumberUnitIndex = numberUnits.length - 1;
    selectedNumberUnitIndex > 0;
    selectedNumberUnitIndex--
  ) {
    if (number >= numberUnits[selectedNumberUnitIndex].value) {
      break;
    }
  }

  return (
    (number / numberUnits[selectedNumberUnitIndex].value)
      .toFixed(roundOffDigits)
      .replace(expression, '$1') + numberUnits[selectedNumberUnitIndex].symbol
  );
}
