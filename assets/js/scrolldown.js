$(function () {
    $('.scroll-down').click(function (e) {
        e.preventDefault();

        const targetId = $(this).attr('href');
        const targetElement = $(targetId);

        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 'slow');
    });
});
