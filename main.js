$(document).ready(function () {
  var carouselItems = $(".carousel-item");

  $("#carouselExample").on("slid.bs.carousel", function () {
    var activeItem = $(".carousel-item.active");
    var prevItem = activeItem.prev(".carousel-item");
    var nextItem = activeItem.next(".carousel-item");

    if (prevItem.length === 0) {
      prevItem = carouselItems.last();
    }

    if (nextItem.length === 0) {
      nextItem = carouselItems.first();
    }
    var prevImage = prevItem.find("img").attr("src");
    $(".carousel-control-prev img").attr("src", prevImage);

    var nextImage = nextItem.find("img").attr("src");
    $(".carousel-control-next img").attr("src", nextImage);
  });
});


let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar-after');

menu.onclick = () =>{
  navbar.classList.toggle('open');
  if (navbar.classList.contains('open')) {
    document.body.style.backgroundColor = 'gray';
  } else {
    document.body.style.backgroundColor = ''; 
  }
};
