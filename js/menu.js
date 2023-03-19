$(function () {
    $(".nav> li").click(function (event) {
        event.preventDefault();

        let tg = $(this);
        let i = tg.index();

        let section = $("#wrap > div").eq(i);
        let tt = section.offset().top;

        $("html, body").stop().animate({ scrollTop: tt });
    });
});
