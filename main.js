function iniciarTemporada() {
  const equipeSelecionada = document.getElementById("equipes").value;
  localStorage.setItem("minhaEquipe", equipeSelecionada);
  localStorage.setItem("anoAtual", "1994");
  window.location.href = "temporada.html";
}
