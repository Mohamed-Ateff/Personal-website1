// Portfolio

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => { //after window loaded
  filterItem.onclick = (selectedItem) => { //if user click on filterItem div
    if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if ((filterImges == filterName) || (filterName == "all")) {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}


// Portfolio


$(document).ready(function () {
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function () {
    $('.side-bar').addClass('active');
    // $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    // $('.menu-btn').css("visibility", "visible");
  });
});

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: {
    gradient: ['#a445b2', '#fa4299']
  }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function (event, progress, stepValue) {
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.70
});
$(".react .bar").circleProgress({
  value: 0.60
});