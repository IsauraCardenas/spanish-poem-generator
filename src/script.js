function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatorPoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#users-instruction");
  let apiKey = "8df22e207cb3offb32384a26df4ddft4";
  let prompt = `Generate a Spanish poem about ${instructionInput.value}`;
  let context =
    "You are a romantic poem expert that love to write short poems. Please generate a 4 line poem following users instructions. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a Spanish poem about ${instructionInput.value}</div>`;

  console.log(`Prompt is ${prompt}`);
  console.log(`Context is ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatorPoem);
