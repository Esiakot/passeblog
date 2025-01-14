    const searchInput = document.getElementById('search-input');
    const articles = document.querySelectorAll('.article');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        
        articles.forEach(article => {
            const keywords = article.getAttribute('data-keywords').toLowerCase();
            
            if (keywords.includes(query)) {
                article.style.display = ''; // Affiche l'article
            } else {
                article.style.display = 'none'; // Cache l'article
            }
        });
    });

