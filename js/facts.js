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
var sponsors = document.querySelectorAll(".fact");

// Loop over the elements and add each one to the observer
sponsors.forEach((element) => observer.observe(element));

//////////////Randomize Hat///////////
setInterval(toggle, 10000)

var sayingArray = ["I was a Witch this Halloween!", "How was your Halloween?", "Want to know my costume?"];

var displayHat = document.getElementById("hat-cont");
var capt = document.getElementById("caption");

function toggle() {
    displayHat.classList.toggle("active");
    var num = Math.floor(Math.random() * sayingArray.length);
    capt.innerHTML = sayingArray[num];
}
