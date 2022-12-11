$('.slider').slick();

$('.testimonials').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'linear'
});

$(".list-nav .list-nav-item").click(function () { 
    $(".list-nav .selected").removeClass("selected")
    $(this).addClass("selected");
    var active = $(".list-nav .selected").attr("data")
    switch(active){
        case '1':
            $(".listing .active").removeClass("active")
            $(".listing .top-sellers").addClass("active");
            break;
        case '2':
            $(".listing .active").removeClass("active")
            $(".listing .featured").addClass("active");
            break;
        case '3':
            $(".listing .active").removeClass("active")
            $(".listing .most-reviews").addClass("active");
            break;
    }
});