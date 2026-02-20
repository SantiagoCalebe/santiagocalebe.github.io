const words = [
  "JavaScript foi criado em apenas 10 dias?",
  "HTML não é uma linguagem de programação?",
  "CSS significa Cascading Style Sheets?",
  "Python foi nomeado em homenagem ao Monty Python?",
  "Git foi criado por Linus Torvalds?",
  "O primeiro bug de computador foi uma mariposa de verdade?",
  "Java e JavaScript são linguagens diferentes?",
  "C é mais antigo que a maioria das linguagens modernas?",
  "TypeScript é um superset do JavaScript?",
  "JSON significa JavaScript Object Notation?",
  "SQL é usado para consultar bancos de dados?",
  "Linux é open source?",
  "Open source significa código publicamente acessível?",
  "Stack Overflow foi lançado em 2008?",
  "GitHub foi fundado em 2008?",
  "Recursão significa uma função chamando a si mesma?",
  "APIs permitem que softwares se comuniquem?",
  "HTTP significa HyperText Transfer Protocol?",
  "HTTPS é a versão segura do HTTP?",
  "Um booleano possui apenas dois valores?",
  "Binário usa apenas zeros e uns?",
  "Algoritmos são instruções passo a passo?",
  "Compiladores traduzem código para linguagem de máquina?",
  "Debugging é o processo de corrigir erros?",
  "Frameworks aceleram o desenvolvimento?",
  "Node.js permite JavaScript no servidor?",
  "React é uma biblioteca JavaScript para interfaces?",
  "Angular é um framework frontend?",
  "Vue é conhecido pela simplicidade?",
  "Variáveis armazenam valores de dados?",
  "Constantes não podem ser reatribuídas?",
  "Arrays armazenam múltiplos valores?",
  "Objetos armazenam pares chave-valor?",
  "Funções ajudam a reutilizar código?",
  "Loops repetem ações?",
  "Condicionais controlam o fluxo do programa?",
  "Controle de versão rastreia mudanças no código?",
  "Docker usa containers?",
  "Computação em nuvem entrega serviços online?",
  "DevOps combina desenvolvimento e operações?",
  "Criptografia protege dados sensíveis?",
  "Hashing é uma criptografia de mão única?",
  "Machine learning é um subconjunto da IA?",
  "Inteligência artificial simula o pensamento humano?",
  "REST é um estilo arquitetural?",
  "GraphQL consulta dados específicos?",
  "CSS Flexbox ajuda a organizar layouts?",
  "CSS Grid é um layout bidimensional?",
  "Design responsivo se adapta às telas?",
  "Mobile first começa pelo menor tamanho?",
  "Uma pilha segue o último a entrar, primeiro a sair?",
  "Uma fila segue o primeiro a entrar, primeiro a sair?",
  "Big O mede a eficiência de algoritmos?",
  "Refatoração melhora a estrutura do código?",
  "Clean code melhora a legibilidade?",
  "Testes unitários testam pequenas partes?",
  "Testes de integração testam partes combinadas?",
  "CI significa integração contínua?",
  "CD significa entrega contínua?",
  "APIs podem retornar JSON?",
  "Cache melhora a performance?",
  "Cookies armazenam pequenos dados no navegador?",
  "LocalStorage persiste dados no navegador?",
  "Uma promise representa um valor futuro?",
  "Async/await simplifica promises?",
  "Null e undefined são diferentes?",
  "Modo estrito detecta erros silenciosos?",
  "Transpiladores convertem código moderno?",
  "WebAssembly roda próximo da velocidade nativa?",
  "Ponto e vírgula são opcionais no JavaScript?",
  "NPM significa Node Package Manager?",
  "Yarn é um gerenciador de pacotes alternativo?",
  "APIs abertas incentivam integrações?",
  "Markdown formata texto simples?",
  "YAML é frequentemente usado para configurações?",
  "XML era amplamente usado antes do JSON?",
  "Programação funcional evita efeitos colaterais?",
  "Programação orientada a objetos usa classes?",
  "Herança permite reutilização de código?",
  "Polimorfismo significa muitas formas?",
  "Encapsulamento oculta detalhes de implementação?",
  "Microserviços dividem apps em pequenos serviços?",
  "Monólitos agrupam tudo em um único sistema?",
  "Serverless não significa sem servidores?",
  "Edge computing processa dados mais perto do usuário?",
  "WebSockets permitem comunicação em tempo real?",
  "TCP garante transmissão confiável?",
  "UDP é mais rápido, mas menos confiável?",
  "IPv6 suporta mais endereços?",
  "ASCII codifica caracteres como números?",
  "Unicode suporta muitos idiomas?",
  "Cron jobs agendam tarefas?",
  "Bash é um shell Unix?",
  "PowerShell é popular no Windows?",
  "Projetos open source dependem de contribuidores?",
  "Code reviews melhoram a qualidade?",
  "Documentação economiza tempo de desenvolvimento?"
];

const element = document.getElementById("randomize");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 35;
const switchDelay = 1500;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    element.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), switchDelay);
    }
  } else {
    element.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      element.textContent = " "
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
}

typeEffect();