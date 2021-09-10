function generateSections(members) {
    if(members.manager && members.engineers[0] && members.interns[0]){
        return `
        ${generateManagerSection(members.manager)}
        ${generateEngineersSection(members.engineers)}
        ${generateInternsSection(members.interns)}
        `
    }
    else if(members.manager && members.engineers[0]){
        return `
        ${generateManagerSection(members.manager)}
        ${generateEngineersSection(members.engineers)}
        `
    }
    else if(members.manager &&  members.interns[0]){
        return `
        ${generateManagerSection(members.manager)}
        ${generateInternsSection(members.interns)}
        `
    }
    else{//only a manager is present
        return `${generateManagerSection(members.manager)}`
    }
}

function generateManagerSection(manager){
    //receives the manager object and generates a card for it.
    /*
    use a card syntax from bootstrap to implement
    manager.getName()
    manager.getId()
    manager.getEmail()
    manager.getOfficeNumber()
    manager.getRole()
    */
    return`
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${manager.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${manager.getName()}</li>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    `;
}

function generateEngineersSection(engineers){
    //use mapping function to create cards for each engineer
    //maybe use map to call a function that prints the html syntax for a card for each engineer
    return;
}

function generateInternsSection(interns){
    //use mapping to create cards for each intern
    return;
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