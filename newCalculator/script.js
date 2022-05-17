let nn = ''
let nnn = ''
let teste = ''
let operador = ''

function numeros(n){
    if (teste != 1){
    let h1Um = window.document.querySelector("div#pt1")
    nn += n
    h1Um.innerText = `${nn}`
}else {
    let h1Tres = window.document.querySelector("div#pt3")
    nnn += n
    h1Tres.innerText = `${nnn}`  
}
}

function operadores(o){
    if(teste != 1){
    let h1Dois = window.document.querySelector("div#pt2")
    h1Dois.innerText += ` ${o} `
    teste = 1
    operador = o
    } 
}
function float(){
    if(teste != 1){
        if(nn.indexOf('.') == -1){
        let h1Um = window.document.querySelector("div#pt1")
        nn += "."
        h1Um.innerText = `${nn}`}
    } else {
        if(nnn.indexOf('.') == -1){
        let h1Um = window.document.querySelector("div#pt3")
        nnn += "."
        h1Um.innerText = `${nnn}`
        }    
    }
}
function resetar(){
    location.reload()
}

function executar(){
    if( nn == '' || nnn == ''){
        alert("ERRO! VERIFIQUE E INSIRA OS VALORES CORRETAMENTE!")
        location.reload() 
    } else {
        switch(operador){
            case '+':
                header = window.document.querySelector('header')
                botao = window.document.querySelector(".resetar")
                header.innerText = `${Number(nn) + Number(nnn)}`            
            break
            case '-':
                header = window.document.querySelector('header')
                botao = window.document.querySelector(".botoes")
                header.innerText = `${Number(nn) - Number(nnn)}`
            break
            case '/':
                header = window.document.querySelector('header')
                botao = window.document.querySelector(".botoes")
                header.innerText = `${Number(nn) / Number(nnn)}`
            break
            case 'x':
                header = window.document.querySelector('header')
                botao = window.document.querySelector(".botoes")
                header.innerText = `${Number(nn) * Number(nnn)}`
            break
        }
    }
}