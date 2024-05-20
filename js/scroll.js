document.addEventListener("DOMContentLoaded", function() {
	var homeButton = document.getElementById("home-button");
	var homeDiv = document.getElementById("home");
    var educationButton = document.getElementById("education-button");
    var educationDiv = document.getElementById("education");
	var experienceButton = document.getElementById("experience-button");
	var experienceDiv = document.getElementById("experience");
	var projectsButton = document.getElementById("projects-button");
	var projectsDiv = document.getElementById("projects");
    var certsButton = document.getElementById("certs-button");
	var certsDiv = document.getElementById("certs");
    var hobbiesButton = document.getElementById("hobbies-button");
	var hobbiesDiv = document.getElementById("hobbies");
    var contactButton = document.getElementById("contact-button");
	var contactDiv = document.getElementById("contact");
	const buttonList = [homeButton, educationButton,experienceButton,projectsButton,certsButton,hobbiesButton,contactButton];
    homeButton.addEventListener("click", function() {
        homeDiv.scrollIntoView({ behavior: "smooth" });
    });
    educationButton.addEventListener("click", function() {
        educationDiv.scrollIntoView({ behavior: "smooth" });
        buttonList.forEach(function(el){
            el.classList.remove("active");
        });
		educationDiv.classList.add("active");

    });
	
	experienceButton.addEventListener("click", function() {
        experienceDiv.scrollIntoView({ behavior: "smooth" });
    });
	
	projectsButton.addEventListener("click", function() {
        projectsDiv.scrollIntoView({ behavior: "smooth" });
    });
    certsButton.addEventListener("click", function() {
        certsDiv.scrollIntoView({ behavior: "smooth" });
    });
    hobbiesButton.addEventListener("click", function() {
        hobbiesDiv.scrollIntoView({ behavior: "smooth" });
    });
    contactButton.addEventListener("click", function() {
        contactDiv.scrollIntoView({ behavior: "smooth" });
    });
});