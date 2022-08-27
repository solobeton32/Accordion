
$(document).ready(function () {
    $('.accordion_desc').hide();
    $('.accordion_title').on('click', function () {
        $(this).next().slideToggle('slow');
        $(this).parent().toggleClass('active');
        $('.accordion_title').not(this).next().slideUp('slow');
        $('.accordion_title').not(this).parent().removeClass('active');
    });
});