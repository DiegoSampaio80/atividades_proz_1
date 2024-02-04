
let elementBody = document.querySelector('body');
let elementH1 = document.createElement('h1');
elementH1.id = 'titulo';
elementH1.innerHTML = 'Atividade Desenvolvimento Extra 5.3 #97309';

let elementH2 = document.createElement('h2');
elementH2.innerHTML = 'Carrinho de Compras';

elementBody.appendChild(elementH1);
elementBody.appendChild(elementH2);

let listaProdutos = [
    {
        imagemCard: './img/tenis.png',
        tituloCard: 'TÊNIS NIKE DC3729 003 REVOLUTION 6 PRETO/BRANCO',
        decricaoCard: `
            <p>Tênis Nike DC3729 Revolution 6 Preto/Branco.</p>
            <p>Cabedal: Tecido.</p>
            <p>Fechamento: Por Cadarço na Parte Central.</p>
        `,
        precoCard: '<p>R$ 449,00</p>'
    }, 
    {
        imagemCard: './img/tenis.png',
        tituloCard: 'TÊNIS NIKE DC3729 003 REVOLUTION 6 PRETO/BRANCO',
        decricaoCard: `
            <p>Tênis Nike DC3729 Revolution 6 Preto/Branco.</p>
            <p>Cabedal: Tecido.</p>
            <p>Fechamento: Por Cadarço na Parte Central.</p>
        `,
        precoCard: '<p>R$ 449,00</p>'
    }, 
    {
        imagemCard: './img/tenis.png',
        tituloCard: 'TÊNIS NIKE DC3729 003 REVOLUTION 6 PRETO/BRANCO',
        decricaoCard: `
            <p>Tênis Nike DC3729 Revolution 6 Preto/Branco.</p>
            <p>Cabedal: Tecido.</p>
            <p>Fechamento: Por Cadarço na Parte Central.</p>
        `,
        precoCard: '<p>R$ 449,00</p>'
    }, 
    {
        imagemCard: './img/tenis.png',
        tituloCard: 'TÊNIS NIKE DC3729 003 REVOLUTION 6 PRETO/BRANCO',
        decricaoCard: `
            <p>Tênis Nike DC3729 Revolution 6 Preto/Branco.</p>
            <p>Cabedal: Tecido.</p>
            <p>Fechamento: Por Cadarço na Parte Central.</p>
        `,
        precoCard: '<p>R$ 449,00</p>'
    }
];

let sectionCards = document.createElement('section');
sectionCards.classList.add('sectionCards');
elementBody.appendChild(sectionCards);

listaProdutos.forEach(item => {
    console.log(item.tituloCard);
    let mold_ext_card = document.createElement('div');
    mold_ext_card.classList.add('mold_ext_card');
    let mold_int_card = document.createElement('div');
    mold_int_card.classList.add('mold_int_card');
    let imagemCard = document.createElement('img');
    imagemCard.classList.add('imagemCard');
    imagemCard.setAttribute('alt', 'imagem de tênis da marca nike');
    imagemCard.setAttribute('src', `${item.imagemCard}`);
    let tituloCard = document.createElement('h3');
    tituloCard.innerHTML = `${item.tituloCard}`;
    let decricaoCard = document.createElement('div');
    decricaoCard.innerHTML = `${item.decricaoCard}`;
    let precoCard = document.createElement('div');
    precoCard.classList.add('precoCard');
    precoCard.innerHTML = `${item.precoCard}`;
    sectionCards.appendChild(mold_ext_card);
    mold_ext_card.appendChild(mold_int_card);
    mold_int_card.appendChild(imagemCard);
    mold_int_card.appendChild(tituloCard);
    mold_int_card.appendChild(decricaoCard);
    mold_int_card.appendChild(precoCard);
});
