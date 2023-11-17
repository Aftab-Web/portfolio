let tl = gsap.timeline();

tl.to('.away',{
    translateY: 0,
    height:0,
    duration: .3,
})
tl.from(".content ul li",{
    x: 0,
    duration: 0.6,
    delay: 2000
})
tl.from(".t-ab",{
    scale:1.3,
    duration:1,
    yoyo: true,
    repeat:-1
})

tl.to('.fill',{
    width: '75%',
    duration: .5,
    scrollTrigger:{
        trigger: '.fill',
        scroller: 'body',

    }
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
})

AOS.init();