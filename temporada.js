const pontuacao = [10, 6, 4, 3, 2, 1];

let ano = localStorage.getItem("anoAtual") || "1994";
let corridaAtual = 0;
let tabela = {};

const pilotos = dadosTemporadas[ano].pilotos;
const gps = dadosTemporadas[ano].gps;
pilotos.forEach(p => tabela[p] = 0);

document.getElementById("equipeEscolhida").textContent = localStorage.getItem("minhaEquipe");

function simularCorrida() {
  if (corridaAtual >= gps.length) {
    mostrarCampeonato();
    return;
  }

  const resultado = pilotos
    .map(p => ({ piloto: p, pontos: Math.random() }))
    .sort((a, b) => b.pontos - a.pontos);

  const div = document.createElement("div");
  div.innerHTML = `<h3>${gps[corridaAtual]} (${ano})</h3>` + 
    resultado.map((r, i) => {
      if (i < pontuacao.length) {
        tabela[r.piloto] += pontuacao[i];
      }
      return `${i+1}º ${r.piloto} ${i < pontuacao.length ? `(+${pontuacao[i]} pts)` : ""}`;
    }).join("<br>");
  document.getElementById("resultados").appendChild(div);
  corridaAtual++;
}

function mostrarCampeonato() {
  const classificacao = Object.entries(tabela).sort((a, b) => b[1] - a[1]);
  const div = document.createElement("div");
  div.innerHTML = "<h2>Classificação Final</h2>" + 
    classificacao.map(([p, pts], i) => `${i+1}º ${p} - ${pts} pts`).join("<br>");
  document.getElementById("resultados").appendChild(div);

  const avancar = document.createElement("button");
  avancar.textContent = "Avançar para " + (parseInt(ano)+1);
  avancar.onclick = () => {
    const proximoAno = (parseInt(ano) + 1).toString();
    if (!dadosTemporadas[proximoAno]) {
      alert("Temporadas futuras ainda não implementadas!");
      return;
    }
    localStorage.setItem("anoAtual", proximoAno);
    window.location.href = "temporada.html";
  };
  document.body.appendChild(avancar);
}
