var arr = ["/images/dice1.png", "/images/dice2.png", "/images/dice3.png", "/images/dice4.png", "/images/dice5.png", "/images/dice6.png"];

function rolldice()
{
    document.querySelector("img.img1").src = arr[Math.floor(Math.random()*6)];  // Use the random image
    document.querySelector("img.img2").src=arr[Math.floor(Math.random()*6)];
}
