var clock=6;
var score=0;
var hitrn=0;

function makebubble() {var clutter="";

for(var i=1;i<=140;i++){

  var rn=Math.floor(Math.random()*10);
  clutter+= `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML=clutter;

}



function runtimer(){

  var timeint=setInterval(function(){
    if(clock>0){
      clock--;
      
   document.querySelector("#timerval").textContent=clock;
    }
    else{
      clearInterval(timeint);
      document.querySelector("#pbottom").innerHTML=`<h1>Game Over!
      Your Score is ${score}<\h1>`
    }
  
  },1000)
}
  
function getnewHit(){
  hitrn=Math.floor(Math.random()*10);

  document.querySelector("#Hit").textContent=hitrn;
}

function increasescore(){
     score+=10;
    document.querySelector("#Score").textContent=score;


}
function clicker(){
  document.querySelector("#pbottom").addEventListener('click',function(details){
   
    var clickedNumber=Number(details.target.textContent);

    if(clickedNumber === hitrn){
      increasescore();
      makebubble();
      getnewHit();

    }
    
    
  })

}
// Details in above function just gives the input we get or the div we get after clicking something and .target helps us to display it on console
// textContent is Used to display the text
// Number COnverts the string character of number into an actual number
makebubble();
runtimer();
getnewHit();
clicker();
