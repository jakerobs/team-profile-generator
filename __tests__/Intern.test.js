const Intern = require('../lib/Intern.js');

test('creates a new intern with Intern specific info', () => {
    const intern = new Intern('Steve',1111,'steve@tpg.com', 'Stanford');

    expect(intern.school).toStrictEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
})