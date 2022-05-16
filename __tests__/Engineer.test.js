const Engineer = require('../lib/Engineer.js');

test('checks if inherited constructor is working properly', () => {
    const engineer = new Engineer('testName', 0, 'test@test.com', 0);

    expect(engineer.getInfo().name).toBe('testName');
    expect(engineer.getInfo().id).toEqual(expect.any(Number));
})