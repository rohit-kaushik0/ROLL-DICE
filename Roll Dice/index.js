var arr = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"];

function rolldice()

{
    var random1=arr[Math.floor(Math.random()*6)];
    var random2=arr[Math.floor(Math.random()*6)];
    document.querySelector("img.img1").src =random1;  // Use the random image
    document.querySelector("img.img2").src=random2;
    if(random1>random2){
        document.querySelector("h1").innerHTML="✌️ Player 1 wins ";
    }
    else if(random1<random2){
        document.querySelector("h1").innerHTML="Player 2 wins ✌️";
    }

    else if (random1==random2){
        document.querySelector("h1").innerHTML="Draw ! 🤝";
    }
}


