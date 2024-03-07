//script
function mensagem(){
    let element = document.getElementById('main-title')
    let textDocument = document.getElementById('main-title').textContent
    let valorInt = parseInt(textDocument)+1
    let valorStr = valorInt.toString()
    element.innerHTML = valorStr
}