let circle = document.querySelector("#circle");
let frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame =>{
    frame.addEventListener("mousemove", function(dets){

    let dims = frame.getBoundingClientRect();
    console.log(dims);

    let xStart = dims.x;
    let xEnd = dims.x + dims.width;

    let zeroone = gsap.utils.mapRange(xStart, xEnd, 0, 1, dets.clientX);
    
    lerp(-50, 50, zeroone); 

    gsap.to(circle,{
        scale: 8,
    })

    gsap.to(frame.children, {
        color: "white", 
        duration : .4,
        y: "-5vw"
    })

    gsap.to(frame.children, {
        x: lerp(-50, 50, zeroone),
        duration: .3, 
    })
})

frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle,{
        scale: 1, 
    })

    gsap.to(frame.children, {
        color: "black", 
        duration : .4,
        y: 0,  
    })

    gsap.to(frame.children, {
        x: 0,
        duration: .3, 
    })
})
})

window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo,
    })
})


