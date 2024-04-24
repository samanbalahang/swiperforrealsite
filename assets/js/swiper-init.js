var nested = new Swiper(".nested", {
    nested:true,
    mousewheel: true,
    direction: "vertical",
    on:{
        init: function () {
            console.log('swiper initialized');
            $(".swiper-slide-active").find(".each-card:nth-child(2)").find(".card").addClass("animate__animated animate__fadeInUp");
            $(".swiper-slide-active").find(".each-card:first-child").find(".card").addClass("animate__animated animate__fadeInBottomLeft");
            $(".swiper-slide-active").find(".each-card:nth-child(3)").find(".card").addClass("animate__animated animate__fadeInBottomRight");
        },
        slideChange: function() {
            console.log('swiper slideChange');
        },
        slideChangeTransitionEnd: function() {
            console.log("slideChangeTransitionEnd");
            $(".swiper-slide-active").find(".each-card:nth-child(2)").find(".card").addClass("animate__animated animate__fadeInUp");
            $(".swiper-slide-active").find(".each-card:first-child").find(".card").addClass("animate__animated animate__fadeInBottomLeft");
            $(".swiper-slide-active").find(".each-card:nth-child(3)").find(".card").addClass("animate__animated animate__fadeInBottomRight");
        },
        sliderMove:function() {
            console.log("change");
        },
    },    
  });
  var nested2 = new Swiper(".nested2", {
    mousewheel: true,
    nested:true,
  });