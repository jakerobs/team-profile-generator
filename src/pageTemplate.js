const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const fs = require('fs');

let teamHtml = [];

generateHTML = (teamInfo) => {
    teamHtml = teamInfo.map(teamInfo => {
        if (teamInfo instanceof Manager) {
            return `
                <div class="card cardbody">
                    <div class="card-header" style="background: cadetblue; color: white;">
                        <h4>${teamInfo.name}</h4>
                        <i class="fa fa-coffee"></i> 
                        <h5>${teamInfo.role}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group text-dark">
                            <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                            <li class="list-group-item">Office: ${teamInfo.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            `;
        }
        else if (teamInfo instanceof Engineer) {
            return `
                <div class="card cardbody">
                    <div class="card-header" style="background: cadetblue; color: white;">
                        <h4>${teamInfo.name}</h4>
                        <i class="fas fa-glasses"></i> 
                        <h5>${teamInfo.role}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group text-dark">
                            <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${teamInfo.github}" target="_blank">${teamInfo.github}</a></li>
                        </ul>
                    </div>
                </div>
            `;
        }
        else if (teamInfo instanceof Intern) {
                return `
                <div class="card cardbody">
                    <div class="card-header" style="background: cadetblue; color: white;">
                        <h4>${teamInfo.name}</h4>
                        <i class="fas fa-user-graduate"></i> 
                        <h5>${teamInfo.role}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group text-dark">
                            <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                            <li class="list-group-item">School: ${teamInfo.school}</li>
                        </ul>
                    </div>
                </div>
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
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/5ac5e6fbc3.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="jumbotron header" >
        <h1 class="text-center"> 
            My Team 
        </h1>
    </div>

    <main class="container">
        <div class="row">
            <div class="card-deck" style="margin: auto;">
                ${teamHtmlJoined}
            </div>
        </div>
    </main>

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
