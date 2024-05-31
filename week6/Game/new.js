const mybut = document.getElementById("but1")

mybut.innerText="Click me"
mybut.onclick=sayhi
function sayhi(){
   // alert("Hey there i am here")
    const ball= document.getElementById("ball")
    ball.className="ball";
    const cont=document.getElementById("container");
    cont.appendChild(ball);
}


