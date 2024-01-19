const logo = document.querySelector("img")
//agrega y elimina borde
logo.addEventListener("click", () => {
    if (logo.style.border === '2px solid red') {
        logo.style.border = 'none'
    } else {
        logo.style.border = '2px solid red'
    }
})
