$(document).ready(function () {

    $('.js--aboutMe-section').waypoint(function (direction) {
        if (direction == "down") {
            $('.header-text-box').addClass('sticky');
        } else {
            $('.header-text-box').removeClass('sticky');
        }

    }, {
        offset: '70px;'
    });

    $('.js--aboutMe-section').waypoint(function (direction) {
        if (direction == "down") {
            $('.header-text-box').addClass('sticky');
        } else {
            $('.header-text-box').removeClass('sticky');
        }

    }, {
        offset: '70px;'
    });

    $('.mini-nav-icon').click(function () {
        var icon = $('.mini-nav-icon i');
        $('nav').slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');

        }

    })
});
