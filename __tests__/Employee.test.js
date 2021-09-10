const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Luiz', '777', "luiz@email.com");
  
    expect(employee.getName()).toBe("Luiz");
    expect(employee.getId()).toBe("777");
    expect(employee.getEmail()).toBe("luiz@email.com");
    expect(employee.getRole()).toBe("Employee");
});