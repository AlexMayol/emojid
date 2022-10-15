import { getRandomItemFrom } from "../helpers";
import { emojis } from "../emojis";

export const emojid = (len = 10): string => {
  let result = "";

  for (let x = 0; x < len; x++) result += getRandomItemFrom(emojis);

  return result;
};
