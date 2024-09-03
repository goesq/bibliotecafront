document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const books = document.querySelectorAll('.book');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        books.forEach(book => {
            const title = book.querySelector('.book-title').textContent.toLowerCase();
            const author = book.querySelector('.book-author').textContent.toLowerCase();

            if (title.includes(searchTerm) || author.includes(searchTerm)) {
                book.style.visibility = 'visible'; // Mostra o livro
                book.style.position = 'relative';  // Garante que o layout seja mantido
            } else {
                book.style.visibility = 'hidden'; // Oculta o livro mas mantém o espaço reservado
                book.style.position = 'absolute';  // Remove o livro do fluxo do layout
            }
        });
    });
});