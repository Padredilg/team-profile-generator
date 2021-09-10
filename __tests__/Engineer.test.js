const Engineer = require('../lib/Engineer');

test('creates a new engineer', () => {
    const engineer = new Engineer('Luiz', '777', "luiz@email.com", "engGit");
  
    expect(engineer.getName()).toBe("Luiz");
    expect(engineer.getId()).toBe("777");
    expect(engineer.getEmail()).toBe("luiz@email.com");
    expect(engineer.getGithub()).toBe("engGit")
    expect(engineer.getRole()).toBe("Engineer");
});