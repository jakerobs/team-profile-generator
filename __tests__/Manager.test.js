const Manager = require('../lib/Manager');

test('creates a new manager with Manager specific info', () => {
    const manager = new Manager('Steve',1111,'steve@tpg.com', '9020');

    expect(manager.officeNumber).toStrictEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
});