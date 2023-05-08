let text = "I am Ogunmepon Sharafa Sopurochukwu, i reside at Gberigbe Ikorodu "
let index = 0
let speed = 100
let effectText = document.querySelector("#effectText")

function typeEffect(){
    if (index < text.length) {
        effectText.textContent += text.charAt(index)
        index++ 

        setTimeout(typeEffect, speed);
    }
}


// startEffect.addEventListener('click', typeEffect )