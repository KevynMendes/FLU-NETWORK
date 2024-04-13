 // Aguarde até que o documento esteja totalmente carregado
 document.addEventListener("DOMContentLoaded", function() {
    // Obtenha o modal
    var modal = document.getElementById("myModal");

    // Exiba o modal
    modal.style.display = "block";

    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar no <span> (x), feche o modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, feche-o
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });