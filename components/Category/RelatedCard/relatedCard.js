function injectStyle() {
  if (document.getElementById("related-card-style")) return;
  const link = document.createElement("link");
  link.id = "related-card-style";
  link.href = "../components/Category/RelatedCard/relatedCard.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export function createRelatedCard(article) {
  injectStyle();
  const videoUrl = article.video || "https://www.youtube.com/embed/ghzsMFvUMgs";
  const media = `<div class="related-card__media"><iframe src="${videoUrl}" title="${article.description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe></div>`;
  const category = article.type
    ? article.type
    : article.type1
    ? article.type1
    : article.type2
    ? article.type2
    : "Undefined";
  return `
    <a href="post.html?id=${article.id}" class="related-card" data-id="${article.id}">
        <div class="related-card__image">${media}</div>
        <!-- <div class="related-card__category">${category}</div> -->
        <h3 class="related-card__title">${article.description}</h3>
        <div class="related-card__meta">
        <span><i class="far fa-clock"></i> ${article.time}</span>
        <span>Đăng bởi ${article.author}</span>
        </div>
    </a>    
    `;
}
