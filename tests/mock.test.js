// tests/mock.test.js
const db = { salvar: jest.fn() };

test("deve chamar salvar com o valor correto", () => {
  db.salvar("Nicole");
  expect(db.salvar).toHaveBeenCalledWith("Nicole");
});
