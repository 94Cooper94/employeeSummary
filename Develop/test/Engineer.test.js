const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", 1002003000, testValue);
  expect(e.github).toBe(testValue);
});

test("empRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", 1002003000, "GitHubUser");
  expect(e.empRole()).toBe(testValue);
});

test("Can get GitHub username via empGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", 1002003000, testValue);
  expect(e.empGithub()).toBe(testValue);
});
