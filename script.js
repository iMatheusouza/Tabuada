var fatorUsuario = 2
var fatorPadrao = 1

while(fatorPadrao <= 10) {
  switch(true) {
    case fatorPadrao == 1:
      var produto = fatorUsuario * fatorPadrao
      var newOptiontag = document.createElement('option')
      document.getElementById('caixa').appendChild(newOptiontag)
      var teste = document.getElementsByTagName('option')[1]
      document.teste.appendChild(produto)
      
      // console.log(produto)
      break
    case fatorPadrao == 2:
      var produto = fatorUsuario * fatorPadrao
      // console.log(produto)
      break
    case fatorPadrao == 3:
      var produto = fatorUsuario * fatorPadrao
      // console.log(produto)
      break
    case fatorPadrao == 4:
      var produto = fatorUsuario * fatorPadrao
      // console.log(produto)
      break
    case fatorPadrao == 5:
      var produto = fatorUsuario * fatorPadrao
      // console.log(produto)
      break
    case fatorPadrao == 6:
        var produto = fatorUsuario * fatorPadrao
        // console.log(produto)
        break
      case fatorPadrao == 7:
        var produto = fatorUsuario * fatorPadrao
        // console.log(produto)
        break
      case fatorPadrao == 8:
        var produto = fatorUsuario * fatorPadrao
        // console.log(produto)
        break
      case fatorPadrao == 9:
        var produto = fatorUsuario * fatorPadrao
        // console.log(produto)
        break
      case fatorPadrao == 10:
        var produto = fatorUsuario * fatorPadrao
        // console.log(produto)
        break
  }
  fatorPadrao++
}