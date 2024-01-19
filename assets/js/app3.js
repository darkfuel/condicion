const d1 = document.querySelector('#D1')
const d2 = document.querySelector('#D2')
const d3 = document.querySelector('#D3')
const btn = document.querySelector('button')
const txt = document.querySelector('p')

//valida digitos de password (d1 d2 d3)
btn.addEventListener('click', () => {
    if (d1.value+d2.value+d3.value === '911'){
        return txt.innerHTML = ('Password 1 Correcta')
    }
    if (d1.value+d2.value+d3.value === '714'){
        return txt.innerHTML = ('Password 2 Correcta')
    } else {
        txt.innerHTML = ('Password Incorrecta')
    }
})