function page1(){
    let tl = gsap.timeline();

tl.from("nav h1, nav a, nav button", {
    y:-30,
    opacity: 0, 
    delay: 0.5, 
    duration: 0.9,
    stagger: 0.2
})

tl.from(".center-part-1 h1", {
    x:-300, 
    opacity:0,
    duration:0.5
})

tl.from(".center-part-1 p", {
    x:-200, 
    opacity:0,
    duration:0.4
})

tl.from(".center-part-1 button", { 
    opacity:0,
    duration:0.3
})

tl.from(".center-part-2 img", {
    opacity:0,
    duration:0.5,
    x:200
},"-=1")

tl.from(".sectionBottom1 img",{
    opacity:0, 
    duration:0.5,
    y:30,
    stagger:0.15
})
}

page1();

function page2(){
    let timeLine = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 70%",
        end:"top 0%",
        scrub:2
    }
})

timeLine.from(".services",{
    x:-100,
    opacity:0,
    duration:0.5
})

timeLine.from(".card.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
},"first")

timeLine.from(".card.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"first")

timeLine.from(".card.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"second")

timeLine.from(".card.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"second")
}

page2();
