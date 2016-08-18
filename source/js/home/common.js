// JavaScript Document
(function ($) {
    $('.top-navHandler').click(function () {
        $('.top-nav').toggleClass('active');
        $(this).toggleClass('active');
        $('.user-nav').removeClass('active');
        $('.userNavHandler').removeClass('active');
    });

    $('.userNavHandler').click(function () {
        $('.user-nav').toggleClass('active');
        $(this).toggleClass('active');
        $('.top-nav').removeClass('active');
        $('.top-navHandler').removeClass('active');
    });

    // Manu bar
    $(".top-navHandler").on("click", function (e) {
        $(".side_nav").toggleClass("side_nav_active");
    });
    // City bar
    $(".select_city > span").on("click", function (e) {
        $(".city_container").slideToggle(500);
    });
    $(".rhtStickyBtn").on("click", function (event) {
        event.preventDefault();
        $("body").toggleClass("Requirement_animate");
        $("#VerificationReq").css("display", "none");
        $("#maindiv").css("display", "block");
        $("#thanksdivReq").css("display", "none");
        ShowPostRequirement();
    });
    $("a.Requirement-close, div[data-overlay-form]").on("click", function (event) {
        event.preventDefault();
        $("body").toggleClass("Requirement_animate");
    });
    /*=====*/
    $(".search_overlay").click(function (e) {
        $(".moreSearch").fadeOut();
        $(".more-arrow > a").removeClass("active");
        $(this).parent(".search-panel").animate({ height: 145 + "px" }, 500, function () {
            $("#searchPropertyForm").removeClass("search_bar_center");
            $(".search_overlay").fadeIn(500);
        });
    });
    /*=====*/
    $(".more-arrow > a").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $(".moreSearch").fadeToggle();
        if ($(window).width() < 1024) {
            $("#searchPropertyForm").addClass("sumanta");
        } else {

        };
    });



    if ($(window).width() < 1024) {
        // Mobile
        $('.m-search-btn').click(function () {
            $('.inline-block').toggleClass('hidden-xs');
        });
        // Search Function
        $('#search_city').click(function () {
            $('.inline-block').addClass('inline-block-active');
            $('.search_overlay').fadeIn(500);
        });
        /*		$('.search_overlay').click(function() {
                    $('.inline-block').removeClass('inline-block-active');
                    $('.search_overlay').fadeOut(500);
                });*/
        // Mobile City
        /*$('.userCityHandler').click(function() {
            $('.city-container-mobile').toggleClass('city_container_active');
        });*/
        // $("input[real='click']").click(function (e) {
        //    $(this).parents(".search-panel").animate({ height: 100 + "%" }, 500, function () {
        //        $(".search_overlay").fadeIn(500);
        //    });
        //    $("#searchPropertyForm").addClass("search_bar_center");
        //});
    } else {
        $("input[real='click']").click(function (e) {
            $(this).parents(".search-panel").animate({ height: 100 + "%" }, 500, function () {
                $(".search_overlay").fadeIn(500);
            });
            $("#searchPropertyForm").addClass("search_bar_center");
        });
        /*===*/
        $("ul[role='byeRent'] > li").on("click", function (event) {
           // event.preventDefault();
            $("ul[role='byeRent'] > li").removeClass("active");
            $(this).toggleClass("active");
        });
    }

})(jQuery);


//! function (e) {
//    e(".top-navHandler").click(function () {
//        e(".top-nav").toggleClass("active"), e(this).toggleClass("active"), e(".user-nav").removeClass("active"), e(".userNavHandler").removeClass("active")
//    }),
//    e(".userNavHandler").click(function () {
//        e(".user-nav").toggleClass("active"),
//        e(this).toggleClass("active"),
//        e(".top-nav").removeClass("active"),
//        e(".top-navHandler").removeClass("active"),
//        e(".user-nav-overlay").show()
//    }),
//    e(".user-nav-overlay").click(function () {
//        e(".user-nav").removeClass("active"),
//        e(".user-nav-overlay").hide()
//    }),
//    e(window).width() < 1024 ? (e(".m-search-btn").click(function () {
//        e(".inline-block").toggleClass("hidden-xs")
//    }), e("#txtLocation").click(function () {
//        e(".inline-block").addClass("inline-block-active"), e(".search_overlay").fadeIn(500)
//    }), e(".search_overlay").click(function () {
//        e(".inline-block").removeClass("inline-block-active"), e(".search_overlay").fadeOut(500)
//    })) : (e("input[real='click']").click(function (a) {
//        e(this).parents(".search-panel").animate({
//            height: "100%"
//        }, 500, function () {
//            e(".search_overlay").fadeIn(500)
//        }), e("#searchPropertyForm").addClass("search_bar_center")
//    }), e(".search_overlay").click(function (a) {
//        e(this).parent(".search-panel").animate({
//            height: "75px"
//        }, 500, function () {
//            e("#searchPropertyForm").removeClass("search_bar_center"), e(".search_overlay").fadeIn(500)
//        })
//    })), e(".top-navHandler").on("click", function (a) {
//        e(".side_nav").toggleClass("side_nav_active")
//    }), e(".select_city > span").on("click", function (a) {
//        e(".city_container").slideToggle(500)
//    })
//}(jQuery);