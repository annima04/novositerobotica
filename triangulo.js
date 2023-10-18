const form = document.querySelector("fora")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("outResp1")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

const LadoA = Number(form.inLadoA.value)
const LadoB = Number(form.inLadoB.value)
const LadoC = Number(form.inLadoC.value)

if((LadoA > LadoB + LadoC) || (LadoB > LadoA + LadoC) || (LadoC > LadoA + LadoB)){
    alert("Essas medidas não podem formar um triângulo. Um dos lado não pode ser maior que a soma do outro dois.")
    form.inLadoA.focus()
    form.inLadoB.focus()
    form.inLadoC.focus()
    return
}

resp1.innerText  = `Lador podem formar um triângulo` 

if(LadoA == LadoB && LadoA == LadoC){
    resp1.innerText = `Tipo: Equilátero`
} else if((LadoA == LadoB) || (LadoA == LadoC) || (LadoB == LadoC)){
    resp1.innerText = `Tipo: Isóceles `
}else{
    resp1.innerText = `Tipo: Escaleno`
}

})