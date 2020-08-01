var navbar = document.querySelector('.navbar');
var headerView = document.querySelector('#header');

window.onscroll = function() {
  var top = window.scrollY;
  fadeNavbar(top);
  zoomInBackground(top);
}

function fadeNavbar(top) {
  // add fade effect on navbar. Make trasparent when 100 px down
  if (top > 50) {
    navbar.classList.add('navbar-transparent');
    navbar.classList.remove('bg-dark');
  } else {
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-dark');
  }
}

function zoomInBackground(top) {
  // add zoom-in effect when scroll down
  let zoomIn = Number(100) + Number(top/15);
  let widthString = "width:" + zoomIn +  "%";
  let heightString = "height:" + zoomIn + "%";
  console.log(widthString);
  if (top > 0) {
    headerView.setAttribute("style",widthString);
    // headerView.setAttribute("style",heightString);
  } else {
    headerView.setAttribute("style","width:100%");
    headerView.setAttribute("style","height:100%");
  }
}

