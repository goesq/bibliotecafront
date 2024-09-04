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
            description: "Daniel era mágico, e aprendeu mágica, assim: de repente. Primeiro, ele percebeu mudanças misteriosas: dormiu em um quarto e acordou em outro... Depois, fez um ovo virar pintinho... e a cama se tornar avião! Daniel se impressionava, mas decidiu não contar seu segredo a ninguém... Quer dizer, falou só para seu primo Jorge, o garoto mais inteligente de todos.  Afinal, eles eram melhores amigos e companheiros de aventuras! “Faz de conta que...” são as poderosas palavras do menino mágico que transformam poesia em realidade e a realidade em poesia. Encantamentos, amizade, família, coragem e uma boa dose de confusão são os ingredientes deste que foi o primeiro livro infantil da grande escritora Rachel de Queiroz, a primeira mulher a entrar na Academia Brasileira de Letras. O menino mágico conta as histórias de Daniel e seu primo Jorge, o garoto mais inteligente de todos, em aventuras pelo Rio de Janeiro.",
            image: "img/meninomagico.png",
            rating: 4.2
        },
        "sitio": {
            title: "O Sítio do Picapau Amarelo",
            author: "Lobato, Monteiro",
            description: "O livro da coleção trenzinho, conta algumas histórias curtas, recomendadas para crianças menores, de um dos maiores escritores da literatura infantil monteiro lobato. Os livros contam histórias clássicas e marcantes do escritor, com tia nastácia, narizinho, emília, pedrinho, visconde e entre outros, contando com dez títulos na coleção.",
            image: "img/sitio.png",
            rating: 4.8
        },
        "sempalavras": {
            title: "Se Você Ficar Sem Palavras",
            author: "Sala, Felicita",
            description: "Pai? Hum? O que acontece se você ficar sem palavras? Você ainda vai ter alguma para me dizer? Não seja boba! Eu NUNCA ficaria sem palavras! Mas e se você FICAR? Nesta criativa história de ninar, um pai busca tranquilizar sua filha, contando até onde ele iria para demonstrar seu amor. Ele a acalma com a resposta perfeita: se ficar sem palavras, ele vai visitar a Fábrica de Palavras dos Elfos para nunca mais ficar sem, é claro! Mesmo que isso signifique ter que enfrentar as florestas mais escuras, escapar de piratas ou até mesmo pilotar um foguete de volta para casa. Não há nada que possa ficar entre pai e filha – e não há palavras suficientes para descrever o quanto ele a ama. Cativante, bem-humorado e genuíno, Se você ficar sem palavras, escrito e ilustrado pela premiada artista Felicita Sala, é um livro amoroso e sensível que conquistará leitores de todas as idades.",
            image: "img/sempalavras.png",
            rating: 4.1
        },
        "oz": {
            title: "O Maravilhoso Mágico de Oz",
            author: "Frank Baum",
            description: "Munchkins, Quadlings e pessoas de porcelana são alguns dos moradores desse lugar incrível para onde a pequena Dorothy foi enviada por um ciclone com seu cãozinho Totó. Agora, ela precisa seguir pela estrada de tijolos amarelos até chegar à Cidade de Esmeraldas. Lá vive o poderoso Mágico de Oz, que pode ser capaz de ajudá-la a voltar para casa. E nessa jornada ela encontrará amigos, perigos e muitas aventuras.",
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
        },
        "divertidamente": {
            title: "Divertidamente",
            author: "Allen, Elise",
            description: "Como a maioria das pessoas, Riley, de onze anos, é guiada por suas Emoções: Alegria, Nojinho, Medo, Raiva e Tristeza. Tendo Alegria como a Emoção predominante, Riley sempre foi uma menina feliz. Ela adora sua casa em Minnesota, tem um ótimo relacionamento com a mãe e o pai, e vive para jogar hóquei com sua melhor amiga. Mas quando Riley e seus pais atravessam o país e se mudam para São Francisco, seu mundo vira de cabeça para baixo e suas Emoções são abaladas.",
            image: "img/divertidamente.png",
            rating: 4.0
        },
        "salgueiro": {
            title: "O Vento nos Salgueiros",
            author: "Grahame, Kenneth",
            description: "Descrição do livro 'O Vento nos Salgueiros' ainda não disponível.",
            image: "img/salgueiro.png",
            rating: 4.2
        },
        "esefosse": {
            title: "E se Fosse com Você?",
            author: "Sandra Saurê",
            description: "Animal e sua turma agridem os colegas do colégio. Eles colocam apelidos horrorosos naqueles que são considerados diferentes. A professora Nancy, no entanto, descobre um modo eficiente de acabar com isso. Além de divertido, este livro é educativo, pois dá orientações de como coibir essa prática, nada agradável, que algumas pessoas têm de depreciar as outras. Vale a pena ler.",
            image: "img/esefosse.png",
            rating: 4.3
        },
        "homemcao": {
            title: "O Homem-Cão: O Senhor das Pulgas",
            author: "Pilkey, Dav",
            description: "Quando o oficial Rocha e seu cachorro Greg sofreram um acidente, o único jeito de os dois sobreviverem foi fundindo a cabeça do cão ao corpo do policial ― e foi assim que nasceu o Homem-Cão, o maior protetor da cidade! Desde então, nosso herói encontrou vários cãopanheiros: o Chefe, a poodle Zuzu, o robô Formigão e Pepezinho, um adorável gatinho. Quando um novo grupo de caras malvados aparece na cidade, o Homem-Cão entra em ação ― e ele não está sozinho! Ao lado de Pepezinho e do Formigão, nosso Cãovaleiro das Trevas faz parte do grupo Superamigos, heróis sempre prontos para salvar todo mundo da cidade. Desta vez eles vão precisar unir forças a um aliado inesperado: o arqui-inimigo Pepê, o gato mais malvado do mundo. Mas será que ele é tão mau assim? Descubra a origem da vilania de Pepê e se ele finalmente vai deixar a amizade vencer pelo menos uma vez.",
            image: "img/homemcao.png",
            rating: 4.1
        },
        "darua": {
            title: "Os Meninos da Rua Paulo",
            author: "Molnár, Ferenc",
            description: "Budapeste, 1889. No bairro de Józsefváros, entre uma aula e outra, os meninos da Sociedade do Betume passam seu tempo no grund, um terreno baldio que eles consideram sua pátria. Quando os Camisas Vermelhas, gangue de meninos que se reúne nos jardins próximos, tentam tomar a área, os meninos da rua Paulo são forçados a defender o lugar em que brincam. A história dos meninos que travam batalhas de vida ou morte nas ruas de Budapeste, no final do século XIX, ainda fascina leitores de várias gerações. Ferenc Molnár escreveu sobre amizade, orgulho, coragem, honra, traição e amadurecimento. Ele fala sobre perda, mostra a dificuldade de ser pobre e a inevitabilidade de ser adulto e viver desgostos",
            image: "img/darua.png",
            rating: 4.5
        },
        "ilha": {
            title: "A Ilha do Tesouro",
            author: "Steverson, Robert Louis",
            description: "A vida de Jim Hawkins nunca mais será a mesma depois de conhecer Billy Jones. O velho lobo do mar possui um mapa que mostra o local onde está escondido um tesouro de pirata. Agora o mapa está com Jim e ele parte em uma expedição sem imaginar o que o aguarda – seja navegando pelo mar ou em terra firme.",
            image: "img/ilha.png",
            rating: 4.7
        },
        "judite": {
            title: "Judite",
            author: "Person, Jussara",
            description: "Uma cutia esquecida é surpreendida por uma invasão de passarinhos. Qual será a melhor maneira de espantar esses intrusos? Os desastrosos planos de Judite acabam levando-a a um voo inesperado.",
            image: "img/judite.png",
            rating: 4.2
        },
        "droga": {
            title: "A Droga da Obediência",
            author: "Bandeira, Pedro",
            description: "Uma turma de adolescentes enfrenta o mais diabólico dos crimes! Num clima de muito mistério e suspense, cinco estudantes – os Karas – enfrentam uma macabra trama internacional: o sinistro Doutor Q.I. pretende subjugar a humanidade aos seus desígnios, aplicando na juventude uma perigosa droga! E essa droga já está sendo experimentada em alunos dos melhores colégios de São Paulo. Esse é um trabalho para os Karas: o avesso dos coroas, o contrário dos caretas!",
            image: "img/droga.png",
            rating: 4.4
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
        document.getElementById('book-content').innerHTML = "<p>Pedimos desculpa pelo ocorrido, livro não disponível ou encontrado.</p>";
    }
});
