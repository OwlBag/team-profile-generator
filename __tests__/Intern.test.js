const Intern = require('../lib/Intern.js');

test('checks if inherited constructor is working properly', () => {
    const intern = new Intern('testName', 0, 'test@test.com', 0);

    expect(intern.getInfo().name).toBe('testName');
    expect(intern.getInfo().id).toEqual(expect.any(Number));
})