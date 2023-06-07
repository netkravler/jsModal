// lav en array som indeholder alle billeder på siden
const images = document.querySelectorAll("img:not(#photo)");
console.log("array af billeder med undtagelse af første billede ", images);

// Add eventlisteners på alle billeder
images.forEach((image) => {
  //variable for hver element i arrayét

  image.addEventListener("click", () => {
    toggleModal();
    displayPhoto(image); // kald funktionen displayPhoto med image som property
  });
});

const toggleModal = ()  => {
  // fjern eller tilføj display propertien til photo_container alt efter dens nuværende tilstand
  const modal = document.getElementById("photo_container");
  // hvis propertien er block
  if (modal.style.display === "block") {
    // skift den til none
    modal.style.display = "none";
  } else {
    // ellers skift den til block
    modal.style.display = "block";
  }
}

function displayPhoto(image) {
  // Start med at tømme indhold af #photo_container
  let photoContainer = document.getElementById("photo_container");
  photoContainer.innerHTML = "";

  // opret følgende DOM elementer med document.createElement
  let figureElement = document.createElement("figure");
  let closeButton = document.createElement("span");
  let imageContainer = document.createElement("div");
  let imgElement = document.createElement("img");
  let altElement = document.createElement("div");

  // tilføj chilc element der hvor de hører hjemme i forhold til det ønskede resultat i DOMén
  figureElement.appendChild(closeButton);
  figureElement.appendChild(imageContainer);
  imageContainer.appendChild(imgElement);
  imageContainer.appendChild(altElement);
  photoContainer.appendChild(figureElement);

  // set attributter og indhold af button
  closeButton.className = "modal_close";
  closeButton.innerHTML = " &times;";
  closeButton.onclick = toggleModal;

  // erstat source på det pågældende billede
  imgElement.src = image.src;
  // erstat alt tag på det pågældende billede
  imgElement.alt = image.alt;
  // tilføj text til innerhtml .
  altElement.innerHTML = image.alt;
}
