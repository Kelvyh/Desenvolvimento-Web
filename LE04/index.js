let tzeet = document.querySelectorAll('.input');
let cont = document.querySelectorAll('.counting');
let butao = document.querySelectorAll('.butaozinho');
for(let x=0;x<tzeet.length;x++){
    tzeet[x].addEventListener('input', ()=>{
        if(tzeet[x].scrollHeight > tzeet[x].offsetHeight) tzeet[x].rows += 1;
        if(tzeet[x].value.length == 0) {
            cont[x].innerHTML = '';
            butao[x].disabled = true;
        } else {
            cont[x].style.color = 'rgb(15, 20, 25)';
            cont[x].innerHTML = tzeet[x].value.length;
            butao[x].disabled = false;
        }
        if(tzeet[x].value.length+40 >= 140) {
            cont[x].style.color = 'rgb(255, 200, 0)';
            cont[x].innerHTML = tzeet[x].value.length;
        }
        if(tzeet[x].value.length > 140) {
            cont[x].style.color = 'rgb(255, 0, 0)';
            cont[x].innerHTML = 140 - tzeet[x].value.length;
        }
    });
}