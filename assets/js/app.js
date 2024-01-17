
const logo = document.querySelector("img")
bd = logo.style.border

logo.addEventListener("click", ()=> {
    if (bd == ''){
        bd = '2px solid red'
    }
      else{
   bd = 'blue'
    //clase.replace("bd-none","bd-red")
    }

})


const st2 = Number(document.getElementById("st2").value)
const st1 = Number(document.getElementById("st1").value)
const st3 = Number(document.getElementById("st3").value)
const tot = document.querySelector('.total')



addEventListener('click', () => {
    const SumTotal=(st1+st2+st3)
    tot.innerHTML= SumTotal
    if (tot.value > 10) {
        alert('Solo puedes seleccionar 10 Stickers')
    }
    else{
        alert('Llevas seleccionado  ', + tot)
    }
})

