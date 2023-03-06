// <------------BLUR effect------------------>

let blob=document.getElementById("blob");

window.addEventListener('pointermove',(event)=>{
    const {clientX,clientY}=event;
    console.log(clientX)
    console.log(clientY)

    blob.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:3000,fill:"forwards"});
})



// <---------------Text effect-------------------->
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("h1").addEventListener('mouseover',(event)=>{
    let iterations=0;

    let interval=setInterval(()=>{
         event.target.innerText=event.target.innerText.split('')
          .map((letter,index)=>{
            console.log(index)
            if(index<iterations){
                console.log(event.target)
                return event.target.dataset.value[index];
            }
             return letters[Math.floor(Math.random()*26)]
         })
         .join('');

         if(iterations>=event.target.dataset.value.length) {
            clearInterval(interval)
        }

         iterations+=1/4;
    },30)
})