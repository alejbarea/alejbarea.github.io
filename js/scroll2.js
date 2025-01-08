    document.addEventListener('DOMContentLoaded', function() {
      var homeDiv = document.getElementById("home");
      var educationDiv = document.getElementById("education");
      var experienceDiv = document.getElementById("experience");
      var projectsDiv = document.getElementById("projects");
      var certsDiv = document.getElementById("certs");
      var hobbiesDiv = document.getElementById("hobbies");
      var contactDiv = document.getElementById("contact");
      var publicationsDiv = document.getElementById("publicationsDiv");
      const sections = [homeDiv,educationDiv,experienceDiv,certsDiv,publicationsDiv,hobbiesDiv,contactDiv,projectsDiv];
      const navLinks = document.querySelectorAll('.nav-link');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('id') === entry.target.id+"-button") {
                link.classList.add('active');
              }
            });
          }
        });
      }, { threshold: 0.7 });

      sections.forEach(section => {
        observer.observe(section);
      });
    });