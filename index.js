executar()

function areaDoTriangulo() {
  const base = prompt("informe a base do triângulo: ")
  const altura = prompt("informe a altura do triângulo: ")
  return base * altura /2
}

function areaDoRetangulo() {
  const base = prompt("informe a base do Retângulo: ")
  const altura = prompt("informe a altura do Retângulo: ")
  return base * altura
}

function areaDoQuadrado() {
  const lado = prompt("informe o lado do Quadrado: ")
  return lado * lado
}

function areaDoTrapezio() {
  const baseMaior= parseFloat(prompt("informe a base maior do Trapézio: "))
  const baseMenor = parseFloat(prompt("informe a base menor do Trapézio: "))
  const altura = parseFloat(prompt("informe a altura do Trapézio: "))
  return (baseMaior + baseMenor) * altura /2 
}
  
function areaDoCirculo() {
  const raio = prompt("informe a base do Círculo: ")
  return (3.14 * raio * raio)
}

function exibirMenu() {
   return prompt (
    "bem vindo a calculadora Geométrica." +
    "\n\nEscolha uma das opções abaixo" +
    "\n1. área do triângulo:" +
    "\n2. área do retângulo:" +
    "\n3. área do quadrado:"  +
    "\n4. área do trapézio:"  +
    "\n5. área do círculo:" +
    "\n6. Sair"
  )
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = areaDoTriangulo()
        break
      case "2":
        resultado = areaDoRetangulo()
        break
      case "3":
        resultado = areaDoQuadrado()
          break
      case "4":
        resultado = areaDoTrapezio()
          break
      case "5":
        resultado = areaDoCirculo()
          break
      case "6":
        alert("Encerrando...")
          break
      default:
        alert("opção inválida.")
  }

  if (resultado) {
    alert ("Resultado: " + resultado)
  }

} while (opcao != "6")
}