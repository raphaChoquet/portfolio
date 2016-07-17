$(function () {
    $('.card').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $(id).modal()
    });
});
