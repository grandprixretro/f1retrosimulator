const gps = [
  "Brasil", "Pacífico", "San Marino", "Mônaco", "Espanha",
  "Canadá", "França", "Grã-Bretanha", "Alemanha", "Hungria",
  "Bélgica", "Itália", "Portugal", "Europa", "Japão", "Austrália"
];

const pilotos = ["Senna", "Schumacher", "Hill", "Berger", "Hakkinen", "Alesi"];
const pontuacao = [10, 6, 4, 3, 2, 1];

let corridaAtual = 0;
let tabela = {};
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
  div.innerHTML = `<h3>${gps[corridaAtual]}</h3>` + 
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
  avancar.textContent = "Avançar para 1995";
  avancar.onclick = () => window.location.href = "temporada.html"; // mesma lógica por enquanto
  document.body.appendChild(avancar);
}
