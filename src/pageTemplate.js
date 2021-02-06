const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const fs = require('fs');

let teamHtml = [];

generateHTML = (teamInfo) => {
    teamHtml = teamInfo.map(teamInfo => {
        if (teamInfo instanceof Manager) {
            return `
            <li class="col-md-3">
                <div class="card cardbody">
                    <div class="card-header" style="background: cadetblue; color: white;">
                        <h4>${teamInfo.name}</h4>
                        <i class="fa fa-coffee"></i> 
                        <h5>${teamInfo.role}</h5>
                    </div>
                    <div class="card-body">
                        <form role="form">			
                            <div class="form-group">
                                <label for="reserve-unique-id" id="reserve-unique-id">ID:${teamInfo.id} </label>
                            </div>
                            <div class="form-group">
                                <label for="reserve-email" id="reserve-email">Email: ${teamInfo.email}</label>
                            </div>
                            <div class="form-group">
                                <label for="reserve-phone" id="office-number">Office Number: ${teamInfo.officenumber}</label>					
                            </div>				
                        </form>
                    </div>
                </div>
            </li>
            `;
        }
        else if (teamInfo instanceof Engineer) {
            return `
            <li class="col-md-3">
                <div class="card cardbody">
                    <div class="card-header" style="background: cadetblue; color: white;">
                        <h4>${teamInfo.name}</h4>
                        <i class="fas fa-glasses"></i> 
                        <h5>${teamInfo.role}</h5>
                    </div>
                    <div class="card-body">
                        <form role="form">			
                            <div class="form-group">
                                <label for="reserve-unique-id" id="reserve-unique-id">ID:${teamInfo.id} </label>
                            </div>
                            <div class="form-group">
                                <label for="reserve-email" id="reserve-email">Email: ${teamInfo.email}</label>
                            </div>
                            <div class="form-group">
                                <label for="reserve-phone" id="github">Github: ${teamInfo.github}</label>					
                            </div>				
                        </form>
                    </div>
                </div>
            </li>
            `;
        }
        else if (teamInfo instanceof Intern) {
                return `
            <li class="col-md-3">
                <div class="card cardbody">
                    <div class="card-header" style="background: cadetblue; color: white;">
                        <h4>${teamInfo.name}</h4>
                        <i class="fas fa-user-graduate"></i> 
                        <h5>${teamInfo.role}</h5>
                    </div>
                    <div class="card-body">
                        <form role="form">			
                            <div class="form-group">
                                <label for="reserve-unique-id" id="reserve-unique-id">ID:${teamInfo.id} </label>
                            </div>
                            <div class="form-group">
                                <label for="reserve-email" id="reserve-email">Email: ${teamInfo.email}</label>
                            </div>
                            <div class="form-group">
                                <label for="reserve-phone" id="school">School: ${teamInfo.school}</label>					
                            </div>				
                        </form>
                    </div>
                </div>
            </li>
        `;
    }
})
finishHtml(teamHtml);
};


finishHtml = (teamHtml) => {
    teamHtmlJoined = teamHtml.join("");
    let finalHTML = `
    <!DOCTYPE html>
        <html>
        
        <head>
            <title>My Team</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <body>
            <div class="jumbotron header" >
                <h1 class="text-center"> 
                    My Team 
                </h1>
            </div>
            <div class="container">
                ${teamHtmlJoined}
            </div>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </body>
        
        </html>
    `;
    fs.writeFile("./dist/index.html", finalHTML, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Team File Created Inside Dist Folder.');
        }
    })
};

module.exports = generateHTML, finishHtml;
