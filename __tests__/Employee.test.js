const Employee = require('../lib/Employee.js');

test('tests that the employee constructor and functions are working properly', () => {
    const employee = new Employee('testName', 0, 'test@test.com');

    expect(employee.getName()).toBe('testName');
    expect(employee.getId()).toBe(0);
    expect(employee.getEmail()).toBe('test@test.com');
    expect(employee.getRole()).toBe('Employee');
})