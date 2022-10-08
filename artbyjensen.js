//  SCROLL IMAGE FIVE 
let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".resume",
		start: "top bottom",
    end: "top 80%",
		scrub: 0.5
  }
});

tl9.fromTo(".sticky-image-item-five", {
     width: "5em",
     height: "5em",
     marginRight: "45em",
     marginTop: "25em",
     rotation: 0,
     duration: 1,
    }, 
    {
     width: "5em",
     height: "5em",
     marginRight: "45em",
     marginTop: "60em",
     rotation: 90,
     duration: 1,
    });