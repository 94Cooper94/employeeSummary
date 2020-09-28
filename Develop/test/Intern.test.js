const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "linkedin.com";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("empRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "linkedin.com");
  expect(e.empRole()).toBe(testValue);
});

// i elected to request linkedin info rather than school
test("Can get linkedin info via empLinkedin()", () => {
  const testValue = "linkedin.com";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.empLinkedin()).toBe(testValue);
});
