const img = document.querySelector(".qrcode-img");
const input = document.querySelector(".qrcode-input");
const button = document.querySelector(".qrcode-button");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

input.addEventListener("keypress", () => {
  input.classList.remove("red");
});

button.addEventListener("click", () => {
  if(input.value != "") {
    img.src = `${api}${input.value}`;
    img.classList.remove("hide");
  } else {
    input.classList.add("red");
  }
});