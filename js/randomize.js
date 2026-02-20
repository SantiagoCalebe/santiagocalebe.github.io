const words = [
  "JavaScript was created in just 10 days?",
  "HTML is not a programming language?",
  "CSS stands for Cascading Style Sheets?",
  "Python was named after Monty Python?",
  "Git was created by Linus Torvalds?",
  "The first computer bug was an actual moth?",
  "Java and JavaScript are different languages?",
  "C is older than most modern languages?",
  "TypeScript is a superset of JavaScript?",
  "JSON stands for JavaScript Object Notation?",
  "SQL is used to query databases?",
  "Linux is open source?",
  "Open source means publicly accessible code?",
  "Stack Overflow was launched in 2008?",
  "GitHub was founded in 2008?",
  "Recursion means a function calling itself?",
  "APIs allow software to communicate?",
  "HTTP stands for HyperText Transfer Protocol?",
  "HTTPS is the secure version of HTTP?",
  "A boolean has only two values?",
  "Binary uses only zeros and ones?",
  "Algorithms are step by step instructions?",
  "Compilers translate code into machine language?",
  "Debugging is the process of fixing errors?",
  "Frameworks speed up development?",
  "Node.js allows JavaScript on the server?",
  "React is a JavaScript library for UI?",
  "Angular is a frontend framework?",
  "Vue is known for simplicity?",
  "Variables store data values?",
  "Constants cannot be reassigned?",
  "Arrays store multiple values?",
  "Objects store key value pairs?",
  "Functions help reuse code?",
  "Loops repeat actions?",
  "Conditionals control program flow?",
  "Version control tracks code changes?",
  "Docker uses containers?",
  "Cloud computing delivers services online?",
  "DevOps combines development and operations?",
  "Encryption protects sensitive data?",
  "Hashing is one way encryption?",
  "Machine learning is a subset of AI?",
  "Artificial intelligence simulates human thinking?",
  "REST is an architectural style?",
  "GraphQL queries specific data?",
  "CSS Flexbox helps layout elements?",
  "CSS Grid is two dimensional layout?",
  "Responsive design adapts to screens?",
  "Mobile first design starts small?",
  "A stack follows last in first out?",
  "A queue follows first in first out?",
  "Big O measures algorithm efficiency?",
  "Refactoring improves code structure?",
  "Clean code improves readability?",
  "Unit tests test small pieces?",
  "Integration tests test combined parts?",
  "CI means continuous integration?",
  "CD means continuous delivery?",
  "APIs can return JSON?",
  "Caching improves performance?",
  "Cookies store small browser data?",
  "LocalStorage persists data in browser?",
  "A promise represents future value?",
  "Async await simplifies promises?",
  "Null and undefined are different?",
  "Strict mode catches silent errors?",
  "Transpilers convert modern code?",
  "WebAssembly runs near native speed?",
  "Semicolons are optional in JavaScript?",
  "Npm stands for Node Package Manager?",
  "Yarn is an alternative package manager?",
  "Open APIs encourage integrations?",
  "Markdown formats plain text?",
  "YAML is often used for configs?",
  "XML was widely used before JSON?",
  "Functional programming avoids side effects?",
  "Object oriented programming uses classes?",
  "Inheritance allows code reuse?",
  "Polymorphism means many forms?",
  "Encapsulation hides implementation details?",
  "Microservices break apps into small services?",
  "Monoliths bundle everything together?",
  "Serverless does not mean no servers?",
  "Edge computing processes data closer?",
  "WebSockets enable real time communication?",
  "TCP ensures reliable transmission?",
  "UDP is faster but less reliable?",
  "IPv6 supports more addresses?",
  "ASCII encodes characters as numbers?",
  "Unicode supports many languages?",
  "Cron jobs schedule tasks?",
  "Bash is a Unix shell?",
  "PowerShell is popular on Windows?",
  "Open source projects rely on contributors?",
  "Code reviews improve quality?",
  "Documentation saves development time"
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