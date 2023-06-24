let imgIndex = 0;
carousel();

function carousel() {
  let images =
    document.getElementsByClassName("about-img");
  
  // set all images to not display
  for (let count = 0; count < images.length; count++) {
    images[count].style.display = "none";
  }
  
  // increment which image to display
  imgIndex++;
  if (imgIndex > images.length) {
    imgIndex = 1;
  }
  
  // display image
  images[imgIndex - 1].style.display = "block";
  
  // set display length
  setTimeout(carousel, 5000); // img change: 5 sec
}