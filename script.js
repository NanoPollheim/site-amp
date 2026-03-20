const elementos = document.querySelectorAll('.imagem');

function animarScroll() {

    elementos.forEach(elemento => {

        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add('ativo');
        }

    });

}

window.addEventListener('scroll', animarScroll);
animarScroll();