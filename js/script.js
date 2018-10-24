var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// <-- remove button after project is graded -->
// function myFunction() {
//     var x = document.getElementById("myNav");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// Get the modal - REMOVE AFTER GRADING
// var modal = document.getElementById('myModal');

// Get the button that opens the modal- REMOVE AFTER GRADING
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal- REMOVE AFTER GRADING
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal - REMOVE AFTER GRADING
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal- REMOVE AFTER GRADING
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it- REMOVE AFTER GRADING
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }