const form = document.querySelector("form")
const rest = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const altura = Number(form.inAlura.value)
    
    let peso
    if (masculino) {
        peso = 22 * Math.pow(alura, 2)
    } else {
        peso = 21 * Math.pow(alura, 2)
    }

    Response.innerText = `$ {nome} seu peso ideal é: ${pesp.toFixed(3)}kg`
})
  
form.addEventListener("reset", (e) => {
    Response.innerText= " "
})