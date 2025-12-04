
const main = document.getElementById("main");
const projectCard = document.getElementsByClassName("projectsCard");
const sourceCode = document.getElementById("sourceCode");



let projects = [
    ["images/library_app.png", "https://afnsami.github.io/library-app"],
    ["images/admin_dashboard.png", "https://afnsami.github.io/admin-dashboard"],
    ["images/signup_form.png", "https://afnsami.github.io/signup-form"],
    ["images/calculator.png", "https://afnsami.github.io/calculator"],
    ["images/pixel_sketch.png", "https://afnsami.github.io/pixel-sketch/"],
    ["images/rock_paper_scissors.png", "https://afnsami.github.io/rock-paper-scissors/"],
    ["images/landing_page.png", "https://afnsami.github.io/odin-landing-page/"],
    ["images/recipes.png", "https://afnsami.github.io/odin-recipes/"],
    ["images/cursed_farmer.png", "https://github.com/afnsami/CursedFarmer"],
];



for (let p = 0; p < projects.length; p++) {
    
        let newDiv = document.createElement("div");
        newDiv.className = "projectCard";
        main.appendChild(newDiv);

        let imgLink = document.createElement("a");
        let projectImg = document.createElement("img");

        projectImg.src = projects[p][0];
        imgLink.href = projects[p][1];
        imgLink.target = "_blank";
       
        imgLink.append(projectImg);
        newDiv.append(imgLink);
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
