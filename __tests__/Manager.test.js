const Manager = require('../lib/Manager.js');

test('checks if inherited constructor is working properly', () => {
    const manager = new Manager('testName', 0, 'test@test.com', 0);

    expect(manager.getInfo().name).toBe('testName');
    expect(manager.getInfo().id).toEqual(expect.any(Number));
})