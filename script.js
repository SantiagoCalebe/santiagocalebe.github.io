document.addEventListener('DOMContentLoaded', function() {
    const urls = {
        'image1': 'https://github.com/HaxeFlixel/flixel',
        'image2': 'https://lua.org/',
    };

    document.getElementById('image1').addEventListener('click', function() {
        window.open(urls['image1'], '_blank'); // Abre em nova janela
    });

    document.getElementById('image2').addEventListener('click', function() {
        window.open(urls['image2'], '_blank'); // Abre em nova janela
    });

    document.addEventListener('DOMContentLoaded', function() {
        const backdrop = document.querySelector('.backdrop');
        backdrop.style.backgroundImage = "url('images/grid.png')";
    });
    
});

function iniciarContador() {
    // Data de início (4 de maio de 2024)
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
