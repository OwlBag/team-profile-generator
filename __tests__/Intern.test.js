const Intern = require('../lib/Intern.js');

test('checks if inherited constructor is working properly', () => {
    const intern = new Intern('testName', 0, 'test@test.com', 'sampleSchool');

    expect(intern.getSchool()).toBe('sampleSchool');
    expect(intern.getRole()).toBe('Intern');
})