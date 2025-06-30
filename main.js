function iniciarTemporada() {
  const equipeSelecionada = document.getElementById("equipes").value;
  localStorage.setItem("minhaEquipe", equipeSelecionada);
  window.location.href = "temporada.html";
}
