

$(document).ready(function(){
    $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on("click", (() => {
        $('.image:odd').fadeToggle(900);
    }));

    $('.list-item:eq(4)').on("click", (() => {
        $('.image:even').animate({
            opacity: "toggle",
            height: 'toggle'
        }, 2000);
    }));

});

