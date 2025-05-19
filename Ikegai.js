document.getElementById("IkigaiTest").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const resultBlock = document.getElementById("resultIkigai");
    const form = event.target;

    const counts = { A: 0, B: 0, C: 0, D: 0 };

    // Подсчёт ответов
    for (let i = 1; i <= 4; i++) {
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            counts[selected.value]++;
        }
    }

    // Находим максимальное значение
    const maxCount = Math.max(...Object.values(counts));

    // Определяем все буквы с максимальным количеством выборов
    const topLetters = Object.keys(counts).filter(letter => counts[letter] === maxCount);

    // Сообщение о значениях
    const message = `
        а) — Помощник<br>
        б) — Создатель<br>
        в) — Творец<br>
        г) — Аналитик<br><br>
    `;

    const results = {
        A: "а) — Помощник",
        B: "б) — Создатель",
        C: "в) — Творец",
        D: "г) — Аналитик"
    };

    // Формируем итоговый результат
    const final = topLetters.map(letter => results[letter]).join("<br>");

    resultBlock.innerHTML = message + "<strong>Ваш архетип(ы):<br>" + final + "</strong>";
});