<script setup>
import HeaderSearch from './HeaderSearch.vue';
</script>

<template>
  <header>
    <div class="header__top theme-bg-1 d-none d-md-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="header__top-left">
              <span
                >Do đợt dịch bệnh <strong>COVID-19</strong>, các đơn hàng có thể được xử lý chậm hơn
                một chút.</span
              >
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="header__top-right d-flex align-items-center">
              <div class="header__top-link">
                <a href="#">Vị trí cửa hàng</a>
                <a href="#">Theo dõi đơn hàng</a>
                <a href="faq.html">FAQs</a>
              </div>
              <div class="header__lang">
                <span class="header__lang-select"
                  >Tiếng Anh <i class="far fa-solid fa-angle-down"></i
                ></span>
                <ul class="header__lang-submenu">
                  <li>
                    <a href="#">Úc</a>
                  </li>
                  <li>
                    <a href="#">Tây Ban Nha</a>
                  </li>
                  <li>
                    <a href="#">Brazil</a>
                  </li>
                  <li>
                    <a href="#">Anh</a>
                  </li>
                  <li>
                    <a href="#">Pháp</a>
                  </li>
                  <li>
                    <a href="#">Hoa Kỳ</a>
                  </li>
                </ul>
              </div>
              <div class="header__top-price">
                <select style="display: none">
                  <option>USD</option>
                  <option>ARS</option>
                  <option>AUD</option>
                  <option>BRL</option>
                  <option>GBP</option>
                  <option>DKK</option>
                  <option>EUR</option>
                </select>
                <div class="nice-select" tabindex="0">
                  <span class="current">USD</span>
                  <ul class="list">
                    <li data-value="USD" class="option selected focus">USD</li>
                    <li data-value="ARS" class="option">ARS</li>
                    <li data-value="AUD" class="option">AUD</li>
                    <li data-value="BRL" class="option">BRL</li>
                    <li data-value="GBP" class="option">GBP</li>
                    <li data-value="DKK" class="option">DKK</li>
                    <li data-value="EUR" class="option">EUR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Menu -->
    <div id="header-sticky" class="header__main-area d-none d-xl-block">
      <div class="container">
        <div class="header__for-megamenu p-relative">
          <div class="row align-items-center">
            <div class="col-xl-3">
              <div class="header__logo">
                <a href="index.html"><img src="../assets/img/logo/logo.png" alt="logo" /></a>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="header__menu main-menu text-center">
                <nav id="mobile-menu" style="display: block">
                  <ul>
                    <li class="has-dropdown has-homemenu">
                      <a href="index.html">Home</a>
                      <ul class="sub-menu home-menu-style">
                        <li>
                          <a href="index.html"
                            ><img src="../assets/img/header/home1-1.jpg" alt="" /> Home Page V1</a
                          >
                        </li>
                        <li>
                          <a href="index-2.html"
                            ><img src="../assets/img/header/home2-1.jpg" alt="" /> Home Page V2</a
                          >
                        </li>
                        <li>
                          <a href="index-3.html"
                            ><img src="../assets/img/header/home3-1.jpg" alt="" /> Home Page V3</a
                          >
                        </li>
                        <li>
                          <a href="index-4.html"
                            ><img src="../assets/img/header/home4-1.jpg" alt="" /> Home Page V4</a
                          >
                        </li>
                        <li>
                          <a href="index-5.html"
                            ><img src="../assets/img/header/home5-1.jpg" alt="" /> Home Page V5</a
                          >
                        </li>
                        <li>
                          <a href="index-6.html"
                            ><img src="../assets/img/header/home6-1.jpg" alt="" /> Home Page V6</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown has-megamenu">
                      <a href="course-grid.html">Shop</a>
                      <ul
                        class="sub-menu mega-menu"
                        data-background="../assets/img/banner/mega-menu-shop-1.jpg"
                        style="background-image: url('../assets/img/banner/mega-menu-shop-1.jpg')"
                      >
                        <li>
                          <a class="mega-menu-title">Shop layout</a>
                          <ul>
                            <li><a href="shop-left-sidebar.html">Shop With Banner </a></li>
                            <li><a href="shop-3.html">Shop Without Banner</a></li>
                            <li><a href="shop-2.html">Shop Version</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Right sidebar</a></li>
                            <li><a href="shop-list-view.html">Shop List view</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Product layout</a>
                          <ul>
                            <li><a href="shop-details-3.html">Image scroll</a></li>
                            <li><a href="shop-details-grid.html">Product grid</a></li>
                            <li><a href="shop-details-top.html">Top Thumb Product</a></li>
                            <li><a href="shop-details.html">Bottom Thumb Product</a></li>
                            <li><a href="shop-details-4.html">Simple Product</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Product type</a>
                          <ul>
                            <li><a href="shop-details.html">Products Simple</a></li>
                            <li><a href="shop-details-grid.html">Products Group</a></li>
                            <li><a href="shop-details-3.html">Products Variable</a></li>
                            <li><a href="shop-details-3.html">Special</a></li>
                            <li><a href="shop-details-4.html">Decoration</a></li>
                            <li><a href="shop-details-top.html">Contruction</a></li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega-menu-title">Product category</a>
                          <ul>
                            <li><a href="shop-details.html">Fresh bakery</a></li>
                            <li><a href="shop-details-3.html">Fresh fruits</a></li>
                            <li><a href="shop-details-4.html">Fresh meat</a></li>
                            <li><a href="shop-details.html">Fruit drink</a></li>
                            <li><a href="shop-details.html">Fresh bakery</a></li>
                            <li><a href="shop-details-grid.html">Biscuits snack</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="blog.html">Blog</a>
                      <ul class="sub-menu">
                        <li><a href="blog.html">Big image</a></li>
                        <li><a href="blog-right-sidebar.html">Right sidebar</a></li>
                        <li><a href="blog-left-sidebar.html">Left sidebar</a></li>
                        <li><a href="blog-details.html">Single Post</a></li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <a href="about.html">Pages</a>
                      <ul class="sub-menu">
                        <li><a href="shop-location.html">Shop Location One</a></li>
                        <li><a href="shop-location-2.html">Shop Location Two</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="log-in.html">Sign In</a></li>
                        <li><a href="comming-soon.html">Coming soon</a></li>
                        <li><a href="404.html">Page 404</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="header__info d-flex align-items-center">
                <div class="header__info-search tpcolor__purple ml-10">
                  <button class="tp-search-toggle"><i class="icon-search"></i></button>
                </div>
                <div class="header__info-user tpcolor__yellow ml-10">
                  <a href="log-in.html"><i class="icon-user"></i></a>
                </div>
                <div class="header__info-wishlist tpcolor__greenish ml-10">
                  <a href="wishlist.html"><i class="icon-heart icons"></i></a>
                </div>
                <div class="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                  <button>
                    <i><img src="../assets/img/icon/cart-1.svg" alt="" /></i>
                    <span>5</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeaderSearch/>
  </header>
</template>

<style scoped>
.header__top-left span {
  color: var(--tp-common-white);
  font-size: 13px;
}

.header__top-left span strong {
  font-weight: 400;
  color: var(--tp-text-1);
  font-size: 13px;
}
.header__top-right {
  justify-content: end;
}
.header__top-link a {
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 13px;
  margin-left: 25px;
  cursor: pointer;
}
.header__top-link a:hover {
  color: var(--tp-heading-secondary);
}

.header__lang {
  position: relative;
  z-index: 99;
  padding: 7px 0;
}

.header__lang-select {
  color: var(--tp-common-white);
  padding-left: 15px;
  margin-left: 15px;
  position: relative;
}

.header__lang-select::before {
  position: absolute;
  content: '';
  left: 0;
  background-color: #5e5aa3;
  height: 15px;
  width: 1px;
  top: 50%;
  transform: translateY(-50%);
}
.header__lang-select i {
  font-size: 14px;
  margin-left: 2px;
  color: #b0afcc;
  font-family: 'Font Awesome 5 Pro';
}
.header__lang-submenu {
  position: absolute;
  top: 110%;
  left: 0px;
  width: 120px;
  background: var(--tp-common-white);
  z-index: 9;
  padding: 14px 16px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-out 0s;
  box-shadow: 0px 8px 20px rgba(61, 110, 168, 0.1);
  border-radius: 0px 0px 5px 5px;
}
.header__lang-submenu li {
  list-style: none;
  margin-bottom: 5px;
}
.header__lang:hover .header__lang-select {
  opacity: 1;
  visibility: visible;
  top: 100%;
}
.header__top-price .nice-select {
  background: var(--tp-heading-primary);
  color: #fff;
  border: none;
  font-size: 13px;
  height: 40px;
  width: 60px;
  padding-right: 16px;
  font-weight: 400;
  margin-left: 5px;
}

.header__main-area {
  border: 1px solid #e6eaf0;
}
.main-menu ul li.has-homemenu {
  position: static;
}

.main-menu ul li {
  position: relative;
  display: inline-block;
  line-height: 1;
  list-style: none;
}

.main-menu ul li.has-dropdown > a {
  position: relative;
}

.main-menu ul li:hover.has-dropdown a::after {
    color: var(--tp-heading-secondary);
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-menu ul li a {
    padding: 32px 10px;
  }
}
.main-menu ul li a {
  color: inherit;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  padding: 32px 12px;
}

.main-menu ul li.has-dropdown > a::after {
  content: '\e94f';
  font-size: 14px;
  color: var(--tp-common-black);
  font-family: 'icon-dukamarket';
  font-weight: 400;
  margin-left: 6px;
  display: inline-block;
  font-weight: var(--tp-fw-bold);
}

.main-menu ul li.has-dropdown:hover .sub-menu {
  visibility: visible;
  opacity: 1;
  top: 100%;
}
.main-menu ul li .home-menu-style {
display: flex;
  width: 100%;
}
.main-menu ul li .sub-menu {
  position: absolute;
  top: 120%;
  left: 0;
  min-width: 270px;
  padding: 30px 0;
  background-color: var(--tp-common-white);
  z-index: 2;
  transition:
    opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    visibility 0.4s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 8px 20px rgba(61, 110, 168, 0.1);
  border-radius: 0px 0px 10px 10px;
  border-top: 2px solid var(--tp-heading-secondary);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.main-menu ul li .home-menu-style li a {
  text-align: center;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.main-menu ul li .sub-menu > li > a {
  display: block;
  font-family: var(--font-body);
  text-transform: none;
  padding: 10px 0;
  padding-left: 0px;
  color: #334763;
  font-size: var(--menu-font-size);
  font-weight: normal;
  white-space: normal;
  word-wrap: break-word;
  word-break: normal;
  transition: 0.3s;
  line-height: 131%;
  text-align: left;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

.main-menu ul li .home-menu-style li a:hover {
    padding-left: 0px;
    transform: scale(0.92);
}

.main-menu ul li .sub-menu > li > a:hover {
    color: var(--tp-heading-secondary);
    padding-left: 8px;
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-menu ul li a {
    padding: 32px 10px;
  }
}
.main-menu ul li a {
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  padding: 32px 12px;
}
.main-menu ul li .home-menu-style li a img {
  border: 1px solid rgba(222, 226, 230, 0.5607843137);
  border-radius: 10px;
  width: 100%;
  display: block;
  margin-bottom: 25px;
}

.main-menu ul li.has-megamenu {
  position: static;
}

.main-menu ul li {
  position: relative;
  display: inline-block;
  line-height: 1;
  list-style: none;
}

.main-menu ul li a:hover {
  color: var(--tp-heading-secondary);
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .main-menu ul li .home-menu-style li {
        width: 220px;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-menu ul li .home-menu-style li {
    width: 175px;
  }
}

.main-menu ul li .home-menu-style li {
  display: inline-block;
  padding: 0 10px;
  width: 230px;
}
.main-menu ul li .sub-menu > li {
  margin: 0;
  list-style: none;
  display: block;
}

.main-menu ul li:nth-of-type(3) .sub-menu,
.main-menu ul li:nth-of-type(4) .sub-menu {
    padding: 0 20px 0 40px;
}

.main-menu ul li .home-menu-style li a img {
  border: 1px solid rgba(222, 226, 230, 0.5607843137);
  border-radius: 10px;
  width: 100%;
  display: block;
  margin-bottom: 25px;
}

.main-menu ul li .mega-menu {
    padding: 35px 40px 26px 40px;
    position: absolute;
    top: 120%;
    width: 1200px;
    background-color: var(--tp-common-white);
    left: 0;
    right: 0;
    z-index: 9999;
    transform-origin: top;
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    margin: 0 auto;
    box-shadow: 0px 8px 20px rgba(61, 110, 168, 0.1);
    border-radius: 0px 0px 10px 10px;
    border-top: 2px solid var(--tp-heading-secondary);
}

.main-menu ul li.has-megamenu {
    position: static;
}

.main-menu ul li .mega-menu li .mega-menu-title {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 13px;
    position: relative;
    text-transform: uppercase;
    color: var(--tp-heading-secondary);
    font-family: "Jost", sans-serif;
    margin-bottom: 10px;
}

.main-menu ul li .mega-menu li ul li {
    padding-left: 0;
    text-align: left;
}

.main-menu ul li .mega-menu li {
    width: 260px;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
}
.main-menu ul li .mega-menu li ul {
    padding-left: 0;
    text-align: left;
}
.main-menu ul li .mega-menu li ul li a {
    position: relative;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    color: var(--tp-text-body);
    text-transform: capitalize;
    text-align: start;
    margin: 0;
    padding-left: 0;
}
.main-menu ul li .mega-menu li ul li a:hover {
    color: var(--tp-heading-secondary);
    padding-left: 8px;
}



.header__info a i, .header__info button i {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background-color: var(--tp-grey-3);
    text-align: center;
    line-height: 40px;
    color: var(--tp-theme-1);
    display: block;
}
.icon-search:before {
    content: "\e9ed";
}

.icon-user:before {
    content: "\e91a";
}

.icon-heart:before {
    content: "\e99e";
}

.tpcolor__yellow a i,
.tpcolor__greenish a i,
.tpcolor__oasis button i {
    background-color: var(--tp-grey-4);
}

.tpcolor__greenish a i {
    background-color: var(--tp-grey-5);
}

.tpcolor__oasis button i {
    background-color: var(--tp-grey-6);
}

.header__info {
    justify-content: end;
}
.header__info-cart span {
    position: absolute;
    font-size: 11px;
    background-color: red;
    color: var(--tp-common-white);
    height: 18px;
    width: 18px;
    text-align: center;
    line-height: 18px;
    display: block;
    border-radius: 50px;
    top: 26px;
    right: -3px;
}
</style>