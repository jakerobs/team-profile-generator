const Engineer = require('../lib/Engineer.js');

test('creates a new Engineer with their github', () => {
    const engineer = new Engineer('Steve',1111,'steve@tpg.com', 'appleofmygithub');

    expect(engineer.github).toEqual(expect.any(String)); //all other properties are tested by Employee tests
});

test('gets an Engineer role', () => {
    const engineer = new Engineer('Steve',1111,'steve@tpg.com', 'appleofmygithub');

    expect(engineer.getRole()).toEqual('Engineer');
});