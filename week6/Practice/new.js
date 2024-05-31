const myp1= document.getElementById("p1")
//alert(myp1.innerText)
myp1.style.color="red";
myp1.innerText ="I'm over the moon"
const mybut = document.getElementById("button1")
mybut.innerText="Click me"
mybut.onclick=sayhi;
function sayhi(){
    alert("Hey there i am here")
}
