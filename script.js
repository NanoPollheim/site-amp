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
// pega todas as imagens
// ESPERA A PÁGINA CARREGAR
document.addEventListener("DOMContentLoaded", function () {

    const imagens = document.querySelectorAll('.produto');
    const modal = document.getElementById('modal');
    const imagemGrande = document.getElementById('imagem-grande');
    const fechar = document.querySelector('.fechar');

    // SE NÃO ENCONTRAR ELEMENTOS → PARA (evita erro)
    if (!modal || !imagemGrande || !fechar) return;

    imagens.forEach(imagem => {
        imagem.addEventListener('click', function () {
            modal.style.display = 'flex';
            imagemGrande.src = this.src;
        });
    });

    fechar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});
