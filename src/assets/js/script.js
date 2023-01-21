function animationMain() {

    splt({});
    
    gsap.from(".char", {
      y: 100,
      duration: .5,
      stagger: .03,
      ease: Power4,
      scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".splt",
        start: "top 80%",
      }
    })

    gsap.from(".fadeIn", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: Power4,
        scrollTrigger: {
            scroller: ".scrollContainer",
            trigger: ".fadeIn",
            start: "top 80%",
          }
    })
    

}
