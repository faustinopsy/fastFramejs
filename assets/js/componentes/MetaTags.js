export default function adicionarMetaTagsSEO() {
    const head = document.querySelector('head');

    if (!head) {
        console.error('Elemento <head> não encontrado no documento.');
        return;
    }

    const titulo = document.createElement('title');
    titulo.textContent = 'Título da página'; 
    head.appendChild(titulo);

    const descricao = document.createElement('meta');
    descricao.setAttribute('name', 'description');
    descricao.setAttribute('content', 'Descrição da página'); 
    head.appendChild(descricao);

    const autor = document.createElement('meta');
    autor.setAttribute('name', 'author');
    autor.setAttribute('content', 'Seu Nome');
    head.appendChild(autor);

    const palavrasChaves = document.createElement('meta');
    palavrasChaves.setAttribute('name', 'keywords');
    palavrasChaves.setAttribute('content', 'palavra-chave1, palavra-chave2, palavra-chave3');
    head.appendChild(palavrasChaves);

    const tagRobos = document.createElement('meta');
    tagRobos.setAttribute('name', 'robots');
    tagRobos.setAttribute('content', 'index, follow'); 
    head.appendChild(tagRobos);
}


