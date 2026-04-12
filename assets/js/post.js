import { fullNews } from "./addPost.js";
import { quizData } from "../data/quizData.js";

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
         <h3>Từ vựng mới</h3>
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

// Render Quiz Section

function renderQuizSection() {
  const postId = getPostIdFromURL();
  const quiz = quizData[postId];
  if (!quiz) return;

  const contentContainer = document.querySelector(".news__content-container");
  if (!contentContainer) return;

  const quizWrapper = document.createElement("div");
  quizWrapper.className = "quiz-section";
  quizWrapper.id = "quizSection";

  const types = [];
  if (quiz.type1) types.push({ key: "type1", data: quiz.type1 });
  if (quiz.type2) types.push({ key: "type2", data: quiz.type2 });

  const tabsHtml = types
    .map(
      (t, i) => `<button class="quiz-tab${i === 0 ? ' quiz-tab--active' : ''}" data-tab="${t.key}">
        <span class="quiz-tab__icon"><i class="fa-solid ${t.key === 'type1' ? 'fa-pen-to-square' : 'fa-book-open'}"></i></span>
        <span class="quiz-tab__label">${t.data.title}</span>
      </button>`
    )
    .join("");

  const panelsHtml = types
    .map(
      (t, i) => `<div class="quiz-panel${i === 0 ? ' quiz-panel--active' : ''}" data-panel="${t.key}">
        ${t.data.questions
          .map(
            (q, qIdx) => `<div class="quiz-question" id="quiz-${t.key}-q${qIdx}">
              <div class="quiz-question__header">
                <span class="quiz-question__number">Câu ${qIdx + 1}</span>
                <span class="quiz-question__status" id="status-${t.key}-${qIdx}"></span>
              </div>
              <p class="quiz-question__text">${q.question.replace(/\n/g, '<br>')}</p>
              <div class="quiz-options">
                ${q.options
                  .map(
                    (opt, optIdx) => `<button class="quiz-option" data-type="${t.key}" data-q="${qIdx}" data-opt="${optIdx}">
                      <span class="quiz-option__letter">${String.fromCharCode(65 + optIdx)}</span>
                      <span class="quiz-option__text">${opt}</span>
                    </button>`
                  )
                  .join("")}
              </div>
              <div class="quiz-explain" id="explain-${t.key}-${qIdx}"></div>
            </div>`
          )
          .join("")}
        <div class="quiz-score" id="score-${t.key}">
          <div class="quiz-score__bar"><div class="quiz-score__fill" id="fill-${t.key}"></div></div>
          <span class="quiz-score__text" id="scoreText-${t.key}">0 / ${t.data.questions.length}</span>
        </div>
      </div>`
    )
    .join("");

  quizWrapper.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-header__icon"><i class="fa-solid fa-bullseye"></i></div>
      <h2 class="quiz-header__title">Trắc nghiệm</h2>
      <p class="quiz-header__subtitle">Kiểm tra hiểu biết của bạn về bài học</p>
    </div>
    <div class="quiz-tabs">${tabsHtml}</div>
    <div class="quiz-panels">${panelsHtml}</div>
  `;

  contentContainer.after(quizWrapper);


  quizWrapper.querySelectorAll(".quiz-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      quizWrapper.querySelectorAll(".quiz-tab").forEach((t) => t.classList.remove("quiz-tab--active"));
      quizWrapper.querySelectorAll(".quiz-panel").forEach((p) => p.classList.remove("quiz-panel--active"));
      tab.classList.add("quiz-tab--active");
      const panelKey = tab.dataset.tab;
      quizWrapper.querySelector(`.quiz-panel[data-panel="${panelKey}"]`).classList.add("quiz-panel--active");
    });
  });

  const scores = {};
  types.forEach((t) => (scores[t.key] = { correct: 0, answered: 0, total: t.data.questions.length }));

  quizWrapper.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { type, q, opt } = btn.dataset;
      const qIdx = parseInt(q);
      const optIdx = parseInt(opt);
      const questionData = quiz[type].questions[qIdx];
      const questionEl = document.getElementById(`quiz-${type}-q${qIdx}`);

      if (questionEl.classList.contains("quiz-question--answered")) return;
      questionEl.classList.add("quiz-question--answered");

      const allOpts = questionEl.querySelectorAll(".quiz-option");
      const statusEl = document.getElementById(`status-${type}-${qIdx}`);
      const explainEl = document.getElementById(`explain-${type}-${qIdx}`);

      const isCorrect = optIdx === questionData.answer;

      allOpts.forEach((o, idx) => {
        o.disabled = true;
        if (idx === questionData.answer) {
          o.classList.add("quiz-option--correct");
        }
        if (idx === optIdx && !isCorrect) {
          o.classList.add("quiz-option--wrong");
        }
      });

      if (isCorrect) {
        statusEl.innerHTML = '<span class="quiz-status--correct"><i class="fa-solid fa-circle-check"></i> Chính xác!</span>';
        scores[type].correct++;
      } else {
        statusEl.innerHTML = '<span class="quiz-status--wrong"><i class="fa-solid fa-circle-xmark"></i> Sai rồi</span>';
      }
      scores[type].answered++;

      if (questionData.explain) {
        explainEl.innerHTML = `<span class="quiz-explain__icon"><i class="fa-solid fa-lightbulb"></i></span> ${questionData.explain}`;
        explainEl.classList.add("quiz-explain--visible");
      }

      const scoreText = document.getElementById(`scoreText-${type}`);
      const fill = document.getElementById(`fill-${type}`);
      scoreText.textContent = `${scores[type].correct} / ${scores[type].total}`;
      fill.style.width = `${(scores[type].correct / scores[type].total) * 100}%`;

      if (scores[type].answered === scores[type].total) {
        const pct = Math.round((scores[type].correct / scores[type].total) * 100);
        const iconClass = pct === 100 ? 'fa-trophy' : pct >= 60 ? 'fa-star' : 'fa-hand-fist';
        scoreText.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${scores[type].correct} / ${scores[type].total} (${pct}%)`;
      }
    });
  });
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
  renderQuizSection();
  renderContentWrapper();
});