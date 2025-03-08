
const main = document.getElementById("main");
const projectCard = document.getElementsByClassName("projectsCard");
const sourceCode = document.getElementById("sourceCode");



let projects = [
    ["images/temp.png", "https://youtube.com"],
    ["images/2.png", "1"],
    ["images/temp.png", "2"],
    ["images/2.png", "3"],
    ["images/temp.png", "httpsd.com"],
    ["images/temp.png", "httpsd.com"],
    ["images/temp.png", "httpsd.com"],
    ["images/temp.png", "httpsd.com"],
    ["images/temp.png", "httpsd.com"],
    ["images/temp.png", "httpsd.com"],
    ["images/temp.png", "httpsd.com"],
];



//for (x in projects) {
for (let p = 0; p < projects.length; p++) {

        let newDiv = document.createElement("div");
        newDiv.className = "projectCard";
        main.appendChild(newDiv);


        let imgLink = document.createElement("a");
        let projectImg = document.createElement("img");


        for (let j = 0; j < projects.length; j++) {

            projectImg.src = projects[p][0];
            imgLink.href = projects[p][1];
        };       

       
        imgLink.append(projectImg);
        newDiv.append(imgLink);
};
