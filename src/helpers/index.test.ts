import { emojis } from "../emojis";
import { getRandomItemFrom } from "./index";

describe("Helpers test suites", () => {
  test("Can get a random emoji from the list", () => {
    const emo = getRandomItemFrom(emojis);
    expect(emo.length).toBe(2);
  });
});
