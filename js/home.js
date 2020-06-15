// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("py-0");
    document.getElementById("navbar").classList.add("main-gradient");
    document.getElementById("navbar").classList.remove("py-3");
    document.getElementById("logo").setAttribute("height", "50");
  } else {
    document.getElementById("navbar").classList.add("py-3");
    document.getElementById("navbar").classList.remove("main-gradient");
    document.getElementById("navbar").classList.remove("py-0");
    document.getElementById("logo").setAttribute("height", "80");
  }
}