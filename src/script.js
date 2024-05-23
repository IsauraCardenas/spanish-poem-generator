function generatorPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Podrá nublarse el sol eternamente;",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatorPoem);
