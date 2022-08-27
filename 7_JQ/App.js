
$(document).ready(function () {
    $(".btn-toggle-show").click(toggleText(".inner-content"));

    function toggleText(element) {
        return function (e) {
            $(this).parent().find(element).slideToggle(300);
            $(this).parent().find(element).toggleClass("para-hide");
            $(this).find("i").toggleClass("rotate");
        }
    }
});