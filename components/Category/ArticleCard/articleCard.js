function injectStyles() {
  if (document.getElementById("article-card-style")) return;

  const link = document.createElement("link");
  link.id = "article-card-style";
  link.href = "../components/Category/ArticleCard/articleCard.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
function truncateSimple(str, n = 30) {
  return str.length <= n ? str : str.slice(0, n) + "...";
}
export function createArticleCard(article) {
  injectStyles();

  const videoUrl = article.video || "https://www.youtube.com/embed/ghzsMFvUMgs";
  const imageHTML = `<div class="post-card__video"><iframe src="${videoUrl}" title="${article.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe></div>`;

  return `
  <article class="article-card" data-id="${
    article.id
  }" onclick="window.location.href='post.html?id=${article.id}'">
  <div class="article-card__image">
    ${imageHTML}
  </div>

  <div class="article-card__content">
    <div>
      <div class="article-card__category">${article.type}</div>
      <h2 class="article-card__title">${article.description}</h2>
      <h3 class="article-card__excerpt">${truncateSimple(
        article.content,
        100
      )}</h3>
    </div>

    <div class="article-card__meta">
      <span>9:53 11-17-2025 </span>
      <span>Đăng bởi ${article.author}</span>
    </div>
  </div>
</article>
    `;
}
