const Employee = require('../lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee('Steve',1111,'steve@tpg.com');

    expect(employee.name).toBe('Steve');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
});

