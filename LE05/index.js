let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

function addMeses() {
    for(let i = 0; i < meses.length; i++) {
        let option = document.createElement("option")
        option.text = meses[i]
        option.value = i+1
        mes.appendChild(option)
    }
    mes.removeChild(mes.firstChild)
}

function addDias() {
    let fim = 31;
    switch(parseInt(mes.value)) {
        case 2:
            fim = 29
            break
        case 4:
        case 6:
        case 9:
        case 11:
            fim = 30
            break;
    }
    for(let i = 1; i <= fim; i++) {
        let option = document.createElement("option")
        option.text = i
        option.value = i
        dia.appendChild(option)
    }
}

function addAnos() {
    for(let i = mes.value == "2" && dia.value == "29" ? 2020 : 2022; i >= 1960; mes.value == "2" && dia.value == "29" ? i-=4 : i--) {
        let option = document.createElement("option")
        option.text = i
        option.value = i
        ano.appendChild(option)
    }
}

function validatePassword(){
    if(password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords Don't Match");
    } else {
        passwordConfirm.setCustomValidity('');
    }
}

let mes = document.querySelector("#mês")
let dia = document.querySelector("#dia")
let ano = document.querySelector("#ano")
let btn = document.querySelector("#botao")
let radios = document.querySelectorAll("input[name='inlineRadioOptions'")
let password = document.querySelector("#password")
let passwordConfirm = document.querySelector("#passwordConfirmation")
let form = document.querySelector("#newAccount")

radios[0].addEventListener('change', ()=>{
    btn.disabled = false
})

radios[1].addEventListener('change', ()=>{
    btn.disabled = true
})

mes.addEventListener('change', ()=>{
    while (dia.hasChildNodes()) {
        dia.removeChild(dia.firstChild)
    }
    addDias()
}, false);

dia.addEventListener('change', ()=>{
    while(ano.hasChildNodes()) {
        ano.removeChild(ano.firstChild)
    }
    addAnos()
}, false)


password.onchange = validatePassword;
passwordConfirm.onkeyup = validatePassword;
addMeses()