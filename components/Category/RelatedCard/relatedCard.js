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
  // Lấy thumbnail thật từ Drive
  const driveThumb = (() => {
    if (!article.video) return null;
    const m = article.video.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w400` : null;
  })();
  const thumbSrc = driveThumb || article.img || '';
  const fallbackIframe = article.video
    ? `this.outerHTML='<iframe src=\\'${article.video}\\' frameborder=\\'0\\' style=\\'width:100%;height:100%;\\'></iframe>'`
    : '';
  const media = `<div class="related-card__media"><img src="${thumbSrc}" alt="${article.description}" style="width:100%;height:100%;object-fit:cover;" onerror="${fallbackIframe}" /></div>`;
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
