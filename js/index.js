// Your code goes here


function bgColor (colorString){
    document.body.style.backgroundColor = colorString;
}
function fontColor (colorString){
    document.body.style.color = colorString;
}



//works
document.addEventListener('DOMContentLoaded', () => {
    bgColor('#aaeeff');
    fontColor('#58a');
});


//works: 
document.addEventListener('scroll', () => {
    bgColor('#55f');
    fontColor('#aff');
});


//works
window.addEventListener('resize', () => {
    bgColor('#f04');
    fontColor('#fee');
});




//focus & blur (2-3/10)
//glow effect

const navLink = document.querySelector('nav a');

navLink.addEventListener('focus', ()=>{
    event.target.style.border = '10px solid red';
});

navLink.addEventListener('blur',()=>{
    event.target.style.border = 'none';
})


//keydown
// wasd - move the bus? emoji sprite?

//click
//on the bus -  color change cycle filter

//contextmenu
// alert...?

//dblclick
// on the bus - PARTY (anim start)

//mouseover (or mouseenter/mouseleave)
//mouseover: add blur
//mouseleave: remove blur


//select
//highlighter effect?

//visibilitychange (tab)
//alert: don't leave!



