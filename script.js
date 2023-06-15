var home = document.getElementById("home");
var about = document.getElementById("about");
var btnabout = document.getElementById("btn-about");
var lecturer = document.getElementById("lecturers");
var btnlecturer = document.getElementById("btn-lecturers");
var contact = document.getElementById("contact");
var btncontact = document.getElementById("btn-contact");

var home_section = document.getElementById("home-section");
var about_section = document.getElementById("about-section");
var lecturer_section = document.getElementById("lecturer-section");
var contact_section = document.getElementById("contact-section");


function displayHome(){
    home_section.style.display = "flex"
    about_section.style.display = "none"
    lecturer_section.style.display = "none"
    contact_section.style.display = "none";
    home.classList.add("active");
    about.classList.remove("active");
    lecturer.classList.remove("active");
    contact.classList.remove("active");
}
function displayAbout(){
    home_section.style.display = "none"
    about_section.style.display = "block"
    lecturer_section.style.display = "none"
    contact_section.style.display = "none";
    about.classList.add("active");
    home.classList.remove("active");
    lecturer.classList.remove("active");
    contact.classList.remove("active");
}
function displayLecturer(){
    home_section.style.display = "none"
    about_section.style.display = "none"
    lecturer_section.style.display = "block"
    contact_section.style.display = "none";
    home.classList.remove("active");
    about.classList.remove("active");
    lecturer.classList.add("active");
    contact.classList.remove("active");
}
function displayContact(){
    home_section.style.display = "none"
    about_section.style.display = "none"
    lecturer_section.style.display = "none"
    contact_section.style.display = "block";
    home.classList.remove("active");
    about.classList.remove("active");
    lecturer.classList.remove("active");
    contact.classList.add("active");
}

home.addEventListener("click", displayHome);
about.addEventListener("click", displayAbout);
btnabout.addEventListener("click", displayAbout);
lecturer.addEventListener("click", displayLecturer);
btnlecturer.addEventListener("click", displayLecturer);
contact.addEventListener("click", displayContact);
btncontact.addEventListener("click", displayContact);


function displayText(more, hidden){
    hidden.classList.toggle("visible");
    if (more.innerHTML === ".... Read More"){
        more.innerHTML = "Read Less";
    } else if (more.innerHTML === "Read Less"){
        more.innerHTML = ".... Read More";
    }
}

let hidden1 = document.getElementById("hidden-text1");
let more1 = document.getElementById("more1");
more1.addEventListener("click", function(){
    displayText(more1, hidden1);
});

let hidden2 = document.getElementById("hidden-text2");
let more2 = document.getElementById("more2");
more2.addEventListener("click", function(){
    displayText(more2, hidden2);
});

let hidden4 = document.getElementById("hidden-text4");
let more4 = document.getElementById("more4");
more4.addEventListener("click", function(){
    displayText(more4, hidden4);
});

let hidden5 = document.getElementById("hidden-text5");
let more5 = document.getElementById("more5");
more5.addEventListener("click", function(){
    displayText(more5, hidden5);
});

let hidden6 = document.getElementById("hidden-text6");
let more6 = document.getElementById("more6");
more6.addEventListener("click", function(){
    displayText(more6, hidden6);
});

function navchange(){
    if (window.scrollY > 20){
        lecturer_nav.classList.add("shadow");
    } else{
        lecturer_nav.classList.remove("shadow");
    }
}
var lecturer_nav = document.getElementById("lecturer-navigation");
document.addEventListener("scroll", navchange);

function scrollupwards(value){
    window.scrollTo(0, value)
}

// lecturer navigation
var dr_ayinla = document.getElementById("DR-AYINLA");
var dr_sakpere = document.getElementById("DR-SAKPERE");
var dr_woods = document.getElementById("DR-WOODS");
var display_all = document.getElementById("display-all");
display_all.addEventListener("click", DisplayAll);

function DisplayLecturer(value){
    display_all.style.display = "block";
    if (value === 1){
        dr_ayinla.style.display = "block";
        dr_sakpere.style.display = "none";
        dr_woods.style.display = "none";
    } else if (value === 2){
        dr_ayinla.style.display = "none";
        dr_sakpere.style.display = "block";
        dr_woods.style.display = "none";
    } else if (value === 3){
        dr_ayinla.style.display = "none";
        dr_sakpere.style.display = "none";
        dr_woods.style.display = "block";
    }
}
function DisplayAll(){
    dr_ayinla.style.display = "block";
        dr_sakpere.style.display = "block";
        dr_woods.style.display = "block";
        display_all.style.display = "none";
}