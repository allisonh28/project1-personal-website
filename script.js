

/* Link the circles to each page */
document.getElementById("about").addEventListener('click', () => {
    window.location.href = "about.html";
});
document.getElementById("contact").addEventListener('click', () => {
    window.location.href = "contact.html";
});
document.getElementById("interests").addEventListener('click', () => {
    window.location.href = "interests.html";
});
document.getElementById("projects").addEventListener('click', () => {
    window.location.href = "projects.html";
});

/* Contact Information linked to outside; email and phone number will not have a link*/
document.getElementById("ig").addEventListener('click', () =>{
    window.open("https://www.instagram.com/allieh.28/?hl=en");
});
document.getElementById("sc").addEventListener('click', () =>{
    window.open("https://snapchat.com/t/ralhHCZa");
});
document.getElementById("linkedin").addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/allison-hoang-75b638325/");
});

/* Link projects to the github repos */
document.getElementById("hello").addEventListener('click', () => {
    window.open("https://github.com/allisonh28/hello-world.git");
});
document.getElementById("v1").addEventListener('click', () => {
    window.open("https://github.com/allisonh28/vitamin1.git");
});
document.getElementById("v2").addEventListener('click', () => {
    window.open("https://github.com/allisonh28/vitamin2.git");
});
document.getElementById("v3").addEventListener('click', () => {
    window.open("https://github.com/allisonh28/vitamin3.git");
});
document.getElementById("v4").addEventListener('click', () => {
    window.open("https://github.com/allisonh28/vitamin4.git");
});

/* Button to go back to home page */
document.getElementsByClassName("goHome").addEventListener('click', () => {
    window.location.href = "index.html";
});