const getRandomIntBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min - 1) + min);

export const getRandomItemFrom = <T>(items: T[]): T =>
  items[getRandomIntBetween(0, items.length)];
