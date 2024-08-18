let isBurgerOpened = false;

$('#burger').click(function () {
    isBurgerOpened = !isBurgerOpened;
    $(this).html(isBurgerOpened ? '&times;' : '&equiv;');
    $('.menu').animate({ left: (isBurgerOpened ? "0px" : "-320px") })
});