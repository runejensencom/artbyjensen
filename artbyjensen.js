<script src="https://cdn.jsdelivr.net/gh/runejensencom/artbyjensen/artbyjensen.js"></script>
<script src="https://runejensen.com/gsap/gsap.min.js"></script>
<script src="https://runejensen.com/gsap/ScrollTrigger.min.js"></script>
<script src="https://runejensen.com/gsap/ScrollSmoother.min.js"></script>
<script src="https://runejensen.com/gsap/Flip.min.js"></script>
<script>

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
     duration: 1
    }, 
    {
     width: "5em",
     height: "5em",
     marginRight: "45em",
     marginTop: "60em",
     rotation: 90,
     duration: 1
    });

</script>
