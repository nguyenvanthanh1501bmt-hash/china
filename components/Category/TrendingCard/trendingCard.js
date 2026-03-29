function injectStyles() {
  if (document.getElementById("trending-card-style")) return;
  const link = document.createElement("style");
  link.id = "trending-card-style";
  link.href = "../components/Category/TrendingCard/trendingCard.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
export function createTrendingCard(article, rank) {
  injectStyles();
  return `
  <a href="post.html?id=${article.id}" class="trending__item">
  <div class="trending__left">
    <div class="trending__number">${rank}</div>
  </div>

  <div class="trending__image">
    <iframe src="${article.video || "https://www.youtube.com/embed/ghzsMFvUMgs"}" title="${article.description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>
  </div>

  <div class="trending__content">
    <h4 class="trending__title">${article.description}</h4>
    <div class="trending__meta">${article.views} views today</div>
  </div>
</a>
    `;
}
