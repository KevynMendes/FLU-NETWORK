function changeChannel(event) {
    event.preventDefault();
    var link = event.target.getAttribute("href");
    var iframe = document.getElementById("player");
    iframe.src = link;
}

window.onload = function() {
    var today = new Date();
    var dayOfWeek = today.getDay();

    var imageSrc;
    var linkBackgroundColor;
    

    var player = document.getElementById("player");
    player.src = imageSrc = "src/background.jpg";

    var links = document.querySelectorAll("ul#canais li a");
    links.forEach(function(link) {
        link.style.backgroundColor = linkBackgroundColor;
    });
};

// MENSAGEM MODAL
document.addEventListener("DOMContentLoaded", function() {
    
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    // TEMPORIZADOR 4s
    setTimeout(function() {
      modal.style.display = "none";
    }, 4000);

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
