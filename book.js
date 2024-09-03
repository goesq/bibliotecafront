document.addEventListener('DOMContentLoaded', () => {
    // Função para obter o valor de um parâmetro da URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Obter o parâmetro 'book'
    const bookId = getQueryParam('book');

    // Dados dos livros
    const bookContent = {
        "elon": {
            title: "Elon Musk",
            author: "Isaacson, Walter",
            description: "Uma biografia detalhada do empreendedor Elon Musk."
        },
        "marcal": {
            title: "Os Códigos do Milhão",
            author: "Marçal, Pablo",
            description: "Um guia sobre estratégias para alcançar o sucesso financeiro."
        },
        "racionais": {
            title: "Sobrevivendo no Inferno",
            author: "Racionais",
            description: "Um marco do rap nacional com letras que retratam a realidade social."
        },
        "jordan": {
            title: "Nunca Deixe de Tentar",
            author: "Jordan, Michael",
            description: "Histórias e lições inspiradoras do lendário jogador de basquete."
        },
        "hoover": {
            title: "É Assim que Acaba",
            author: "Hoover, Colleen",
            description: "Uma história de amor que desafia as expectativas e os limites pessoais."
        },
        "90sec": {
            title: "Como Convencer Alguém em 90 Segundos",
            author: "Boothman, Nicholas",
            description: "Técnicas para causar uma ótima primeira impressão e influenciar positivamente."
        },
        "primorico": {
            title: "Do Mil ao Milhão",
            author: "Nigro, Thiago",
            description: "Estratégias e conselhos para alcançar a independência financeira."
        },
        "babilonia": {
            title: "O Homem mais Rico da Babilônia",
            author: "Clason, George",
            description: "Princípios financeiros baseados em parábolas da antiga Babilônia."
        }
    };

    const book = bookContent[bookId];

    if (book) {
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-content').innerHTML = `
            <p><strong>Autor:</strong> ${book.author}</p>
            <p>${book.description}</p>
        `;
    } else {
        document.getElementById('book-content').innerHTML = "<p>Livro não encontrado.</p>";
    }
});
