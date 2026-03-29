import { toggleNav } from "../../assets/js/category.js";

function injectStyle() {
  if (document.getElementById("navbar-style")) return;

  const link = document.createElement("link");
  link.id = "navbar-style";
  link.href = "../components/Navbar/Navbar.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
function createNavbar() {
  injectStyle();
  return `
    <nav class="nav__container">
        <div class="nav__top">
            <div class="nav-item-wrapper">
                <div class="nav__search">
                    <a href="../../pages/search.html">
                        Tìm kiếm
                    </a>
                </div>
            </div>
            
            <div class="nav-item-wrapper">
                <div class="nav__logo">
                    <a href="../../index.html">
                        KanJu
                    </a>
                </div>
            </div>
            <div class="nav-item-wrapper">
                <div class="nav__about">
                    <a href="../../pages/about.html">
                        Giới thiệu
                    </a>
                </div>
            </div>
            <div class="nav-item-wrapper">
                <div class="nav__hamburgermenu" onclick="toggleMenu(); return false;" aria-label="Toggle menu">
                    <div class="nav__hamburgermenu__icon menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav__bottom">
            <ul class="nav__categories">
                <li><a href="../../index.html">Trang chủ</a></li>
                <li><a href="../../pages/category.html?type=Latest">Văn hóa-Nghệ thuật</a></li>
                <li><a href="../../pages/category.html?type=Business News">Ẩm thực</a></li>
                <li><a href="../../pages/category.html?type=Money and Markets">Đời sống</a></li>
                <li><a href="../../pages/category.html?type=Tech and Innovation">Sức khỏe</a></li>
                <li><a href="../../pages/category.html?type=A.I.">Khoa học</a></li>
                <li><a href="../../pages/category.html?type=Lifestyle">Tình cảm-Gia đình</a></li>
                <li><a href="../../pages/category.html?type=Politics">Công việc</a></li>
                <li><a href="../../pages/category.html?type=Email">Học đường</a></li>
                <li><a href="../../pages/category.html?type=Podcast">Giải trí</a></li>
            </ul>
        </div>
    </nav>
    `;
}
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar__placeholder");
  console.log(container);
  if (container) {
    console.log("Loaded");
    container.innerHTML = createNavbar();
    toggleNav();

    document.querySelector(".nav__search").addEventListener("click", () => {
      window.location.href = "./search.html";
    });
    document.querySelector(".nav__about").addEventListener("click", () => {
      window.location.href = "./about.html";
    });
  }
});
