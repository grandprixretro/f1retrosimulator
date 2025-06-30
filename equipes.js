const equipes = [
  "Williams", "Benetton", "Ferrari", "McLaren", "Ligier", "Jordan", 
  "Tyrrell", "Sauber", "Lotus", "Minardi", "Larrousse", "Pacific"
];

window.onload = () => {
  const select = document.getElementById("equipes");
  equipes.forEach(eq => {
    const opt = document.createElement("option");
    opt.value = eq;
    opt.textContent = eq;
    select.appendChild(opt);
  });
};
