
const main = document.getElementById("main");
const projectCard = document.getElementsByClassName("projectsCard");
const sourceCode = document.getElementById("sourceCode");



let projects = [
    ["Book Library", "images/library_app.png", "https://afnsami.github.io/library-app"],
    ["Admin Dashboard", "images/admin_dashboard.png", "https://afnsami.github.io/admin-dashboard"],
    ["Sign Up Form", "images/signup_form.png", "https://afnsami.github.io/signup-form"],
    ["Simple Web Calculator", "images/calculator.png", "https://afnsami.github.io/calculator"],
    ["Pixel Sketch", "images/pixel_sketch.png", "https://afnsami.github.io/pixel-sketch/"],
    ["Rock Paper Scissors Game", "images/rock_paper_scissors.png", "https://afnsami.github.io/rock-paper-scissors"],
    ["Landing Page", "images/landing_page.png", "https://afnsami.github.io/odin-landing-page"],
    ["Simple Recipes Page", "images/recipes.png", "https://afnsami.github.io/odin-recipes"],
    ["Cursed Farmer Game", "images/cursed_farmer.png", "https://github.com/afnsami/CursedFarmer"],
];



for (let p = 0; p < projects.length; p++) {
    
        let newDiv = document.createElement("div");
       
        newDiv.className = "projectCard";
        main.appendChild(newDiv);

        let imgLink = document.createElement("a");
        let projectImg = document.createElement("img");

        //Title
        let projectTitle = document.createElement("h3");
        projectTitle.className = "projectTitle";
        projectTitle.innerText = projects[p][0];

        projectImg.src = projects[p][1];
        imgLink.href = projects[p][2];
        imgLink.target = "_blank";
       
        imgLink.append(projectImg);
        newDiv.append(imgLink);
        newDiv.append(projectTitle);
};


//Navigation Icon Action
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
