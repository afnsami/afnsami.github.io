
const main = document.getElementById("main");
const projectCard = document.getElementsByClassName("projectsCard");
const sourceCode = document.getElementById("sourceCode");
const menuIcon = document.getElementById("menu-icon");



let projects = [
    ["Book Library", 
        "A library to store book lists", 
        "images/library_app.png", 
        "https://afnsami.github.io/library-app"],

    ["Admin Dashboard", 
        "A book library project", 
        "images/admin_dashboard.png", 
        "https://afnsami.github.io/admin-dashboard"],

    ["Sign Up Form", 
        "Stylish sign up form", 
        "images/signup_form.png", 
        "https://afnsami.github.io/signup-form"],

    ["Simple Web Calculator", 
        "A very basic calculator. design inspired by iOS", 
        "images/calculator.png", 
        "https://afnsami.github.io/calculator"],

    ["Pixel Sketch Book", 
        "A pixel art drawing tool", 
        "images/pixel_sketch.png", 
        "https://afnsami.github.io/pixel-sketch/"],

    ["Rock Paper Scissors Game", 
        "Web based game against CPU made with JavaScript", 
        "images/rock_paper_scissors.png", 
        "https://afnsami.github.io/rock-paper-scissors"],

    ["Simple Landing Page", 
        "A landing page for an imaginary clock company", 
        "images/landing_page.png", 
        "https://afnsami.github.io/odin-landing-page"],

    ["Simple Recipes Page", 
        "My first webpage for The Odin Project", 
        "images/recipes.png", 
        "https://afnsami.github.io/odin-recipes"],

    ["Cursed Farmer Game", 
        "A basic Open Source 2d platformer game using Python", 
        "images/cursed_farmer.png", 
        "https://github.com/afnsami/CursedFarmer"],
];



for (let p = 0; p < projects.length; p++) {
    
        let newDiv = document.createElement("div");
       
        newDiv.className = "projectCard";
        main.appendChild(newDiv);

        let imgLink = document.createElement("a");
        let projectImg = document.createElement("img");

        //Book title
        let projectTitle = document.createElement("h3");
        projectTitle.className = "projectTitle";
        projectTitle.innerText = projects[p][0];

        //Book info
        let projectInfo = document.createElement("p");
        projectInfo.className = "projectInfo";
        projectInfo.innerText = projects[p][1];

        projectImg.src = projects[p][2];
        imgLink.href = projects[p][3];
        imgLink.target = "_blank";
       
        imgLink.append(projectImg);
        newDiv.append(imgLink);
        newDiv.append(projectTitle);
        newDiv.append(projectInfo);
};


//Navigation Icon Action
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        menuIcon.style.transform = "rotate(90deg)";
        menuIcon.style.transition = "0.3s";
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.style.transform = "rotate(0deg)";
        menuIcon.style.transition = "0.3s";
    }
}
