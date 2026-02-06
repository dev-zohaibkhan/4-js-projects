let buttons = document.querySelectorAll(".button");
let body= document.querySelector("body");

buttons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
            body.style.color = "black"
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
            body.style.color = "black"
        }
        
    })    
})