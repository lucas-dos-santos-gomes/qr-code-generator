const img = document.querySelector(".qrcode-img");
const input = document.querySelector(".qrcode-input");
const btnQrCode = document.querySelector(".qrcode-button");
const btnDownload = document.querySelector(".btn-download");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
let url;

input.addEventListener("keypress", () => {
  input.classList.remove("red");
});

btnQrCode.addEventListener("click", () => {
  if(input.value != "") {
    url = `${api}${input.value}`;
    img.src = url;
    img.classList.remove("hide");
    btnDownload.classList.remove("hide");
  } else {
    input.classList.add("red");
  }
});

/* DOWNLOAD */

// function download() {
//   const a = document.createElement("a");
//   a.style.display = "none";
//   a.href = url + ".png";
//   a.download = "qrcode.png";
//   document.body.appendChild(a);
//   console.log(a.download);
//   a.click();
//   document.body.removeChild(a);
// }

// btnDownload.onclick = download;

const clearUrl = url => url.replace(/^data:image\/\w+;base64,/, '');

const downloadImage = (name, content, type) => {
  var link = document.createElement('a');
  link.style.display = "none";
  link.href = `data:application/octet-stream;base64,${encodeURIComponent(content)}`;
  link.download = /\.\w+/.test(name) ? name : `${name}.${type}`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

btnDownload.addEventListener("click", () => {
  downloadImage('qr-code', clearUrl(img.src), "png");
});