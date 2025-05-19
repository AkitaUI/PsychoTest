document.getElementById("ProfReadyTest").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        "Yes": 3,
        "ProbYes": 2,
        "ProbNo": 1,
        "No": 0
    };

    let totalScore = 0;
    for (let i = 1; i <= 8; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            totalScore += answers[selected.value] || 0;
        }
    }

    let feedback = "";

    if (totalScore >= 20) {
        feedback = "Высокая готовность";
    } else if (totalScore >= 15) {
        feedback = "Средняя готовность";
    } else if (totalScore >= 8) {
        feedback = "Низкая готовность";
    } else {
        feedback = "Нет осознанности (требуется работа с наставником)";
    }

    const scaleText = `
        <p><strong>Шкала оценивания:</strong></p>
        <ul>
            <li>20–24 балла — Высокая готовность</li>
            <li>15–19 баллов — Средняя готовность</li>
            <li>8–14 баллов — Низкая готовность</li>
            <li>0–7 баллов — Нет осознанности (требуется работа с наставником)</li>
        </ul>
    `;

    const resultDiv = document.getElementById("resultProfReady");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        ${scaleText}
        <p>Вы набрали: <strong>${totalScore}</strong> баллов</p>
        <p><strong>${feedback}</strong></p>
    `;
});
