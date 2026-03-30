function injectStyles() {
  if (document.getElementById("trending-card-style")) return;
  const link = document.createElement("style");
  link.id = "trending-card-style";
  link.href = "../components/Category/TrendingCard/trendingCard.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function getDriveThumb(videoUrl, size = 'w400') {
  if (!videoUrl) return null;
  const m = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=${size}` : null;
}

export function createTrendingCard(article, rank) {
  injectStyles();

  const thumb = getDriveThumb(article.video) || article.img || '';
  const fallback = article.video
    ? `this.outerHTML='<iframe src=\\'${article.video}\\' frameborder=\\'0\\' style=\\'width:100%;height:100%;\\'></iframe>'`
    : '';

  return `
  <a href="post.html?id=${article.id}" class="trending__item">
  <div class="trending__left">
    <div class="trending__number">${rank}</div>
  </div>

  <div class="trending__image">
    <img src="${thumb}" alt="${article.description}" onerror="${fallback}" style="width:100%;height:100%;object-fit:cover;" />
  </div>

  <div class="trending__content">
    <h4 class="trending__title">${article.description}</h4>
    <div class="trending__meta">${article.views} views today</div>
  </div>
</a>
    `;
}
