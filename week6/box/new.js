const add=document.getElementById("button1");
const gen=document.getElementById("gen_button");

function alien(){
    const ball=document.createElement("div");
    ball.className="color";
    ball.style.backgroundColor=generateHex();
    const cont=document.getElementById("container");
    cont.appendChild(ball);
}

function generateHex() {
    // Define all possible hexadecimal characters
    const characters = '0123456789ABCDEF';
    
    // Initialize an empty string to store the hexadecimal color code
    let hexColor = '#';
    
    // Generate a random hexadecimal color code with six characters
    for (let i = 0; i < 6; i++) {
        hexColor += characters[Math.floor(Math.random() * 16)]; // Pick a random character from the characters array
    }
    
    return hexColor;
}

function randomGen(){
    const con=document.getElementsByClassName("color");
    for(let index=0;index< con.length;index++){
        con[index].style.backgroundColor=generateHex();
    }
}

add.onclick=alien;
gen.onclick=randomGen;