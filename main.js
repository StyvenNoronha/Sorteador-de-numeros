const form = document.querySelector("form");
const numeroSorte = document.querySelector(".numeroSorte");
const numberSorte = document.getElementById("NumberSorte");
const luckyNumberInput = document.getElementById("luckyNumber");
const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const checkbox = document.getElementById("repeatNumber");

      // Adiciona um evento 'change' ao checkbox
      /*
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          console.log("repetir numero");
        } else {
          console.log("não repetir");
        }
      });
*/

form.onsubmit = (event) => {
    event.preventDefault();

    const luckyNumber = Number(luckyNumberInput.value);
    const numberOne = Number(numberOneInput.value);
    const numberTwo = Number(numberTwoInput.value);

    const resultado = [];

    for (let i = 0; i < luckyNumber; i++) {
        const numeroInteiro = Math.floor(Math.random() * (numberTwo - numberOne + 1)) + numberOne;
        resultado.push(numeroInteiro);
    }

   
    numberSorte.textContent = resultado.join(" ")
    form.classList.toggle("sumiu");
    numeroSorte.classList.toggle("sumiu");


};


