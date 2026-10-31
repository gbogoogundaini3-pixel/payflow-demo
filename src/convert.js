const RATES = { GBP_USD: 1.35 };

function gbpToUsd(amount) {
  if (typeof amount !== 'number' || amount < 0) {
    throw new Error('Invalid amount');
  }

  return Math.round(amount * RATES.GBP_USD * 100) / 100;
}

module.exports = {
  gbpToUsd
};