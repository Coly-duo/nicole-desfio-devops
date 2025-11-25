// tests/unit.test.js
const soma = (a, b) => a + b;

test("deve somar corretamente", () => {
  expect(soma(2, 3)).toBe(5);
});
