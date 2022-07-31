let listaSorteados = []
const numeroSorteado = document.getElementById('numeroSorteado')
const sorteados = document.getElementById('sorteados')
let remove


function handleClick() {
    if (numeroSorteado.value < 1 || numeroSorteado.value > 75) {
        alert('Digite um número de 1 a 75')
        numeroSorteado.value = ''
        return
    }
    if (listaSorteados.includes(numeroSorteado.value)) {
        alert('Este número já foi sorteado.')
        numeroSorteado.value = ''
        return
    }
    listaSorteados.push(numeroSorteado.value)
    document.getElementById(`${numeroSorteado.value}`).classList.add('marcado')
    numeroSorteado.value = ''
    preencheSorteados()
}


function preencheSorteados() {
    let elemento
   
    listaSorteados.forEach((numero) =>{
        elemento = `<li>${numero}</li>`
    }
    )
    sorteados.innerHTML += elemento
}

function remover(id) {
    document.getElementById(id).classList.remove('marcado')
    numeroSorteado.focus()
    remove= listaSorteados.filter((item) => item != id)
    listaSorteados = remove
    sorteados.innerHTML = ''
    preencheSorteados()
}

function reiniciar() {
    if (confirm('Iniciar nova rodada?')) {
        listaSorteados = []
        sorteados.innerHTML = ''
        for (let index = 1; index <= 75; index++) {
            document.getElementById(`${index}`).classList.remove('marcado')
        }
    }
}

numeroSorteado.focus()

numeroSorteado.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("selecionar").click();
    }
});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}