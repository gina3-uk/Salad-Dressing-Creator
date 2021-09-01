function createDressing(event) {
  let oils = [
    "Farrington's Mellow Yellow Cold Pressed Rapeseed Oil",
    "Farrington's Mellow Yellow Oak Smoked Rapeseed Oil",
    "Farrington's Mellow Yellow Chilli Oil",
  ];

  let vinegars = [
    "Lemon Juice",
    "White wine vinegar",
    "Soy Sauce",
    "Balsamic Vinegar",
  ];

  let flavours = [
    "Dijon Mustard",
    "Crushed Garlic",
    "Finely Chopped Ginger",
    "Fresh Herbs",
    "Honey",
  ];

  let randomNumber = Math.floor(Math.random() * 3);
  let randomNumberTwo = Math.floor(Math.random() * 4);
  let randomNumberThree = Math.floor(Math.random() * 5);

  event.preventDefault();
  let chosenOil = oils[randomNumber];
  let chosenVinegar = vinegars[randomNumberTwo];
  let chosenFlavour = flavours[randomNumberThree];

  alert(chosenOil + chosenVinegar + chosenFlavour);

  //let recipe = document.querySelector("h2");
  //quote.innerHTML = insult;
}

let recipeButton = document.querySelector("#submit");
recipeButton.addEventListener("click", createDressing);
