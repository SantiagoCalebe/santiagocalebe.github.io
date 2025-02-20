document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento de IDs das imagens para URLs sem "www."
    const urls = {
        'image1': 'https://github.com/HaxeFlixel/flixel',
        'image2': 'https://lua.org/',
    };

    // Adiciona event listeners para cada imagem
    document.getElementById('image1').addEventListener('click', function() {
        window.open(urls['image1'], '_blank'); // Abre em nova janela
    });

    document.getElementById('image2').addEventListener('click', function() {
        window.open(urls['image2'], '_blank'); // Abre em nova janela
    });

    document.addEventListener('DOMContentLoaded', function() {
        const backdrop = document.querySelector('.backdrop');
        backdrop.style.backgroundImage = "url('images/grid.png')"; // Define a imagem de fundo
    });
    
});

function iniciarContador() {
    // Data de início (4 de maio de 2024)
    const dataInicio = new Date('2024-05-04T00:00:00');

    function atualizarContador() {
        // Data e hora atuais
        const agora = new Date();

        // Diferença em milissegundos entre agora e a data de início
        let diferenca = agora - dataInicio;

        // Calcular meses, dias, horas e segundos
        const meses = agora.getMonth() - dataInicio.getMonth() + 
                      (12 * (agora.getFullYear() - dataInicio.getFullYear()));
        
        const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Enviar o tempo para o HTML
        document.getElementById('meses').innerHTML = `${meses}m`;
        document.getElementById('dias').innerHTML = `${dias}d`;
        document.getElementById('horas').innerHTML = `${horas}h`;
        document.getElementById('segundos').innerHTML = `${segundos}s`;
    }

    // Atualizar o contador a cada segundo
    setInterval(atualizarContador, 1000);

    // Chamar a função inicialmente para exibir o contador imediatamente
    atualizarContador();
}

// Iniciar o contador quando a página carregar
iniciarContador();
