const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", 1002003000, testValue);
  expect(e.office).toBe(testValue);
});

test('empRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 1002003000, 100);
  expect(e.empRole()).toBe(testValue);
});

test("Can get office number via empOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", 1002003000, testValue);
  expect(e.empOffice()).toBe(testValue);
});
