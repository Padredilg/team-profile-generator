const Manager = require('../lib/Manager');

test('creates a new Manager', () => {
    const manager = new Manager('Luiz', '777', "luiz@email.com", "O1450");
  
    expect(manager.getName()).toBe("Luiz");
    expect(manager.getId()).toBe("777");
    expect(manager.getEmail()).toBe("luiz@email.com");
    expect(manager.getOfficeNumber()).toBe("O1450")
    expect(manager.getRole()).toBe("Manager");
});