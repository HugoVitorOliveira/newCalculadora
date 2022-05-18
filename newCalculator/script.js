let nn = ''
let nnn = ''
let teste = ''
let operador = ''

// deixando claro: as variáveis todas estão declaradas no topo do código porquê eu tava com toc no dia

const h1Um = window.document.querySelector("div#pt1")
const h1Dois = window.document.querySelector("div#pt2")
const h1Tres = window.document.querySelector("div#pt3")
const header = window.document.querySelector('header')

function numeros(n){
    if (teste != 1){
    nn += n
    h1Um.innerText = `${nn}`
}else {
    nnn += n
    h1Tres.innerText = `${nnn}`  
}
}

function operadores(o){
    if(teste != 1){
    h1Dois.innerText += ` ${o} `
    teste = 1
    operador = o
    } 
}

function float(){
    if(teste != 1){
        if(nn.indexOf('.') == -1){
        nn += "."
        h1Um.innerText = `${nn}`}
    } else {
        if(nnn.indexOf('.') == -1){
        nnn += "."
        h1Tres.innerText = `${nnn}`
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
                header.innerText = `${Number(nn) + Number(nnn)}`            
            break
            case '-':
                header.innerText = `${Number(nn) - Number(nnn)}`
            break
            case '/':
                header.innerText = `${Number(nn) / Number(nnn)}`
            break
            case 'x':
                header.innerText = `${Number(nn) * Number(nnn)}`
            break
        }
    }
}