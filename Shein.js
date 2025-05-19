document.getElementById("SheinTest").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const characteristics = {
        q1: "Стабильность",
        q2: "Социальная значимость",
        q3: "Творческая свобода",
        q4: "Лидерство",
        q5: "Рост и успех",
        q6: "Коллективность",
        q7: "Миссия/Смысл",
        q8: "Престиж"
    };
    
    const scores = [];

    for (let key in characteristics) {
        const value = parseInt(formData.get(key));
        scores.push({ trait: characteristics[key], score: value });
    }

    scores.sort((a, b) => b.score - a.score);

    const resultDiv = document.getElementById("resultShein");
    resultDiv.innerHTML = "<p>Топ 4 - ваш мотивационный профиль при выборе профессии:</p><ul>" +
      scores.map(item => `<li>${item.trait}: ${item.score}</li>`).join("") +
      "</ul>";
});