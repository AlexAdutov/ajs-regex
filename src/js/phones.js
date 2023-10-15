export default function phonesCorrection(phoneNumber) {
  const number = phoneNumber;
  const regexp = /\d{1,}/g;
  const arr = number.match(regexp);

  if (arr[0].length === 1 && arr[0] === '8') {
    arr[0] = '+7';
  } else {
    arr.unshift('+');
  }

  const result = arr.join('');
  return result;
}
