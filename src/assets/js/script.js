function animationMain() {

 // splt({ reveal: true });

 Splitting();

 locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".scrollContainer", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

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
	ease: Power4. easeOut,
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: Power4. easeOut,
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});



// parallax 

gsap.utils.toArray(".parallax-wrap").forEach(function(container) {
  let image = container.querySelector("img");

  let tl = gsap.timeline({
      scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: container,
        scrub: true,
        pin: false,
      },
    }); 
    tl.from(image, {
      yPercent: -10,
      ease: "none",
    }).to(image, {
      yPercent: 10,
      ease: "none",
    }); 
});




}



// Intro

gsap.from(".scrollContainer", {
  autoAlpha: 0,
  opacity: 0,
  duration: 1
});


gsap.to(".logo-wrap-inner", {
  opacity: 0, 
  delay: 3,
  duration: 1
});

gsap.from(".menu-toggle", {
  autoAlpha: 0,
  opacity: 0,
  delay: 3,
})

gsap.from(".logo-line-1", {
  height: 0,
  duration: 1.5
});
gsap.from(".logo-line-2", {
  height: 0,
  duration: 1.3
});
gsap.from(".logo-line-3", {
  height: 0,
  duration: 2
});


tlintro = gsap.timeline();

tlintro.from(".logo-wrap", {
  y: "28vh",
  x: "20vw",
  width: "40vw",
  delay: 2,
  duration: 1
});



