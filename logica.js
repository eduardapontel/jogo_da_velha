var player = "Artemis";
var jogadas = 0;

function mudarGato(id){
    player = 'Luna'
}

function jogar(id) {
  if (ganhar()) return;

  var img = document.getElementById(id);
  var imag = pegar_imagem(id);
  var intart = document.getElementById("ia1").checked;

  if (imag == "transp.png") {
    img.src = "imagens/" + player + ".png";

    if (player == "Artemis") {
      img.style.width = "100px";
      img.style.height = "100px";
    }

    if (player == "Luna") {
      img.style.width = "100px";
      img.style.height = "100px";
    }

    jogadas++;

    if (jogadas >= 9) {
      document.querySelector("body > p").innerHTML = "Fim do jogo! Deu velha! ";
      return false;
    }

    if (ganhar()) {
      if (player == "Artemis") {
        document.querySelector("body > p").innerHTML =
          "Fim do jogo " + player + " venceu!";
        document.getElementById("gan_art").style.display = "block";
      } else {
        document.querySelector("body > p").innerHTML =
          "Fim do jogo " + player + " venceu!";
        document.getElementById("gan_lun").style.display = "block";
      }

      return false;
    }

    if (player == "Artemis") {
      player = "Luna";
    } else {
      player = "Artemis";
    }
  }
  if (intart && jogadas % 2 != 0) {
    jogar(posicaoia());
  }
}

function posicaoia() {
  if (pegar_imagem("c5") == "transp.png") {
    return "c5";
  }
  return "c" + Math.floor(Math.random() * 9 + 1);
}

function pegar_imagem(id) {
  var imagem = document.getElementById(id).src;
  return imagem.substring(imagem.length - 10, imagem.length);
}

function formatar(id1, id2, id3) {
  var cor = "rgba(171, 83, 149, 0.433)";

  document.getElementById(id1).parentElement.style.backgroundColor = cor;
  document.getElementById(id2).parentElement.style.backgroundColor = cor;
  document.getElementById(id3).parentElement.style.backgroundColor = cor;
}

function ganhar() {
  if (
    pegar_imagem("c1") == pegar_imagem("c4") &&
    pegar_imagem("c1") == pegar_imagem("c7") &&
    pegar_imagem("c1") != "transp.png"
  ) {
    formatar("c1", "c4", "c7");
    return true;
  }
  if (
    pegar_imagem("c2") == pegar_imagem("c5") &&
    pegar_imagem("c2") == pegar_imagem("c8") &&
    pegar_imagem("c2") != "transp.png"
  ) {
    formatar("c2", "c5", "c8");
    return true;
  }
  if (
    pegar_imagem("c3") == pegar_imagem("c6") &&
    pegar_imagem("c3") == pegar_imagem("c9") &&
    pegar_imagem("c3") != "transp.png"
  ) {
    formatar("c3", "c6", "c9");
    return true;
  }
  if (
    pegar_imagem("c1") == pegar_imagem("c2") &&
    pegar_imagem("c1") == pegar_imagem("c3") &&
    pegar_imagem("c1") != "transp.png"
  ) {
    formatar("c1", "c2", "c3");
    return true;
  }
  if (
    pegar_imagem("c4") == pegar_imagem("c5") &&
    pegar_imagem("c6") == pegar_imagem("c4") &&
    pegar_imagem("c4") != "transp.png"
  ) {
    formatar("c4", "c5", "c6");
    return true;
  }
  if (
    pegar_imagem("c7") == pegar_imagem("c8") &&
    pegar_imagem("c7") == pegar_imagem("c9") &&
    pegar_imagem("c7") != "transp.png"
  ) {
    formatar("c7", "c8", "c9");
    return true;
  }
  if (
    pegar_imagem("c1") == pegar_imagem("c5") &&
    pegar_imagem("c1") == pegar_imagem("c9") &&
    pegar_imagem("c1") != "transp.png"
  ) {
    formatar("c1", "c5", "c9");
    return true;
  }
  if (
    pegar_imagem("c3") == pegar_imagem("c5") &&
    pegar_imagem("c3") == pegar_imagem("c7") &&
    pegar_imagem("c3") != "transp.png"
  ) {
    formatar("c3", "c5", "c7");
    return true;
  }
  return false;
}

function mudarFundo(imgSelecionada) {
  const imagemEl = document.querySelector(`#img_${imgSelecionada}`);
  document.body.style.backgroundImage = `url(${imagemEl.src})`;
}




