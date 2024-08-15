const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    const value = document.getElementById("value");
    value.classList.remove("alert", "normal", "attention");

    let description = "";

    document.getElementById("infos").classList.remove("hidden");

    switch (true) {
        case bmi < 18.5:
            description = "Você está abaixo do peso.";
            value.classList.add("attention");
            break;
        case bmi >= 18.5 && bmi <= 25:
            description = "Você está com o peso ideal.";
            value.classList.add("normal");
            break;
        case bmi > 25 && bmi <= 30:
            description = "Você está com sobrepeso.";
            value.classList.add("alert");
            break;
        case bmi > 30 && bmi <= 35:
            description = "Você está com obesidade grau I.";
            value.classList.add("attention");
            break;
        case bmi > 35 && bmi <= 40:
            description = "Você está com obesidade grau II.";
            value.classList.add("attention");
            break;
        default:
            description = "Você está com obesidade grau III.";
            value.classList.add("attention");
            break;
    }

    value.textContent = bmi;

    document.getElementById("description").textContent = description;
});
