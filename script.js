let newUrl = document.getElementById("newUrl");

function resizeImg() {
  let url = document.getElementById("url").value;
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  if (url === "" || width == "" || height == "") {
    alert("please fill the inputs");
  }

  let lastIndex = url.lastIndexOf("/");
  let lastPart = url.substring(lastIndex);
  let generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;

  document.getElementById("img").style.display = "block";
  document.getElementById("img").src = generatedUrl;

  //   new URl
  newUrl.style.display = "block";
  newUrl.innerText = generatedUrl;
}

// adding the url to clipbaord
function addToClipboard() {
  window.navigator.clipboard.writeText(newUrl.innerText);
  newUrl.style.backgroundColor = "lightgreen";
}
