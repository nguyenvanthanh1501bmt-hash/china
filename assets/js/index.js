import { newsData } from "../data/newsData.js";
import { toggleMenu } from "./header.js";

// 1. Helper render media: video iframe nếu có, else ảnh
function renderMedia(item, className = '') {
  if (item.video) {
    return `<div class="${className}" style="width:100%;height:0;padding-bottom:56.25%;position:relative;overflow:hidden;border-radius:12px;"><iframe src="${item.video}" title="${item.title || 'Video'}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;"></iframe></div>`;
  }
  if (item.image) {
    return `<div class="${className}"><img src="../assets/${item.image}" alt="${item.title || 'Image'}"></div>`;
  }
  return '';
}

// 1. Render Featured News
function renderFeatured() {
  const { title, description, image, video } = newsData.featured;
  const featuredMedia = renderMedia({ image, video, title });
  const featuredImg = document.querySelector('.boxupperleft__img');
  if (featuredImg) {
    featuredImg.innerHTML = featuredMedia;
  }
  document.querySelector('.boxupperleft__description h1').textContent = title;
  document.querySelector('.boxupperleft__description p').textContent = description;
}

// 2. Render Latest News
function renderLatest() {
  const container = document.querySelector('.latestnews');
  container.innerHTML = newsData.latest.map(item => `
  <div class = 'latest-new'>
    <h2>${item.title}</h2>
    <p>${item.time}</p>
  </div>
    `).join('');
}

// 3. Render Three News
function renderThreeNews() {
  const container = document.querySelector('.threenews');
  container.innerHTML = newsData.threeNews.map(item => `
    <div class="threenews__oii">
        <div class="threenews__img">
        ${renderMedia(item, 'threenews__video')}
      </div>
      <div class="threenews__description">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

// 4. Render Lifestyle
function renderLifestyle() {
  const { big, small } = newsData.lifestyle;

  // Big news
  const bigImage = document.querySelector('.bignews__img');
  if (bigImage) bigImage.innerHTML = renderMedia(big, 'bignews__img');
  document.querySelector('.bignews__description p').textContent = big.title;

  // Small news
  const containers = document.querySelectorAll('.smallnews > div');
  small.forEach((item, i) => {
    if (containers[i]) {
      containers[i].querySelector('.smallnews__img').innerHTML = renderMedia(item, 'smallnews__img');
      containers[i].querySelector('.smallnews__description p').textContent = item.title;
    }
  });
}

// 5. Render Topics (Money, Tech, Business, Politics)
function renderTopics() {
  const topicContainers = document.querySelectorAll('.topic');
  const topics = Object.values(newsData.topics);

  topics.forEach((topic, index) => {
    const container = topicContainers[index];
    if (!container) return;

    // Ép tên theo đúng thứ tự xuất hiện trên trang web của bạn
    let displayTitle = "";
    if (index === 0) displayTitle = "Đời sống";   // Ô đầu tiên
    if (index === 1) displayTitle = "Sức khỏe";   // Ô thứ hai
    if (index === 2) displayTitle = "Ẩm thực";    // Ô thứ ba
    if (index === 3) displayTitle = "Công việc";  // Ô thứ tư
    
    // Nếu không thuộc 4 ô trên thì lấy tên gốc
    if (!displayTitle) displayTitle = topic.title;

    // Tạo HTML cho danh sách bài viết
    const newsHTML = topic.news.map(item => `
      <div class="news">
        <div class="news__img">
          ${renderMedia(item, 'topic-video')}
        </div>
        <div class="news__description">
          <p>${item.title}</p>
        </div>
      </div>
    `).join('');

    // Giữ lại cái khung quảng cáo (block) nếu có
    const blockElement = container.querySelector('.block');
    const blockHTML = blockElement ? blockElement.outerHTML : '';

    // Ghi đè vào giao diện
    container.innerHTML = `<h2>${displayTitle}</h2>${newsHTML}${blockHTML}`;
  });
}

// 6. Render AI Section
function renderAI() {
  const { main, sideNews } = newsData.ai;

  // Main AI news
  const aiMainImg = document.querySelector('.AI_maintopic .AI__img');
  if (aiMainImg) aiMainImg.innerHTML = renderMedia(main, 'ai-main-video');
  document.querySelector('.AI_maintopic .AI__description h3').textContent = main.title;
  document.querySelector('.AI_maintopic .AI__description p').textContent = main.description;

  // Side news
  const newsContainers = document.querySelectorAll('.AI__right > div:not(.block)');
  sideNews.forEach((item, i) => {
    if (newsContainers[i]) {
      const container = newsContainers[i].querySelector('.img__container');
      if (container) container.innerHTML = renderMedia(item, 'ai-side-video');
      const titleP = newsContainers[i].querySelector('.AI__title p');
      if (titleP) titleP.textContent = item.title;
    }
  });
}

// 7. Render Popular Section
function renderPopular() {
  const { grid1, businessMain, grid3 } = newsData.popular;

  // Grid 1 - Most Popular
  const grid1Contents = document.querySelectorAll('.grid__box1 > div:not(.grid1__title)');
  grid1.forEach((item, i) => {
    const gridItem = grid1Contents[i];
    if (!gridItem) return;
    const mediaSlot = gridItem.querySelector('.grid1__content1-img, .grid1__content2-img');
    if (mediaSlot) mediaSlot.innerHTML = renderMedia(item, 'popular-video');
    const titleEl = gridItem.querySelector('h2');
    if (titleEl) titleEl.textContent = item.category;
    const pEl = gridItem.querySelector('p');
    if (pEl) pEl.textContent = item.title;
  });

  // Grid 2 - Business Main
  const businessImg = document.querySelector('.business__news-img');
  if (businessImg) businessImg.innerHTML = renderMedia(businessMain, 'business-video');
  document.querySelector('.business__title').textContent = businessMain.category;
  document.querySelector('.p2').textContent = businessMain.title;
  document.querySelector('.business__news-description p').textContent = businessMain.description;

  // Grid 3
  const grid3Containers = [document.querySelector('.lifestyle'), document.querySelector('.politics')];
  grid3.forEach((item, i) => {
    if (grid3Containers[i]) {
      const imgEl = grid3Containers[i].querySelector('img');
      if (imgEl && imgEl.parentElement) {
        imgEl.parentElement.innerHTML = renderMedia(item, 'grid3-video');
      }
      const h2 = grid3Containers[i].querySelector('h2');
      const p = grid3Containers[i].querySelector('p');
      if (h2) h2.textContent = item.category;
      if (p) p.textContent = item.title;
    }
  });
}
// Setup click handlers cho các bài báo
function setupClickHandlers() {
  // Featured news
  const featuredBox = document.querySelector('.boxupperleft');
  if (featuredBox && newsData.featured.id) {
    featuredBox.addEventListener('click', () => {
      window.location.href = `../../pages/post.html?id=${newsData.featured.id}`;
    });
  }

  // Latest news
  const latestNewsItems = document.querySelectorAll('.latest-new');
  latestNewsItems.forEach((item, index) => {
    const newsItem1 = newsData.latest[index];
    if (newsItem1 && newsItem1.id) {
      item.addEventListener('click', () => {
        window.location.href = `../../pages/post.html?id=${newsItem1.id}`;
      });
    }
  });
  // Three news
  const threeNewsItems = document.querySelectorAll('.threenews__oii');
  threeNewsItems.forEach((item, index) => {
    const newsItem = newsData.threeNews[index];
    if (newsItem && newsItem.id) {
      item.addEventListener('click', () => {
        window.location.href = `../../pages/post.html?id=${newsItem.id}`;
      });
    }
  });

  // Lifestyle big
  const lifestyleBig = document.querySelector('.bignews');
  if (lifestyleBig && newsData.lifestyle.big.id) {
    lifestyleBig.addEventListener('click', () => {
      window.location.href = `../../pages/post.html?id=${newsData.lifestyle.big.id}`;
    });
  }

  // Lifestyle small
  const lifestyleSmall = document.querySelectorAll('.smallnews > div');
  lifestyleSmall.forEach((item, index) => {
    const newsItem = newsData.lifestyle.small[index];
    if (newsItem && newsItem.id) {
      item.addEventListener('click', () => {
        window.location.href = `../../pages/post.html?id=${newsItem.id}`;
      });
    }
  });

  // Topics news
  const topicContainers = document.querySelectorAll('.topic');
  const topics = Object.values(newsData.topics);
  topics.forEach((topic, topicIndex) => {
    const newsItems = topicContainers[topicIndex].querySelectorAll('.news');
    newsItems.forEach((item, newsIndex) => {
      const newsItem = topic.news[newsIndex];
      if (newsItem && newsItem.id) {
        item.addEventListener('click', () => {
          window.location.href = `../../pages/post.html?id=${newsItem.id}`;
        });
      }
    });
  });

  // AI main
  const aiMain = document.querySelector('.AI_maintopic');
  if (aiMain && newsData.ai.main.id) {
    aiMain.addEventListener('click', () => {
      window.location.href = `../../pages/post.html?id=${newsData.ai.main.id}`;
    });
  }

  // AI side news
  const aiNews = document.querySelectorAll('.AI__right > div:not(.block)');
  aiNews.forEach((item, index) => {
    const newsItem = newsData.ai.sideNews[index];
    if (newsItem && newsItem.id) {
      item.addEventListener('click', () => {
        window.location.href = `../../pages/post.html?id=${newsItem.id}`;
      });
    }
  });

  // Popular grid1
  const popularGrid1 = document.querySelectorAll('.grid__box1 > div:not(.grid1__title)');
  popularGrid1.forEach((item, index) => {
    const newsItem = newsData.popular.grid1[index];
    if (newsItem && newsItem.id) {
      item.addEventListener('click', () => {
        window.location.href = `../../pages/post.html?id=${newsItem.id}`;
      });
    }
  });

  // Popular businessMain
  const businessMain = document.querySelector('.bussiness__news');
  if (businessMain && newsData.popular.businessMain.id) {
    businessMain.addEventListener('click', () => {
      window.location.href = `../../pages/post.html?id=${newsData.popular.businessMain.id}`;
    });
  }

  // Popular grid3
  const popularGrid3 = [document.querySelector('.lifestyle'), document.querySelector('.politics')];
  popularGrid3.forEach((item, index) => {
    if (item) {
      const newsItem = newsData.popular.grid3[index];
      if (newsItem && newsItem.id) {
        item.addEventListener('click', () => {
          window.location.href = `../../pages/post.html?id=${newsItem.id}`;
        });
      }
    }
  });
}
// ===== KHỞI ĐỘNG =====
function initNews() {
  renderFeatured();
  renderLatest();
  renderThreeNews();
  renderLifestyle();
  renderTopics();
  renderAI();
  renderPopular();
  setupClickHandlers();
}
// Chạy khi DOM đã load
document.addEventListener('DOMContentLoaded', initNews);
window.toggleMenu = toggleMenu;

