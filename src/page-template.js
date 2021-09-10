function generateSections(members) {
    if(members.manager && members.engineers[0] && members.interns[0]){
        return `
        <div class="section">${generateManagerSection(members.manager)}</div>
        <div class="section">${generateEngineersSection(members.engineers)}</div>
        <div class="section">${generateInternsSection(members.interns)}</div>
        `
    }
    else if(members.manager && members.engineers[0]){
        return `
        <div class="section">${generateManagerSection(members.manager)}</div>
        <div class="section">${generateEngineersSection(members.engineers)}</div>
        `
    }
    else if(members.manager &&  members.interns[0]){
        return `
        <div class="section">${generateManagerSection(members.manager)}</div>
        <div class="section">${generateInternsSection(members.interns)}</div>
        `
    }
    else{//only a manager is present
        return `<div class="section">${generateManagerSection(members.manager)}</div>`
    }
}

function generateManagerSection(manager){
    return`
            <div class="card spacing" style="width: 18rem;">
                <div class="card-header manager-header">
                    <h3>${manager.getName()}</h3>
                    <h5><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
    `;
}

function generateEngineersSection(engineers){
    const mappedArray = engineers.map(engineer => {
        return `
            <div class="card spacing" style="width: 18rem;">
                <div class="card-header engineer-header">
                    <h3>${engineer.getName()}</h3>
                    <h5><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                </ul>
            </div>

      `;
      })
      .join('');
    //maybe I need to add the html syntax to each element in the array and return that

    return mappedArray;
}

function generateInternsSection(interns){
    const mappedArray = interns.map(intern => {
        return `
            <div class="card spacing" style="width: 18rem;">
                <div class="card-header intern-header">
                    <h3>${intern.getName()}</h3>
                    <h5><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>

      `;
      })
      .join('');
    //maybe I need to add the html syntax to each element in the array and return that

    return mappedArray;
}

module.exports = pageData => {
  const { team, ...members} = pageData;
  
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
        <h1 id="team">${team}</h1>
    </header>

    <main class="">
        ${generateSections(members)}
    </main>
  </body>
  </html>
  `;
};