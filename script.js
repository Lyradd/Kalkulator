function calculate() {
  const angka1 = parseFloat(document.getElementById("number1").value);
  const angka2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("operator").value;
  let hasil;

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      hasil = angka1 / angka2;
      break;
    default:
      hasil = "Operator tidak valid";
  }

  document.getElementById("hasil").innerText = hasil;
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculate);
