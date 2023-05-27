const img = document.querySelector(".qrcode-img");
const input = document.querySelector(".qrcode-input");
const btnQrCode = document.querySelector(".qrcode-button");
const btnDownload = document.querySelector(".btn-download");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
let qrcodeUrl;

input.focus();

input.addEventListener("keypress", () => {
  input.classList.remove("red");
});

btnQrCode.addEventListener("click", () => {
  if(input.value != "" && input.value.indexOf(" ") < 0) {
    qrcodeUrl = `${api}${input.value}`;
    img.src = qrcodeUrl;
    img.classList.remove("hide");
    btnDownload.classList.remove("hide");
  } else {
    input.classList.add("red");
    console.log(input.value);
  }
});

window.addEventListener("keydown", e => {
  if(e.key == "Enter") {
    input.blur();
    btnQrCode.click();
    setTimeout(() => {
      input.focus();
    }, 100);
  }
});

/* DOWNLOAD */

function download(a, url) {
  a.style.display = "none";
  a.href = url;
  a.download = "qr-code.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

btnDownload.addEventListener("click", () => {
  fetch(qrcodeUrl).then((data) => {
    return data.blob();
  }).then((result) => {
    const imgUrl = URL.createObjectURL(result);
    const downloadLink = document.createElement("a");
    download(downloadLink, imgUrl);
  });
});