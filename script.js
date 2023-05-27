const img = document.querySelector(".qrcode-img");
const input = document.querySelector(".qrcode-input");
const btnQrCode = document.querySelector(".qrcode-button");
const btnDownload = document.querySelector(".btn-download");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
let qrcodeUrl;

input.addEventListener("keypress", () => {
  input.classList.remove("red");
});

btnQrCode.addEventListener("click", () => {
  if(input.value != "") {
    qrcodeUrl = `${api}${input.value}`;
    img.src = qrcodeUrl;
    img.classList.remove("hide");
    btnDownload.classList.remove("hide");
  } else {
    input.classList.add("red");
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