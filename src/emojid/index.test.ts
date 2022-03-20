import { emojid } from "./index";

describe("Emojid test cases", () => {
  test("It creates a 10-chars ID", () => {
    expect(emojid()).toHaveLength(10 * 2);
  });

  test("It creates a 20-chars ID", () => {
    expect(emojid(20)).toHaveLength(20 * 2);
  });

  test("It creates a 36-chars ID", () => {
    expect(emojid(36)).toHaveLength(36 * 2);
  });
});
