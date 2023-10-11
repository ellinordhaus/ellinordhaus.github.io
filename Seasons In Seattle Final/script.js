$(document).ready(function() {
    $('.toolbar button').click(function(e) {
        e.preventDefault();  // Prevent the default click action

        var target = $(this).attr('data-target');  // Get the target section's id from the button's data-target attribute
        $('html, body').animate({
            scrollTop: $(target).offset().top  // Calculate the top offset position of the target section
        }, 1000);  // Set the duration of the scrolling animation
    });
});

$(document).ready(function() {
    $('.toolbar button, .navButt').click(function(e) { // Added .navButt class here
        e.preventDefault();

        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });







// Get the modal
    var modal = document.getElementById("myModal");

// Function to open the modal
    function openModal(title, imageSrc, desc) {
        modal.style.display = "block";
        document.body.classList.add('modal-open'); // Add class to body to overlay background
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalImg").src = imageSrc;
        document.getElementById("modalDesc").innerText = desc;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        document.body.classList.remove('modal-open'); // Remove class from body to restore original background
    }}