//create function that return the whole cards section. it uses if statement to check which members are present to create the needed cards
//this function uses another function to generate as many cards as needed given the number of elements, using map
function generateManager(manager){
    
}

function generateCardSection(members) {
    console.log(members.engineers[0].name);

    if(members.manager && members.engineers && members.interns){
        return `
            <div>${members.manager}</div>
            <div>${members.engineers[0]}</div>
            <div>${members.interns[0]}</div>
        `
    }
    else if(members.manager && members.engineers){
        return `
            <div>${members.manager}</div>
            <div>${members.engineers[0]}</div>
        `
    }
    else if(members.manager &&  members.interns){
        return `
            <div>${members.manager}</div>
            <div>${members.interns[0]}</div>
        `
    }
    else{
        return `
            <div>${members.manager}</div>
        `
    }
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
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="">
        <h1 class="">${team}</h1>
      </div>
    </header>

    <main class="">
        <!--you have to generate cards for each-->
        <div>
            ${generateCardSection(members)}
        </div>
    </main>
  </body>
  </html>
  `;
};