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




