$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.burger__menu').toggleClass('burger__active')
        $('.navbar-right').toggleClass('active')
        $('.header__burger').toggleClass('burger__close')
    })
})