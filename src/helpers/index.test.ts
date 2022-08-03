import { emojis } from "../emojis";
import { getRandomItemFrom } from "./index";

const crypto = require('crypto');

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr: Uint32Array) => crypto.randomBytes(arr.length)
  }
});


describe("Helpers test suites", () => {
  test("Can get a random emoji from the list", () => {
    const emo = getRandomItemFrom(emojis);
    expect(emo.length).toBe(2);
  });
});
