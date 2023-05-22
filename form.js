const btn_enviar = document.querySelector('#btn_enviar')
const btn_calcular = document.querySelector('#btn_calcular')
const res = document.querySelector('#res')
const preco_res = document.querySelector('#preco_res')
const preco = document.querySelector('.preco')
let produto_a = []
let qntd_a = []
let preco_a = []
let preco_laranja = 19.9
let preco_limao = 5.9
let preco_pera = 11.9

btn_enviar.addEventListener('click', (e)=>{
    e.preventDefault()
    let produto = document.querySelector('#produto').value
    let qntd = document.querySelector('#qntd').value

    qntd_a.push(qntd)
    produto_a.push(produto)

    res.innerHTML += `<br>Produto: ${produto}&nbsp;/ Quantidade: ${qntd}kg<br><br>`
    console.log(produto_a)
    console.log(qntd_a)
})

btn_calcular.addEventListener('click',(e)=>{
    e.preventDefault()
    let total = 0
    for(i=0;i<produto_a.length;i++){
        if(produto_a[i] === 'laranja'){
            total += preco_laranja*qntd_a[i]
            preco_res.innerHTML = `U$ ${total.toFixed(2)}<br>`
        }
        if(produto_a[i] === 'limao'){
            total += preco_laranja*qntd_a[i]
            preco_res.innerHTML = `U$ ${total.toFixed(2)}<br>`
        }
        if(produto_a[i] === 'pera'){
            total += preco_laranja*qntd_a[i]
            preco_res.innerHTML = `U$ ${total.toFixed(2)}<br>`
        }
    }
    preco.style.left = '0'
    preco.style.transition = '300ms'
})
