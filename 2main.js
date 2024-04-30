function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.includes("EXORCIST7.jpeg")) {
      image.src = "EXOimg7.jpeg";
    } else {
      image.src = "EXORCIST7.jpeg";
    }
  }