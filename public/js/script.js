// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;

    // Send form data to the server
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, query })
    })
    .then(response => response.json())
    .then(data => {
        // Display success message and reset form
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', JSON.stringify(error)); // Handle errors
    });    
});

// jQuery to add animations to sections
$(document).ready(function(){
    // Animate sections on load with a delay
    $('section').each(function(index) {
        $(this).delay(500 * index).queue(function() {
            $(this).addClass('visible').dequeue();
        });
    });

    // Fade in text elements with a delay
    $('.animated').each(function(index) {
        $(this).delay(500 * index).queue(function() {
            $(this).addClass('fadeIn').dequeue();
        });
    });
});







$(document).ready(function () {
    $(".fa-bars").click(function () {
      $(this).toggleClass("fa-times");
      $("nav").toggleClass("nav-toggle");
    });
  
    $(window).on("scroll load", function () {
      $(".fa-bars").removeClass("fa-times");
      $("nav").removeClass("nav-toggle");
    });
  
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 6000,
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum + "+");
          },
        }
      );
    });
  
    $(".project").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
  