let t1 = gsap.timeline();
t1.from(".nav a",{
    y:-50,
    duration:1,
    // delay:0.5,
    opacity:0,
    stagger:0.3
})

Shery.mouseFollower();
Shery.makeMagnet(".main h1" ,{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

t1.from(".main h1",{
    x:-100,
    opacity:0,
    duration:2,
    stagger:0.4
})

t1.from('img',{
    x:100,
    rotation:45,
    opacity:0,
    duration:0.5,
    stagger:1
})
t1.from(".about h2",{
    x:-100,
    opacity:0,
    duration:2,
    stagger:1
})