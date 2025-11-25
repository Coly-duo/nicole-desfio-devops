// tests/mock.test.js
const db = { salvar: jest.fn() };

test("deve chamar salvar com o valor correto", () => {
  db.salvar("Gabriel");
  expect(db.salvar).toHaveBeenCalledWith("Gabriel");
});
