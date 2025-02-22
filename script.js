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
