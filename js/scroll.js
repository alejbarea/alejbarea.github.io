document.addEventListener("DOMContentLoaded", function() {
	var homeButton = document.getElementById("home-button");
	var homeDiv = document.getElementById("home");
    var educationButton = document.getElementById("education-button");
    var educationDiv = document.getElementById("education");
	var experienceButton = document.getElementById("experience-button");
	var experienceDiv = document.getElementById("experience");
	var projectsButton = document.getElementById("projects-button");
	var projectsDiv = document.getElementById("projects");
	const buttonList = [homeButton, educationButton,experienceButton,projectsButton];
    educationButton.addEventListener("click", function() {
        educationDiv.scrollIntoView({ behavior: "smooth" });

		educationDiv.classList.add("active");
    });
	
	experienceButton.addEventListener("click", function() {
        experienceDiv.scrollIntoView({ behavior: "smooth" });
    });
	
	projectsButton.addEventListener("click", function() {
        projectsDiv.scrollIntoView({ behavior: "smooth" });
    });
});