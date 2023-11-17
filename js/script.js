let tl = gsap.timeline();

tl.to('.away',{
    translateY: 0,
    height:0,
    duration: .3,
})
gsap.from(".content ul li",{
    x: 0,
    duration: 0.6,
    delay: 2
})

gsap.to('.fill',{
    width: '75%',
    duration: .5,
    scrollTrigger:{
        trigger: '.fill',
        scroller: 'body',
    }
})
gsap.to(".t-ab",{
    scale:1.3,
    duration:1,
    yoyo: true,
    repeat:-1
})


// tl.from(".sidebar a p",{
//     y:5,
//     duration:.5,
//     stagger: .5,
//     delay: .2
// })

$(function(){
    $('.dragger').click(function(){
        $('.sidebar').css( 'transform' , "translateX(0)")
    })
    $('.close').click(function(){
        $('.sidebar').css( 'transform' , "translateX(-1000px)")
    })



    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
           $('.top').addClass('newClass');
        } else {
           $('top').removeClass('newClass');
        }
    });
})

AOS.init();