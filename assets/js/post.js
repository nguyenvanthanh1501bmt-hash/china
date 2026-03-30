import { fullNews } from "./addPost.js";

// Helper: thumbnail thật từ Google Drive
function getDriveThumb(videoUrl) {
  if (!videoUrl) return null;
  const m = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w400` : null;
}

// Lấy ID từ URL parameter
// ---------------------------
function getPostIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id ? parseInt(id) : 1; // Default to post 1 if no ID provided
}

// ---------------------------
// Render tiêu đề bài viết
// ---------------------------
export function renderNewsPortTitle() {
  const container = document.querySelector(".js-title-container");
  if (!container) return;

  const postId = getPostIdFromURL();
  const article = fullNews.find((item) => item.id === postId) || fullNews[0];

  const typeDisplay = article.type ? article.type.toUpperCase() : "";

  container.innerHTML = `
     <p>2 phút để học</p>
     <h1>${article.description}</h1>
     <p>12 tiếng trước</p>
     <p>&nbsp;&nbsp;|&nbsp; Đăng tải 10/09/2025, 12:00 PM ET</p>
     <p class="author-info">Bởi <span class="logo"></span><span class="author-name"><u>${article.author}</u></span></p>
  `;
}

// ---------------------------
// Render nội dung bài viết (HIỂN THỊ VIDEO HOẶC ẢNH)
// ---------------------------
export function renderNewsPortContent() {
  const container = document.querySelector(".js-new-content-container");
  if (!container) return;

  const postId = getPostIdFromURL();
  const article = fullNews.find((item) => item.id === postId) || fullNews[0];

  // Nếu có video → render video, nếu không có → render ảnh đại diện
  const mediaEmbed = article.video && article.video.trim() !== ""
    ? `<div class="news__video-container">
         <iframe src="${article.video}" title="Featured video" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
       </div>`
    : `<div class="news__image-container">
         <img src="${article.img}" alt="${article.description}" />
       </div>`;

  const vocabularyHtml = article.vocabulary && article.vocabulary.length > 0
    ? `<div class="news__vocabulary-box">
         <h3>Vocabulary</h3>
         <ul class="vocab-list">
           ${article.vocabulary.map(v => `<li><strong>${v.word}</strong>: ${v.meaning}</li>`).join("")}
         </ul>
       </div>`
    : "";

  container.innerHTML = `
      <div class="news__media-vocabulary">
        <div class="news__media-left">${mediaEmbed}</div>
        <div class="news__media-right">${vocabularyHtml}</div>
      </div>
      <div class="news__article-content">
         ${article.content || ""}
      </div>
  `;
}

// ---------------------------
// Render các bài liên quan & most-read
// ---------------------------
function renderContentWrapper() {
  const container = document.querySelector(".articles-grid");
  if (!container) return;

  const firstHalf = fullNews.slice(0, Math.ceil(fullNews.length / 2));
  const skipIndex = Math.floor(Math.random() * firstHalf.length);

  const selected = [];
  firstHalf.some((item, index) => {
    if (index === skipIndex) return false; // bỏ bài random
    selected.push(item);
    return selected.length === 4; // đủ 4 bài → dừng
  });

  container.innerHTML = selected
    .map(
      (article) => `
    <div class="article-card" data-id="${article.id}">
      ${(() => {
        const thumb = getDriveThumb(article.video) || article.img || '';
        const fallback = article.video
          ? `this.outerHTML='<iframe src=\'${article.video}\' frameborder=\'0\' allow=\'autoplay\' allowfullscreen></iframe>'`
          : '';
        return thumb
          ? `<img src="${thumb}" alt="${article.description}" onerror="${fallback}" style="width:100%;height:200px;object-fit:cover;border-radius:8px;margin-bottom:10px;" />`
          : '';
      })()}
      <h3 class="article-title">${article.description}</h3>
      <p class="article-meta">2 phút để đọc</p>
    </div>`
    )
    .join("");

  const articleCards = container.querySelectorAll(".article-card");
  articleCards.forEach((card) => {
    const id = card.getAttribute("data-id");
    if (!id) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.location.href = `./post.html?id=${id}`;
    });
  });

  // Most-read
  const containerTwo = document.querySelector(".most-read-list");
  if (!containerTwo) return;

  const mostRead = fullNews
    .slice()
    .sort((a, b) => (b.id || 0) - (a.id || 0))
    .slice(0, 6);

  containerTwo.innerHTML = mostRead
    .map(
      (article, index) => `
         <li class="most-read-item" data-id="${article.id}">
            <span class="most-read-number">${index + 1}</span>
            <p class="most-read-title">${article.description}</p>
        </li>`
    )
    .join("");

  const mostReadItems = containerTwo.querySelectorAll(".most-read-item");
  mostReadItems.forEach((li, idx) => {
    const art = mostRead[idx];
    if (!art) return;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      window.location.href = `./post.html?id=${art.id}`;
    });
  });
}

// ---------------------------
// INIT
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderNewsPortTitle();
  renderNewsPortContent();
  renderContentWrapper();
});