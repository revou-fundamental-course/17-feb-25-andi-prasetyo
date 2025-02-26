// slide show
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var imgList = document.getElementsByClassName("img-slideshow");
//   if (n > imgList.length) slideIndex = 1;
//   else if (n < 1) slideIndex = imgList.length;

//   for (i = 0; i < imgList.length; i++) {
//     imgList[i].style.display = "none";
//   }

//   imgList[slideIndex - 1].style.display = "block";
// }

// setInterval(() => {
//   plusDivs(1);
// }, 3000);

//form validation
function validationForm(nama) {}

validationForm = () => {
  let nameInput = document.getElementById("name-input");
  console.log(nameInput.value);
  if (nameInput.value == "") {
    alert("Nama tidak boleh kosong");
  } else {
    alert("Welcome " + nameInput.value);
  }
};

let indexBanner = 0;

showBanner();

function nextBanner() {
  indexBanner += 1;
  showBanner();
}

function previewBanner() {
  indexBanner -= 1;
  showBanner();
}

//auto slide
function showBanner() {
  let banner = document.getElementsByClassName("main-banner");

  if (indexBanner > banner.length - 1) {
    indexBanner = 0;
  } else if (indexBanner < 0) {
    indexBanner = 0;
  }

  for (let i = 0; i < banner.length; i++) {
    banner[i].style.display = "none";
  }
  banner[indexBanner].style.display = "block";
}

setInterval(nextBanner, 2000);
