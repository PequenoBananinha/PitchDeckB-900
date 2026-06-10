// script.js
function scaleSlides() {
    const wrappers = document.querySelectorAll('.slide-wrapper');
    wrappers.forEach(wrapper => {
        const slide = wrapper.querySelector('.slide');
        if (!slide) return;
        const available = wrapper.clientWidth;
        const scale = available / 7200;
        slide.style.transform = `scale(${scale})`;
        slide.style.transformOrigin = 'top left';
        wrapper.style.height = (1080 * scale) + 'px';
    });
}

scaleSlides();
window.addEventListener('resize', scaleSlides);

// BÔNUS: Sistema de Navegação entre as páginas
const pages = [
    'index.html', 'slide02.html', 'slide03.html', 'slide04.html', 'slide05.html',
    'slide06.html', 'slide07.html', 'slide08.html', 'slide09.html', 'slide10.html'
];

document.addEventListener('keydown', (e) => {
    // Pega o nome do arquivo atual. Se estiver vazio (raiz do site), assume que é o index.html
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }
    
    const currentIndex = pages.indexOf(currentPage);
    
    if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        window.location.href = pages[currentIndex - 1];
    }
});
