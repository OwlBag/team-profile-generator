const Manager = require('../lib/Manager.js');

test('checks if inherited constructor is working properly', () => {
    const manager = new Manager('testName', 0, 'test@test.com', 0);

    expect(manager.getOfficeNumber()).toBe(0)
    expect(manager.getRole()).toBe('Manager')
})