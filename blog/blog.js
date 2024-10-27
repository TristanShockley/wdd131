document.addEventListener('DOMContentLoaded', () => {
  const articles = [
      {
          id: 1,
          title: "Septimus Heap Book One: Magyk",
          date: "July 5, 2022",
          description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
          imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
          imgAlt: "Book cover for Septimus Heap 1",
          ages: "10-14",
          genre: "Fantasy",
          stars: "****"
      },
      {
          id: 2,
          title: "Magnus Chase Book One: Sword of Summer",
          date: "December 12, 2021",
          description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Rick decides to try his hand with Norse Mythology.",
          imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
          imgAlt: "Book cover for Magnus Chase 1",
          ages: "12-16",
          genre: "Fantasy",
          stars: "⭐⭐⭐⭐"
      },
      {
          id: 3,
          title: "Belgariad Book One: Pawn of Prophecy",
          date: "Feb 12, 2022",
          description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man called Wolf, set out on a complex mission.",
          imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
          imgAlt: "Book cover for Pawn of Prophecy",
          ages: "12-16",
          genre: "Fantasy",
          stars: "⭐⭐⭐⭐⭐"
      }
  ];

  const bookReviewsSection = document.getElementById('book-reviews');

  // Display articles
  articles.forEach((article) => {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = `
          <div class="date-genre">
              <p>${article.date}</p>
              <p>${article.ages}</p>
              <p>${article.genre}</p>
              <p>${article.stars}</p>
          </div>
          <div class="article-content">
              <h2>${article.title}</h2>
              <img src="${article.imgSrc}" alt="${article.imgAlt}">
              <p>${article.description}</p>
              <a href="#" class="read-more">Read More...</a>
          </div>
      `;
      bookReviewsSection.appendChild(articleElement);
  });

  // Filter function
  document.getElementById('age-range').addEventListener('change', applyFilter);

  function applyFilter() {
      const selectedAgeRange = document.getElementById('age-range').value;
      bookReviewsSection.innerHTML = '';

      const filteredArticles = selectedAgeRange === 'all' ? articles : articles.filter(article => article.ages === selectedAgeRange);

      filteredArticles.forEach((article) => {
          const articleElement = document.createElement('article');
          articleElement.innerHTML = `
              <div class="date-genre">
                  <p>${article.date}</p>
                  <p>${article.ages}</p>
                  <p>${article.genre}</p>
                  <p>${article.stars}</p>
              </div>
              <div class="article-content">
                  <h2>${article.title}</h2>
                  <img src="${article.imgSrc}" alt="${article.imgAlt}">
                  <p>${article.description}</p>
                  <a href="#" class="read-more">Read More...</a>
              </div>
          `;
          bookReviewsSection.appendChild(articleElement);
      });
  }
});
