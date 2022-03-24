import { getRandomItemFrom as get } from "../helpers";
import { emojis } from "../emojis";

export const uuid = () =>
  "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxx".replace(/xx/g, () => get(emojis));
