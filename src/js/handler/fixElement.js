const recipeCon = document.querySelector(".recipeContainer");
const main = document.querySelector(".main");

// const topOfRecCon = recipeCon.offsetTop;

function fixEle() {
  console.log("scroll Y", scrollY);

  if (
    window.scrollY >= 500
    // imgCon.height + ingrCon.height + descriptionCon.height
  ) {
    console.log("scorll Y is over 500");
    main.classList.add("fixed");
    recipeCon.pageYOffset = "0";
  } else {
    recipeCon.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixEle);

export default fixEle;

// var nav = document.getElementById("nav");

// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset  >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
