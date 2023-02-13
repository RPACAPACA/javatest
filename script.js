document.getElementById("scroll-button").addEventListener("click", function() {
  document.getElementById("next-page").style.display = "block";
  window.scroll({
    top: window.innerHeight, 
    behavior: "smooth"
  });
});