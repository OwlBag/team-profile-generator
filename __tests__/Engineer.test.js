const Engineer = require('../lib/Engineer.js');

test('checks if inherited constructor is working properly', () => {
    const engineer = new Engineer('testName', 0, 'test@test.com', 'githubTest');

    expect(engineer.getGithub()).toBe('githubTest');
    expect(engineer.getRole()).toBe('Engineer');
})