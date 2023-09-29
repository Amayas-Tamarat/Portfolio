$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


// let alertShown = false;

// function checkYValue() {
//     const y = window.scrollY;
//     console.log(y);

//     if (y >= 255 && !alertShown) {
//         alert("Y has reached or exceeded 255!");
//         alertShown = true;
//     }
// }

// setInterval(checkYValue, 100);




function elementScroll() {
    const windowHeight = window.innerHeight;

    // Get the positions of the elements
    const profilPosition = profil.getBoundingClientRect().top;
    const portTextPosition = portfolio_text.getBoundingClientRect().top;

    // Check if the elements are within the viewport
    if (profilPosition < windowHeight) {
        profil.classList.add('in-view');
    } else {
        profil.classList.remove('in-view');
    }

    if (portTextPosition < windowHeight) {
        portfolio_text.classList.add('in-view');
    } else {
        portfolio_text.classList.remove('in-view');
    }

    // Loop through the card elements and check their positions
    const cards = document.querySelectorAll('.cards__item');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < windowHeight) {
            card.classList.add('in-view');
        } else {
            card.classList.remove('in-view');
        }
    });
}

// Call the elementScroll function on page load and scroll
window.addEventListener('load', elementScroll);
window.addEventListener('scroll', elementScroll);