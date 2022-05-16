const Employee = require('../lib/Employee.js');

test('tests that the employee constructor and functions are working properly', () => {
    const employee = new Employee('testName', 0, 'test@test.com', 0);

    expect(employee.getInfo().name).toBe('testName');
    expect(employee.getInfo().id).toBe(0);
    expect(employee.getInfo().email).toBe('test@test.com');
    expect(employee.getInfo().num).toBe(0);
})