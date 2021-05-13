let player = document.querySelector("#doc")

let audio=new Audio("Knife-Stab-A1-www.fesliyanstudios.com.mp3")

let a = parseInt(window.getComputedStyle(player, null).getPropertyValue("left"))


//To move the player right
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 39) {
        a += 20
        if (a > window.innerWidth - 350) {
            a = window.innerWidth - 350
        }
        player.style.left = a + "px"
        document.querySelector("#player").style.transform = "scaleX(-1)"
        document.querySelector("#syringe").style.transform = "scaleX(1) rotate(80deg)"
        document.querySelector("#syringe").style.left = "240px"

    }

    else if (e.keyCode == 32 && a > 0) {
        document.querySelector("#doc").style.transform = "skewX(-35deg)"
        document.querySelector("#doc").style.transition = "0.2s"
        document.querySelector("#syringe").style.transition = "0.2s"
        document.querySelector("#syringe").style.left = "300px"
        document.querySelector("#syringe").style.top = "100px"
        setTimeout(() => {
            document.querySelector("#doc").style.transform = "skewX(0deg)"
            document.querySelector("#syringe").style.left = "240px"
            document.querySelector("#syringe").style.top = "70px"
        }, 300);
        setTimeout(() => {
            document.querySelector("#doc").style.transition = "0.1s"
            document.querySelector("#syringe").style.transition = "0.1s"

        }, 400);
    }

})

//To move the player left

window.addEventListener("keydown", function (e) {
    if (e.keyCode == 37) {
        a -= 20
        if (a < 50) {
            a = 50
        }
        player.style.left = a + "px"
        document.querySelector("#player").style.transform = "scaleX(1)"
        document.querySelector("#syringe").style.transform = "scaleX(-1) rotate(80deg)"
        document.querySelector("#syringe").style.left = "-40px"

    }

    else if (e.keyCode == 32 && document.querySelector("#player").style.transform == "scaleX(1)") {
        document.querySelector("#doc").style.transform = "skewX(35deg)"
        document.querySelector("#doc").style.transition = "0.2s"
        document.querySelector("#syringe").style.transition = "0.2s"
        document.querySelector("#syringe").style.left = "-100px"
        document.querySelector("#syringe").style.top = "100px"
        setTimeout(() => {
            document.querySelector("#doc").style.transform = "skewX(0deg)"
            document.querySelector("#syringe").style.left = "-40px"
            document.querySelector("#syringe").style.top = "70px"
        }, 300);
        setTimeout(() => {
            document.querySelector("#doc").style.transition = "0.1s"
            document.querySelector("#syringe").style.transition = "0.1s"

        }, 400);
    }
})

// //Shooting part
//score
let score=0
//score
window.addEventListener("keydown", function (e) {
    let beta = document.querySelector("#patient")
    let xA = parseInt(window.getComputedStyle(document.querySelector("#doc"), null).getPropertyValue("left"))
    let xB = parseInt(window.getComputedStyle(beta, null).getPropertyValue("left"))
    let abst = Math.abs(xA - xB)
    if (abst < 225 && e.keyCode == 32) {
        beta.style.display = "none"
        score++
        // console.log(score)
        document.querySelector("#score").innerText="Score: "+score
        audio.play()
    }
    setTimeout(() => {
        beta.style.display = "inline-block"
    }, 2200);
  
})

//Game overing part
setInterval(() => {
    let out=parseInt(window.getComputedStyle(document.querySelector("#patient"),null).getPropertyValue("left"))
    if(out<-300){
        let restart=alert("Game over \n Click on Ok or refresh the page to play again")
        if(restart==undefined){
            location.reload()
        }
    }
}, 500);

