import { getRandomItemFrom as get } from "../helpers";
import { emojis } from "../emojis";

export const uuid = (): string =>
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/xx/g, () => get(emojis));
