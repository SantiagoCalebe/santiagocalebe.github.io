document.addEventListener('DOMContentLoaded', function() {
    const urls = {
        'image1': 'https://github.com/HaxeFlixel/flixel',
        'image2': 'https://lua.org/',
    };

    document.getElementById('image1').addEventListener('click', function() {
        window.open(urls['image1'], '_blank');
    });

    document.getElementById('image2').addEventListener('click', function() {
        window.open(urls['image2'], '_blank');
    });

    document.addEventListener('DOMContentLoaded', function() {
        const backdrop = document.querySelector('.backdrop');
        backdrop.style.backgroundImage = "url('images/grid.png')";
    });
    
});

function iniciarContador() {
    const dataInicio = new Date('2024-05-04T00:00:00');

    function atualizarContador() {
        const agora = new Date();

        let diferenca = agora - dataInicio;

        const meses = agora.getMonth() - dataInicio.getMonth() + 
                      (12 * (agora.getFullYear() - dataInicio.getFullYear()));
        
        const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById('meses').innerHTML = `${meses}m`;
        document.getElementById('dias').innerHTML = `${dias}d`;
        document.getElementById('horas').innerHTML = `${horas}h`;
        document.getElementById('segundos').innerHTML = `${segundos}s`;
    }

    setInterval(atualizarContador, 1000);

    atualizarContador();
}

iniciarContador();

const translations = {
    en: {
        about: "About me.",
        greeting: "Heya! My name is Santiago!",
        programming: "I am a Lua, Flixel and Python programmer from Brazil.",
        mods: "I've made some mods in the FNF' Community, like",
        started: "I started making mods on May 4th, 2024.",
        projects: "Coding Section",
        github-projects: "Some of my GitHub projects :3",
        composing: "Composing Section",
        composer-intro: "I am a little composer too :3",
        links: "Links Section",
        socials: "Here's my socials >:3",
        contact: "Contact",
        contact-info: "You can contact me by <a href='https://x.com/santiagoCDEV_' target='_blank'>Twitter [X]</a> (mostly), I may be lazy to answer."
    },
    pt: {
        about: "Sobre mim.",
        greeting: "Olá! Meu nome é Santiago!",
        programming: "Sou um programador Lua, Flixel e Python do Brasil.",
        mods: "Fiz alguns mods na comunidade FNF, como",
        started: "Comecei a fazer mods em 4 de maio de 2024.",
        projects: "Seção de Programação",
        github-projects: "Alguns dos meus projetos no GitHub :3",
        composing: "Seção de Composição",
        composer-intro: "Também sou um pequeno compositor :3",
        links: "Seção de Links",
        socials: "Aqui estão minhas redes sociais >:3",
        contact: "Contato",
        contact-info: "Você pode me contatar pelo <a href='https://x.com/santiagoCDEV_' target='_blank'>Twitter [X]</a> (principalmente), posso demorar para responder."
    },
    es: {
        about: "Sobre mí.",
        greeting: "¡Hola! Me llamo Santiago!",
        programming: "Soy un programador de Lua, Flixel y Python de Brasil.",
        mods: "He hecho algunos mods en la comunidad de FNF, como",
        started: "Comencé a hacer mods el 4 de mayo de 2024.",
        projects: "Sección de Programación",
        github-projects: "Algunos de mis proyectos en GitHub :3",
        composing: "Sección de Composición",
        composer-intro: "También soy un pequeño compositor :3",
        links: "Sección de Enlaces",
        socials: "Aquí están mis redes sociales >:3",
        contact: "Contacto",
        contact-info: "Puedes contactarme por <a href='https://x.com/santiagoCDEV_' target='_blank'>Twitter [X]</a> (principalmente), puede que tarde en responder."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}


document.getElementById("language-selector").addEventListener("change", function () {
    changeLanguage(this.value);
});

changeLanguage("en");

