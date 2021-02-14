const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

var count = 0;

function timer(){
    count++;
    document.getElementById("count").innerHTML= `${count}`;
    setTimeout("timer()",2000);
}

  const dyno = document.getElementById("ford");
  const cactus = document.getElementById("cactus");
  const kust = document.getElementById("kust");

 
  document.addEventListener("keydown", function(event) {
      jump();
  });
  function jump() {
    if (dyno.classList !="jump") {
        dyno.classList.add("jump");
    }
    setTimeout(function(){
        dyno.classList.remove("jump");
    },800);
  }

  let isAlive = setInterval (function(){
      let dynoTop = parseInt(window.getComputedStyle(dyno).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if(cactusLeft < 50 && cactusLeft > 0 && dynoTop >= 140) {
            count=0;
            alert(`GAME OVER ${count}`);
        }

    }, 10);
