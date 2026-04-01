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

  // Lấy thumbnail thật từ Drive
  const driveThumb = (() => {
    if (!article.video) return null;
    const m = article.video.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w400` : null;
  })();
  const thumbSrc = driveThumb || article.img || '';
  const errorFallback = article.video
    ? `this.outerHTML='<iframe src=\\'${article.video}\\' frameborder=\\'0\\' style=\\'width:100%;height:100%;\\'></iframe>'`
    : '';
  const imageHTML = `<div class="post-card__video"><img src="${thumbSrc}" alt="${article.description}" style="width:100%;height:100%;object-fit:cover;" onerror="${errorFallback}" /></div>`;

  return `
  <article class="article-card" data-id="${
    article.id
  }" onclick="window.location.href='post.html?id=${article.id}'">
  <div class="article-card__image">
    ${imageHTML}
  </div>

  <div class="article-card__content">
    <div>

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
