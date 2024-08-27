const box = document.getElementById("asset")
const box1 = document.getElementById("asset1")

box.addEventListener("click", (e)=>{
    if (box.style.backgroundColor === "red") {
box.style.backgroundColor="blue"
    box1.style.backgroundColor="red"
    } else {
        box.style.backgroundColor="red"
    box1.style.backgroundColor="blue"
    }
    
} )

box1.addEventListener("click", (e)=>{
    if (box1.style.backgroundColor === "red") {
box1.style.backgroundColor="blue"
    box.style.backgroundColor="red"
    } else {
        box1.style.backgroundColor="red"
    box.style.backgroundColor="blue"
    }
    
} )
