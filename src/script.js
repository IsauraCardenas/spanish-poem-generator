function displayDesserts(response) {
  console.log("desserts generated");
  new Typewriter("#desserts", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatorDesserts(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#users-instruction");
  let apiKey = "8df22e207cb3offb32384a26df4ddft4";
  let prompt = `Generate one dessert idea using ${instructionInput.value} `;
  let context =
    "You are a chef, creating delicious easy to-make desserts. Please include a LIST of ingredients and instructions on how to make. Please, make it short.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let dessertsElement = document.querySelector("#desserts");
  dessertsElement.classList.remove("hidden");
  dessertsElement.innerHTML = `<div class="generating">Generating ${instructionInput.value}</div>`;

  console.log(`Prompt is ${prompt}`);
  console.log(`Context is ${context}`);

  axios.get(apiUrl).then(displayDesserts);
}

let dessertsFormElement = document.querySelector("#desserts-generator-form");
dessertsFormElement.addEventListener("submit", generatorDesserts);
