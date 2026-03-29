function injectStyle() {
  if (document.getElementById("mobile-menu-style")) return;

  const link = document.createElement("link");
  link.id = "mobile-menu-style";
  link.href = "../components/MobileMenu/MobileMenu.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
function createMobileMenu() {
  injectStyle();
  return `
    <!-- Mobile Menu Overlay -->
    <div
      class="mobile-menu-overlay"
      onclick="toggleMenu(); return false;"
    ></div>

    <!-- Mobile Menu Sidebar -->
    <div class="mobile-menu">
      <div class="mobile-menu-header">
        <p class="mobile-menu-header__logo">Kanju</p>
        <button
          class="close-menu"
          onclick="toggleMenu()"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      <ul class="mobile-nav-links">
        <li><a href="../../index.html" class="active">Trang chủ</a></li>
        <li><a href="../../pages/category.html?type=Latest">Văn hóa-Nghệ thuật</a></li>
        <li><a href="../../pages/category.html?type=Business News">Ẩm thực</a></li>
        <li><a href="../../pages/category.html?type=Money and Markets">Đời sống</a></li>
        <li><a href="../../pages/category.html?type=Tech and Innovation">Sức khỏe</a></li>
        <li><a href="../../pages/category.html?type=A.I.">Khoa học</a></li>
        <li><a href="../../pages/category.html?type=Lifestyle">Tình cảm-Gia đình</a></li>
        <li><a href="../../pages/category.html?type=Politics">Công việc</a></li>
        <li><a href="../../pages/category.html?type=Email">Học đường</a></li>
        <li><a href="../../pages/category.html?type=Podcast">Giải trí</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="mobile-menu-footer">
        <div
          id="login-button"
          class="mobile-menu-footer-item"
          onclick="openPopup('login');"
        >
          Login
        </div>
        <div class="mobile-menu-footer-item">Languages</div>
        <div class="mobile-menu-footer-item js-search">Search</div>
        <div class="mobile-menu-footer-item">Newsletter</div>
        <div class="mobile-menu-footer-item js-about">About</div>
      </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("mobile-menu__placeholder");
  if (container) {
    container.innerHTML = createMobileMenu();
    userLoginHTML();
    clickAddPostButton();
    toggleMobileNav();
    const jsSearchEl = document.querySelector(".js-search");
    if (jsSearchEl) {
      jsSearchEl.addEventListener("click", () => {
        window.location.href = "./search.html";
      });
    }

    const jsAboutEl = document.querySelector(".js-about");
    if (jsAboutEl) {
      jsAboutEl.addEventListener("click", () => {
        window.location.href = "./about.html";
      });
    }
  }
});
