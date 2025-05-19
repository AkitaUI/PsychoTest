const form = document.getElementById("HaalandTest");
const resultBox = document.getElementById("resultHaaland");

let categoryCH = 0;
let categoryT = 0;
let categoryZS = 0;
let categoryHO = 0;
let categoryP = 0;
let categoryPR = 0;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    categoryCH = 0;
    categoryT = 0;
    categoryZS = 0;
    categoryHO = 0;
    categoryP = 0;
    categoryPR = 0;

    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
      switch(value) {
        case "CH": categoryCH++; break;
        case "T": categoryT++; break;
        case "ZS": categoryZS++; break;
        case "HO": categoryHO++; break;
        case "P": categoryP++; break;
        case "PR": categoryPR++; break;
      }
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <h3>Результаты:</h3>
      <ul>
        <li>Ч-Ч – Человек–Человек: ${categoryCH}</li>
        <li>Ч-Т – Человек–Техника: ${categoryT}</li>
        <li>Ч-ЗС – Человек–Знаковая система: ${categoryZS}</li>
        <li>Ч-ХО – Человек–Художественный образ: ${categoryHO}</li>
        <li>Ч-П – Человек–Природа: ${categoryP}</li>
        <li>Ч-ПР – Управленческий (предпринимательский) тип: ${categoryPR}</li>
      </ul>
    `;
});