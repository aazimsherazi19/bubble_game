let timer = 61;
let score = 0;
let hitrn = 0;
let skipBtn = document.querySelector("#skip");
let ngBtn = document.querySelector("#newGame");


const makeBubble = ()=>{
    let clutter = "";
    for(let i = 1; i<=184; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
  
    document.querySelector(".g-btm").innerHTML = clutter;
}

const getNewHit = ()=>{
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;

    
}


const runTimer = ()=>{
    setInterval(()=>{
        if(timer > 0){
            timer--;
        } else {
            clearInterval(runTimer);
            
            document.querySelector(".g-btm").innerHTML = `<h1 class="m-top">Game Over! Your Score is ${score}</h1>`;
        }
     document.querySelector("#timer").textContent = timer;
    },1000) 
}


const incScore = ()=>{
  score += 10;
  document.querySelector("#score").textContent = score;
}
skipBtn.addEventListener("click", ()=>{
    if(timer > 0){
        makeBubble();
        getNewHit();
    }
    
})

ngBtn.addEventListener("click", ()=>{
    makeBubble();
    getNewHit();
    timer = 60;
    runTimer();
    score = 0;
    document.querySelector("#score").textContent = score;
})

let bubbles = document.querySelector(".g-btm");
bubbles.addEventListener("click", (dets)=>{
   let clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        incScore();
        makeBubble();
        getNewHit();
    } else {
        makeBubble();
        getNewHit();
    }
})
makeBubble();
getNewHit();
runTimer();

