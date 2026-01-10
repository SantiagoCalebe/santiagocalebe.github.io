const projects = [
  {
    title: "PIX4ME",
    description: "Cobrar um PIX nunca foi tão fácil.",
    image: "assets/img/projetos/pix4me.png",
    link: "https://pix4me.github.io/",
    status: "Publicado"
  },
  {
    title: "ZenithLauncher",
    description: "Um launcher (organizador) de jogos locais para gamers.",
    image: "assets/img/projetos/ZenithLauncher.png",
    status: "Em desenvolvimento"
  },
  {
    title: "SolarQuiz [Modo Party]",
    description: "Quiz multiplayer sobre o sistema solar. (Projeto escolar.)",
    image: "assets/img/projetos/SolarQuizParty.png",
    link: "https://SolarQuizParty.onrender.com/",
    status: "Publicado"
  },
  {
    title: "SolarQuiz",
    description: "Quiz singleplayer sobre o sistema solar. (Projeto escolar.)",
    image: "assets/img/projetos/SolarQuiz.png",
    link: "https://SolarQuiz.github.io/",
    status: "Publicado"
  },
  {
    title: "HxLang",
    description: "Haxelib para tradução de jogos no ecossistema Haxe.",
    image: "assets/img/projetos/HxLang.png",
    status: "Em desenvolvimento"
  },
  {
    title: "TTFS (Today's Toby Fox song is)",
    description: "Sistema que seleciona uma música por dia do meu compositor preferido.",
    image: "assets/img/projetos/TTFS.png",
    link: "https://santiagocalebe.github.io/TTFS",
    status: "Publicado"
  },
  {
    title: "HTMLTarune",
    description: "Uma cópia de um jogo meio famoso.",
    image: "assets/img/projetos/HTMLtarune.png",
    link: "https://santiagocalebe.github.io/HTMLtarune",
    status: "Publicado"
  },
  {
    title: "WebRecorder",
    description: "Gravador de tela usando MediaRecorder API.",
    image: "assets/img/projetos/WebRecorder.png",
    link: "https://santiagocalebe.github.io/web-recorder",
    status: "Publicado"
  },
  {
    title: "SantiagoLauncher",
    description: "Launcher de Minecraft usando minecraft_launcher.lib.",
    image: "assets/img/projetos/SLauncher.png",
    link: "https://santiagolauncher.github.io/",
    status: "Publicado"
  },
];

const grid = document.getElementById("projects-grid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="overlay">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <span class="status ${project.status.replace(" ", "-").toLowerCase()}">
        ${project.status}
      </span>
      ${project.link ? `<a href="${project.link}" target="_blank">Ver projeto</a>` : ""}
    </div>
  `;

  grid.appendChild(card);

});
