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

// const navLink = document.querySelector('nav a');

const navLink = document.querySelectorAll('nav a');

// navLink[0].addEventListener('focus', (event)=>{
//     event.target.style.border = '10px solid red';
// });

// navLink[0].addEventListener('blur',(event)=>{
//     event.target.style.border = 'none';
// })

// navLink[1].addEventListener('focus', (event)=>{
//     event.target.style.border = '10px solid red';
// });

// navLink[1].addEventListener('blur',(event)=>{
//     event.target.style.border = 'none';
// })

navLink.forEach((item)=>{
    item.addEventListener('focus', (event)=>{
        event.target.style.border = '10px solid red';
    });
});

navLink.forEach((item)=>{
    item.addEventListener('blur', (event)=>{
        event.target.style.border = 'none';
    });
});


//keydown
// wasd - move the bus? emoji sprite?

//click
//on the bus -  color change cycle filter


const imgs = document.querySelectorAll('img');

imgs[0].addEventListener('dblclick', (event)=>{
    event.target.style.filter = 'brightness(73%) hue-rotate(100deg) saturate(1000%) contrast(189%) invert(100%) drop-shadow(0px 0px 21px #ecff3d)';
    event.target.style.dropShadow = '0px 0px 21px #ecff3d';
// -webkit-filter: brightness(73%) hue-rotate(185deg) saturate(1000%) contrast(189%) invert(100%) drop-shadow(0px 0px 21px #ecff3d);
// -moz-filter: brightness(73%) hue-rotate(185deg) saturate(1000%) contrast(189%) invert(100%) 
});

imgs[0].addEventListener('click',(event)=>{
    event.target.style.filter = 'brightness(73%) hue-rotate(190deg) saturate(1000%) contrast(189%) invert(100%) drop-shadow(0px 0px 21px #ecff3d)';
    event.target.style.dropShadow = '0px 0px 21px #ecff3d';
})


//contextmenu
// alert...?

const contextEffect = document.querySelectorAll('p,a,h1,h2');

contextEffect.forEach( (item) => {
    item.addEventListener('contextmenu',(e)=>{
        e.target.style.backgroundColor = 'white';
    });
});


//mouseover (or mouseenter/mouseleave)
imgs.forEach((item)=>{
    item.addEventListener('mouseenter', (e)=>{
        let randInt = Math.floor(Math.random() * 360) + 1  ;
        e.target.style.filter = `blur(20px) brightness(73%) hue-rotate(${randInt}deg) saturate(1000%) contrast(189%) invert(100%) drop-shadow(0px 0px 21px #ecff3d)`;
        
    });
});

imgs.forEach((item)=>{
    item.addEventListener('mouseleave', (e)=>{
        e.target.style.filter ='none';
    });
});




//select
//highlighter effect?

contextEffect.forEach((item)=>{
    item.addEventListener('mouseover', (e)=>{
        e.target.style.color = '#ff5555';
    });
});

contextEffect.forEach((item)=>{
    item.addEventListener('mouseleave', (e)=>{
        e.target.style.color = '#ffffff';
    });
});

//visibilitychange (tab)
//alert: don't leave!

window.addEventListener('visibilitychange',(e)=>{
    alert("Party's over!");
})
