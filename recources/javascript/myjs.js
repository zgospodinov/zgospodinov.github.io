$('document').ready(function () {

    $('#about-title-experience').on("click", function () {
        $('#container-experience').slideToggle({
            direction: 'left'
        }, 600);

        if ($('#icon-experience').hasClass('ion-chevron-down')) {
            $('#icon-experience').removeClass('ion-chevron-down');
            $('#icon-experience').addClass('ion-chevron-up');
        } else {
            $('#icon-experience').removeClass('ion-chevron-up');
            $('#icon-experience').addClass('ion-chevron-down');
        }
    });

    $('#about-title-education').on("click", function () {
        $('#container-education').slideToggle({
            direction: 'left'
        }, 600);
        if ($('#icon-education').hasClass('ion-chevron-down')) {
            $('#icon-education').removeClass('ion-chevron-down');
            $('#icon-education').addClass('ion-chevron-up');
        } else {
            $('#icon-education').removeClass('ion-chevron-up');
            $('#icon-education').addClass('ion-chevron-down');
        }
    });

    $('#about-title-skills').on("click", function () {
        $('#container-skills').slideToggle({
            direction: 'left'
        }, 600);
        if ($('#icon-skills').hasClass('ion-chevron-down')) {
            $('#icon-skills').removeClass('ion-chevron-down');
            $('#icon-skills').addClass('ion-chevron-up');
        } else {
            $('#icon-skills').removeClass('ion-chevron-up');
            $('#icon-skills').addClass('ion-chevron-down');
        }
    });
});