import { emojis } from "./index";

describe("Emoji list test suites", () => {
  test("Every emoji is different", () => {
    const totalLen = emojis.length;
    const uniqueEmojis = [...new Set(emojis)].length;
    expect(totalLen).toEqual(uniqueEmojis);
  });

  open
  test("Every emoji has a length of 2", () => {
    emojis.forEach((emoji) => expect(emoji.length).toBe(2));
  });
});
