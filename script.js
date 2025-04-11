document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.getElementById("articles");

    // Load saved articles from local storage
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.forEach(article => {
        const item = document.createElement("div");
        item.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        articlesContainer.appendChild(item);
    });

    // You can add more functionality here, like adding articles, editing, or deleting
});

// Function to save articles
function saveArticle(title, content) {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.push({ title, content });
    localStorage.setItem("articles", JSON.stringify(articles));
}