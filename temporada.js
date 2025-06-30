const gps = [
  "Brasil", "Pacífico", "San Marino", "Mônaco", "Espanha",
  "Canadá", "França", "Grã-Bretanha", "Alemanha", "Hungria",
  "Bélgica", "Itália", "Portugal", "Europa", "Japão", "Austrália"
];

const pilotos = ["Senna", "Schumacher", "Hill", "Berger", "Hakkinen", "Alesi"];
let corridaAtual = 0;

document.getElementById("equipeEscolhida").textContent = localStorage.getItem("minhaEquipe");

function simularCorrida() {
  if (corridaAtual >= gps.length) {
    alert("Temporada encerrada!");
    return;
  }
  const resultado = pilotos
    .map(p => ({ piloto: p, pontos: Math.random() }))
    .sort((a, b) => b.pontos - a.pontos);

  const div = document.createElement("div");
  div.innerHTML = `<h3>${gps[corridaAtual]}</h3>` + 
    resultado.map((r, i) => `${i+1}º ${r.piloto}`).join("<br>");
  document.getElementById("resultados").appendChild(div);
  corridaAtual++;
}
