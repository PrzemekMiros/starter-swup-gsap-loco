function animationMain() {

 // splt({ reveal: true });

 Splitting();


    const reveal = document.querySelectorAll(".char");
    
    gsap.from(reveal, {
      y: "100%",
      duration: .6,
      stagger: .05,
      ease: Power3,
      scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".word",
        start: "top 80%",
      }
    })

    const fadeIn = gsap.utils.toArray('.fadeIn');

      fadeIn.forEach(fadeInItem => {
        gsap.from(fadeInItem, { 
          opacity: 0,
          y: 80,
          duration: 1,
          scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: fadeInItem,
            start: "top 90%",
          }
    })
});

const menuToggle = document.getElementById("menuToggle");

const menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
  stroke: "#fff",
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
  stroke: "#fff",
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	y:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});


}
