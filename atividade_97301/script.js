const elementoH1 = document.getElementById('titulo');
const elementoUl = document.querySelector('ul');
const elementoA = document.querySelector('[href^="https"]');
const elementoOl = document.querySelector('#lista-ordenada');

elementoH1.innerText = `Curso de Cloud com a Proz e AWS`;
elementoA.innerText = `Acesse Proz Educação e saiba mais.`;

elementoUl.innerHTML = `
    <li>Cursos</li>
    <li>Contatos</li>
    <li>Dúvidas Frequentes</li>
`;
elementoOl.innerHTML = `
    <li><a href="https://www.facebook.com/prozeducacaobr" target="_blank">Facebook</a></li>
    <li><a href="https://www.instagram.com/prozeducacaobr/" target="_blank">Instagram</a></li>
    <li><a href="https://www.youtube.com/c/ProzEduca%C3%A7%C3%A3obr" target="_blank">YouTube</a></li>
`;