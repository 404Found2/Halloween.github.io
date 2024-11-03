var prog = document.getElementById("progress");

window.addEventListener('scroll', scrollA);
function scrollA() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
    prog.style.height = (1.1 * percentScrolled) + '%';
}



//////////////TIMELINE ANIMATIONS//////////
const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
});
// Get multiple elements instead of a single one using "querySelectorAll"
var sponsors = document.querySelectorAll(".text");

// Loop over the elements and add each one to the observer
sponsors.forEach((element) => observer.observe(element));
