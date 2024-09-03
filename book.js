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
            description: "Durante a infância, Elon Musk sofria muito bullying. Após ter levado uma surra especialmente violenta, precisou ficar no hospital por uma semana. As cicatrizes e os ferimentos físicos, porém, não foram nada comparados à reação de seu pai, um engenheiro delirante e carismático, mas também perverso. Apesar das tentativas de Musk de banir a figura paterna ― física e psicologicamente ― da própria vida, sua psique sofreria os impactos por muito tempo.",
            image: "img/elon.png",
            rating: 4.5
        },
        "marcal": {
            title: "Os Códigos do Milhão",
            author: "Marçal, Pablo",
            description: "Você já imaginou como seria ter uma vida financeira tranquila e próspera? Os Códigos do Milhão, o livro de Pablo Marçal, pode ajudá-lo a alcançar esse objetivo. Com estratégias e insights para o sucesso financeiro, este livro oferece conselhos práticos e inspiração motivacional para ajudá-lo a alcançar seus objetivos financeiros e de vida.",
            image: "img/marcal.png",
            rating: 3.8
        },
        "racionais": {
            title: "Sobrevivendo no Inferno",
            author: "Racionais",
            description: "Na virada para os anos 1990, os Racionais MCs emergiram como um dos mais importantes acontecimentos da cultura brasileira. Incensado pela crítica, o disco Sobrevivendo no inferno vendeu mais de um milhão e meio de cópias. Agora publicados em livro, precedidos por um texto de apresentação e intermeados por fotos clássicas e inéditas, os raps dos Racionais são a imagem mais bem-acabada de uma sociedade que se tornou humanamente inviável, e uma tentativa radical, esteticamente brilhante, de sobreviver a ela.",
            image: "img/racionais.png",
            rating: 5.0
        },
        "jordan": {
            title: "Nunca Deixe de Tentar",
            author: "Jordan, Michael",
            description: "Este é o primeiro título da coleção Na Vida Como no Esporte, que revela os princípios nos quais grandes atletas e treinadores pautaram suas trajetórias e mostra como esses valores transcendem o universo esportivo e podem ser aplicados à vida pessoal e profissional.",
            image: "img/jordan.png",
            rating: 4.7
        },
        "hoover": {
            title: "É Assim que Acaba",
            author: "Hoover, Colleen",
            description: "Em É assim que acaba , Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.",
            image: "img/hoover.png",
            rating: 5
        },
        "90sec": {
            title: "Como Convencer Alguém em 90 Segundos",
            author: "Boothman, Nicholas",
            description: "Neste livro, o especialista Nicholas Boothman ensina como usar o rosto, o corpo, a atitude e a voz para causar uma primeira impressão marcante, estabelecendo confiança imediata e criando fortes vínculos de credibilidade.",
            image: "img/90sec.png",
            rating: 4.3
        },
        "primorico": {
            title: "Do Mil ao Milhão",
            author: "Nigro, Thiago",
            description: "Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais. Por meio de dados e de sua própria experiência como investidor e assessor, Nigro mostra que a riqueza é possível para todos – basta estar disposto a aprender e se dedicar.",
            image: "img/primorico.png",
            rating: 4.6
        },
        "babilonia": {
            title: "O Homem mais Rico da Babilônia",
            author: "Clason, George",
            description: "Baseando-se nos segredos de sucesso dos antigos babilônicos ― os habitantes da cidade mais rica e próspera de seu tempo ―, George S. Clason mostra soluções ao mesmo tempo sábias e muito atuais para evitar a falta de dinheiro, como não desperdiçar recursos durante tempos de opulência, buscar conhecimento e informação em vez de apenas lucro, assegurar uma renda para o futuro, manter a pontualidade no pagamento de dívidas e, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais habilidoso e consciente.",
            image: "img/babilonia.png",
            rating: 4.9
        },
        // Novos livros
        "meninomagico": {
            title: "O Menino Mágico",
            author: "Queiroz, Rachel de",
            description: "O Menino Mágico é uma obra encantadora que narra a história de um jovem com habilidades extraordinárias que transformam a vida de todos ao seu redor.",
            image: "img/meninomagico.png",
            rating: 4.2
        },
        "sitio": {
            title: "O Sítio do Picapau Amarelo",
            author: "Lobato, Monteiro",
            description: "O Sítio do Picapau Amarelo é um clássico da literatura infantil brasileira que traz as aventuras de crianças em um mundo mágico e cheio de fantasia.",
            image: "img/sitio.png",
            rating: 4.8
        },
        "sempalavras": {
            title: "Se Você Ficar Sem Palavras",
            author: "Sala, Felicita",
            description: "Se Você Ficar Sem Palavras é um guia inspirador para aqueles que buscam melhorar suas habilidades de comunicação e expressar-se de forma eficaz.",
            image: "img/sempalavras.png",
            rating: 4.1
        },
        "oz": {
            title: "O Maravilhoso Mágico de Oz",
            author: "Frank Baum",
            description: "O Maravilhoso Mágico de Oz é um conto mágico que segue a jornada de Dorothy e seus amigos em busca de um caminho de volta para casa e de um futuro melhor.",
            image: "img/oz.png",
            rating: 4.7
        },
        "peterpan": {
            title: "Peter Pan",
            author: "Barrie, James",
            description: "Todas as crianças crescem, menos uma. Como pó de fada, há cem anos estas palavras transportam os leitores para um mundo mágico, povoado pela família Darling e pelos habitantes da Terra do Nunca - Peter Pan, os meninos perdidos, Sininho, crocodilos, sereias, o Capitão Gancho e seus piratas...",
            image: "img/peterpan.png",
            rating: 4.6
        },
        "principe": {
            title: "O Pequeno Principe",
            author: "Saint-Exupéry, Antoine de",
            description: "Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana. Um livro para todos os públicos, O pequeno príncipe é uma obra atemporal, com metáforas pertinentes e aprendizados sobre afeto, sonhos, esperança e tudo aquilo que é invisível aos olhos. ",
            image: "img/principe.png",
            rating: 4.9
        },
        "maluquinho": {
            title: "O Menino Maluquinho",
            author: "Ziraldo",
            description: "Aquele era um menino muito sabido, esperto, inteligente! Tinha macaquinhos no sótão, embora não soubesse o que isso queria dizer... Brincava, agitava a casa, animava a todos com sua energia e vivacidade. Seria ele um anjinho, um saci? Alegria da casa, na escola, liderava a garotada na hora do intervalo. Adorava fazer versinhos, compor canções, inventar novos jogos e brincadeiras. Era um amigão. “Que Menino Maluquinho”, diziam sorrindo as pessoas que o conheciam. Não era nada disso, não! Só mais tarde descobriram que ele tinha sido um garoto muito amado e muito feliz.",
            image: "img/maluquinho.png",
            rating: 4.4
        },
        "alice": {
            title: "Alice no País das Maravilhas",
            author: "Carroll, Lewis",
            description: "Alice no País das Maravilhas foi publicado em 1965 e é um clássico da literatura nonsense. Além da história da menina entediada que persegue um coelho branco, há várias passagens no livro que abordam física, filosofia e lógica. A continuação dessa história aparece em outra obra do autor, Alice através do espelho..",
            image: "img/alice.png",
            rating: 4.3
        }
    };

    const book = bookContent[bookId];

    if (book) {
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-author').textContent = `Autor: ${book.author}`;
        document.getElementById('book-description').textContent = book.description;
        document.getElementById('book-image').src = book.image;

        // Adicionar avaliação em estrelas
        const ratingContainer = document.getElementById('book-rating');
        const rating = book.rating;
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            if (i < Math.floor(rating)) {
                star.innerHTML = '★'; // Estrela preenchida
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                star.innerHTML = '☆'; // Estrela vazia
            } else {
                star.innerHTML = '☆'; // Estrela vazia
            }
            ratingContainer.appendChild(star);
        }
    } else {
        document.getElementById('book-content').innerHTML = "<p>Livro não encontrado.</p>";
    }
});
