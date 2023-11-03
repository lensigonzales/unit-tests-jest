export function randomLottoTicket() {
  const randomNumbers = [];
  for (let i = 0; i < 6; i++) {
    randomNumbers.push(Math.floor(Math.random() * (50 - 1) + 1));
  }
  return randomNumbers;
}
