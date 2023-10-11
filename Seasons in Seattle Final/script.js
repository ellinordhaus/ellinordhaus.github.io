// Function to open the modal
function openModal(title, imageSrc, desc, background) {
    var modal = document.getElementById("myModal");
    var backdrop = document.getElementById("modalBackdrop");
    modal.style.display = "block";
    backdrop.style.display = "block";
    modal.style.backgroundColor = background;
    document.body.classList.add('modal-open');
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalImg").src = imageSrc;
    document.getElementById("modalDesc").innerText = desc;
}

$(document).ready(function() {
    $('.toolbar button, .navButt').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        var modal = document.getElementById("myModal");
        var backdrop = document.getElementById("modalBackdrop");
        backdrop.style.display = "none";
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    };
});
