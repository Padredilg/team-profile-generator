const Intern = require('../lib/intern');

test('creates a new intern', () => {
    const intern = new Intern('Luiz', '777', "luiz@email.com", "UCF");
  
    expect(intern.getName()).toBe("Luiz");
    expect(intern.getId()).toBe("777");
    expect(intern.getEmail()).toBe("luiz@email.com");
    expect(intern.getSchool()).toBe("UCF")
    expect(intern.getRole()).toBe("Intern");
});