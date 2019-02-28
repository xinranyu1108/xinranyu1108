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
});
