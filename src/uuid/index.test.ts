import { uuid } from "./index";
describe("UUID tests", () => {
  test("it generates a UUDI v4", () => {
    expect(uuid()).toHaveLength(35);
  });
});
