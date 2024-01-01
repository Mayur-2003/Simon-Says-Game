let gameseq = [];
let userseq = [];

let started = false;
let level =0;

let heading = document.querySelector("h2");

let btns = ["red","green","yellow","blue"]; //0 to 3 index

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Games Started");
        started = true;

        levelUp();
    }
})

function levelUp (){
    userseq=[];
    level++;
    heading.innerText = `Level ${level}`;
    //random buton choose
    let randIndex = Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`); //selecting div with color class
    gameseq.push(randColor);
    console.log(gameseq);
    console.log(`button pressed: ${randbtn}`);
    gameFlash(randbtn);
}

function gameFlash(btn){
    btn.classList.add("flash"); //bg white
    setTimeout(function(){          //remove white bg to make original bg
        btn.classList.remove("flash")
    },200)
}

function userFlash(btn){
    btn.classList.add("userflash"); //bg pink
    setTimeout(function(){          //remove pink bg to make original bg
        btn.classList.remove("userflash")
    },200)
}

function btnPress(){
    console.log("button was pressed !!");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

function checkAns(idx){
    // let idx=level-1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
       setTimeout(levelUp,1000);
    }}
    
    else{
        heading.innerHTML = `Game Over!! Your Score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150)
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}