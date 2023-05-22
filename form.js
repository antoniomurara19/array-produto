let produto = document.querySelector('#produto').value
console.log(produto)

let btn_enviar = document.querySelector('#btn_enviar')
let res = document.querySelector('#res')

btn_enviar.addEventListener('click', (e)=>{
    e.preventDefault()
    let produto = document.querySelector('#produto').value
    let qntd = document.querySelector('#qntd').value
    res.innerHTML = `<br>${produto}&nbsp;${qntd}kg<br><br>`
})