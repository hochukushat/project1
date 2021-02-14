
var count = 0;

function timer(){
    count++;
    document.getElementById("count").innerHTML= `${count}`;
    setTimeout("timer()",2000);
}

  const dyno = document.getElementById("dyno");
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
    let isAlive2 = setInterval (function(){
        let dynoTop2 = parseInt(window.getComputedStyle(dyno).getPropertyValue("top"));
        let kustLeft2 = parseInt(window.getComputedStyle(kust).getPropertyValue("left"));
          if(kustLeft2 < 50 && kustLeft2 > 0 && dynoTop2 >= 140) {
              count=0;
              alert(`GAME OVER ${count}`);
          }
  
      }, 10);
