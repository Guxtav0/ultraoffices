var balls = document.querySelector('.balls')
var quantidadeImages = document.querySelector('.sliders .images')
var atual = 0;
var imagem = document.getElementById('atual')


for( let i = 0; i < quantidadeImages.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgatual')

var pos = document.querySelectorAll('.balls div')

for( let i =0; i< pos.length; i++){
    pos[i].addEventListener('click', ()=> {
        atual = pos[i].id
        slide()
    })
}
function slide(){
    if (atual >= quantidadeImages.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quantidadeImages.length-1
    }
    document.querySelector('.imgatual').classList.remove('imgatual')
    imagem.style.marginLeft = -750*atual+'px'
    document.getElementById(atual).classList.add('imgatual')
}

slide();
