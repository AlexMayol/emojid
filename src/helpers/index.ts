
export const cryptoGetRandomIntBetween = (min: number, max: number) => {
  const randomBuffer = new Uint8Array(1);

  crypto.getRandomValues(randomBuffer);

  let randomNumber = randomBuffer[0] / (0xffffffff + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}


const getRandomIntBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min - 1) + min);

export const getRandomItemFrom = <T>(items: T[]): T => {
  if (crypto)
    return items[cryptoGetRandomIntBetween(0, items.length)];
  return items[getRandomIntBetween(0, items.length)];
}

