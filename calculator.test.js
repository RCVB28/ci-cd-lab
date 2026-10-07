const { add, subtract } = require("./calculator.js");

test("add two numbers", () => {
  expect(add(10, 5)).toBe(15);
});

test("subtract two numbers", () => {
  expect(subtract(10, 5)).toBe(5);
});
