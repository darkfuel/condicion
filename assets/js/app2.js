const btn = document.querySelector('button')
const tot = document.querySelector('.total')
const mgs = document.querySelector('p')

//suma y valida cantidades
btn.addEventListener('click', () => {
    const st1 = document.getElementById('st1').value
    const st2 = document.getElementById('st2').value
    const st3 = document.getElementById('st3').value
    const SumTotal = (+st1 + +st2 + +st3)
    tot.innerHTML = SumTotal
        if (SumTotal > 10) {
            mgs.innerHTML = 'Solo puedes seleccionar 10 stickers'
        }
        else {
            mgs.innerHTML = 'Gracias por su compra'
        }
    })
