(function() {

    setUpPage();
  
    function setUpPage() {
      addSliderEventListeners();
    }
  
  
  function addSliderEventListeners() {
  
      const sliderPrev = document.getElementById('slider-prev');
      const sliderNext = document.getElementById('slider-next');
      const sliderFrame = document.getElementById('slider-frame');
      const sliderCaption = document.getElementById('slider-caption');
  
      const slides =
        Array.from(sliderFrame.querySelectorAll('div[data-src]'))
          .map(div => {
            return {
              imageUrl: div.getAttribute('data-src'),
              caption: div.textContent.trim(),
            };
          });
  
      let sliderIndex = 0;
      displaySliderImage();
  
      function displaySliderImage() {
        let { imageUrl, caption } = slides[sliderIndex];
        sliderFrame.style.backgroundImage = `url('${imageUrl}')`;
        let count = `(${sliderIndex+1}/${slides.length}) `;
        sliderCaption.innerHTML = count + caption;
        sliderCaption.classList.add('flash');
        setTimeout(() => {
          sliderCaption.classList.remove('flash');
        }, 0);
      }
  
      function displayPrevSliderImage() {
        sliderIndex--;
        if (sliderIndex < 0) {
          sliderIndex = slides.length - 1;
        }
        displaySliderImage();
      }
  
      function displayNextSliderImage() {
        sliderIndex++;
        if (sliderIndex === slides.length) {
          sliderIndex = 0;
        }
        displaySliderImage();
      }
  
      sliderPrev.addEventListener('click', displayPrevSliderImage);
      sliderNext.addEventListener('click', displayNextSliderImage);
  
      setInterval(function() {
        displayNextSliderImage();
      }, 7000);
    }
    
    })();

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

// <-- remove button after project is graded -->
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Get the modal - REMOVE AFTER GRADING
var modal = document.getElementById('myModal');

// Get the button that opens the modal- REMOVE AFTER GRADING
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal- REMOVE AFTER GRADING
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal - REMOVE AFTER GRADING
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal- REMOVE AFTER GRADING
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it- REMOVE AFTER GRADING
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}