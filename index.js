// expecting time to be a string in the format like '8:15' or '12:30'

const numberConversions = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
};

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const [hour, minute] = time.split(':').map(Number)
  
  if (minute === 0) {
    return `${numberConversions[hour]} o'clock`
  }

  if (minute === 15) {
    return `quarter past ${numberConversions[hour]}`
  }
  if (minute < 30) {
    return `${numberConversions[minute]} past ${numberConversions[hour]}`
  }

  if (minute === 30) {
    return `half past ${numberConversions[hour]}`
  }
  if (minute === 45) {
    return `quarter to ${(numberConversions[hour % 12 + 1])}`
  }

  if (minute > 30) {
    return `${numberConversions[60-minute]} to ${(numberConversions[hour % 12 + 1])}`
  }
}

module.exports = { convertTimeToWords };