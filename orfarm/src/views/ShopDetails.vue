<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import ProductSlider from '@/components/ProductSlider.vue'

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { route:'shop', name: 'Bữa sáng & Sữa' },{name:'Măng Cụt Tươi 100% Hữu Cơ Từ Việt Nam'}]

</script>
<template>
<BreadCrumb :breadCrumbPath="breadCrumbPath" :isGrey='true'/>
<section class="shopdetails-area grey-bg pb-50">
            <div class="container">
               <div class="row">
                  <div class="col-lg-10 col-md-12">
                     <div class="tpdetails__area mr-60 pb-30">
                        <div class="tpdetails__product mb-30">
                           <div class="tpdetails__title-box">
                              <h3 class="tpdetails__title">Bánh Burger Thịt Bò Hữu Cơ Ireland Nguyên Chất 4 Miếng - 1Kg</h3>
                              <ul class="tpdetails__brand">
                                 <li> Nhãn hàng: <a href="#">ORFARM</a> </li>
                                 <li>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <i class="icon-star_outline1"></i>
                                    <b>02 Đánh giá</b>
                                 </li>
                                 <li>
                                    SKU: <span>ORFARMVE005</span>
                                 </li>
                              </ul>
                           </div>
                           <div class="tpdetails__box">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <div class="tpproduct-details__nab">
                                       <div class="tab-content" id="nav-tabContents">
                                          <div class="tab-pane fade show active w-img" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                             <img src="../assets/img/product/product-details-1.png" alt="">
                                             <div class="tpproduct__info bage">
                                                <span class="tpproduct__info-hot bage__hot">HOT</span>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade w-img" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                             <img src="../assets/img/product/product-details-2.png" alt="">
                                             <div class="tpproduct__info bage">
                                                <span class="tpproduct__info-discount bage__discount">-90%</span>
                                                <span class="tpproduct__info-hot bage__hot">HOT</span>
                                             </div>
                                          </div>
                                          <div class="tab-pane fade w-img" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                                             <img src="../assets/img/product/product-details-3.png" alt="">
                                             <div class="tpproduct__info bage">
                                                <span class="tpproduct__info-hot bage__hot">HOT</span>
                                             </div>
                                          </div>
                                       </div> 
                                       <nav>
                                          <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                             <img src="../assets/img/product/product-detaisl-item1.png" alt="">
                                            </button>
                                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabindex="-1">
                                             <img src="../assets/img/product/product-detaisl-item2.png" alt="">
                                            </button>
                                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" tabindex="-1">
                                             <img src="../assets/img/product/product-detaisl-item3.png" alt="">
                                            </button>
                                          </div>
                                        </nav>                 
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
              <div class="product__details">
                <div class="product__details-price-box">
                  <h5 class="product__details-price">$56.00</h5>
                  <ul class="product__details-info-list">
                    <li>Nước sốt phô mai không sữa ngon</li>
                    <li>Thân thiện với người ăn chay & dị ứng</li>
                    <li>Nước sốt phô mai không sữa mịn màng, mượt mà</li>
                  </ul>
                </div>
                <div class="product__details-cart">
                  <div class="product__details-quantity d-flex align-items-center mb-15">
                    <b>Số lượng:</b>
                    <div class="product__details-count mr-10">
                      <span class="cart-minus"><i class="far fa-minus"></i></span>
                      <input class="tp-cart-input" type="text" value="1">
                      <span class="cart-plus"><i class="far fa-plus"></i></span>
                    </div>
                    <div class="product__details-btn">
                      <a href="cart.html">Thêm vào giỏ</a>
                    </div>
                  </div>
                  <ul class="product__details-check">
                    <li>
                      <a href="#"><i class="icon-heart icons"></i> Thêm vào danh sách yêu thích</a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-layers"></i> Thêm vào So Sánh</a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-share-2"></i> Chia sẻ</a>
                    </li>
                  </ul>
                </div>
                <div class="product__details-stock mb-25">
                  <ul>
                    <li>Tình trạng: <i>54 Còn hàng</i></li>
                    <li>Danh mục: <span>Rau củ, Thịt & Trứng, Đồ uống trái cây</span></li>
                    <li>Tags: <span>Gà, Tự nhiên, Hữu cơ</span></li>
                  </ul>
                </div>
                <div class="product__details-payment text-center">
                  <img src="../assets/img/shape/payment-2.png" alt="">
                  <span>Đảm bảo thanh toán an toàn & Bảo mật</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                        <div class="tpdescription__box">
                           <div class="tpdescription__box-center d-flex align-items-center justify-content-center">
                              <nav>
                                 <div class="nav nav-tabs" role="tablist">
                                   <button class="nav-link active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Mô tả Sản Phẩm</button>
                                   <button class="nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-information" type="button" role="tab" aria-controls="nav-information" aria-selected="false" tabindex="-1">Thông tin thêm</button>
                                   <button class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false" tabindex="-1">Đánh giá (1)</button>
                                 </div>
                               </nav>
                           </div>
                           <div class="tab-content" id="nav-tabContent">
                              <div class="tab-pane fade active show" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab" tabindex="0">
                                 <div class="tpdescription__content">
                                    <p>Thiết kế bởi Puik vào năm 1949 như một trong những mô hình đầu tiên được tạo ra đặc biệt cho Carl Hansen & Son, và được sản xuất từ năm 1950. Cuối cùng trong một loạt các ghế Wegner thiết kế dựa trên cảm hứng từ ghế tay cổ Trung Quốc. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, quae ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                 </div>
                                 <div class="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                                    <div class="tpdescription__product-info">
                                       <h5 class="tpdescription__product-title">Chi tiết Sản Phẩm</h5>
                                       <ul class="tpdescription__product-info">
                                          <li>Chất liệu: Nhựa, Gỗ</li>
                  <li>Chân: Gỗ sồi sơn mài và sơn đen</li>
                  <li>Kích thước và Trọng lượng: Chiều cao: 80 cm, Trọng lượng: 5.3 kg</li>
                  <li>Chiều dài: 48cm</li>
                  <li>Chiều sâu: 52 cm</li>
                                       </ul>
                                       <p>Lemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut <br> fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem <br> sequi nesciunt.</p>
                                    </div>
                                    <div class="tpdescription__product-thumb">
                                       <img src="../assets/img/product/product-single-1.png" alt="">
                                    </div>
                                 </div>
                                 <div class="tpdescription__video">
                                    <h5 class="tpdescription__product-title">Chi tiết Sản Phẩm</h5>
                                    <p>Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi. </p>
                                    <div class="tpdescription__video-wrapper p-relative mt-30 mb-35 w-img">
                                       <img src="../assets/img/product/product-video1.jpg" alt="">
                                       <div class="tpvideo__video-btn">
                                          <a class="tpvideo__video-icon popup-video" href="https://www.youtube.com/watch?v=rLrV5Tel7zw">
                                             <i>
                                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.6499 6.58886L15.651 6.58953C17.8499 7.85553 18.7829 9.42511 18.7829 10.8432C18.7829 12.2613 17.8499 13.8308 15.651 15.0968L15.6499 15.0975L12.0218 17.195L8.3948 19.2919C8.3946 19.292 8.3944 19.2921 8.3942 19.2922C6.19546 20.558 4.36817 20.5794 3.13833 19.8697C1.9087 19.1602 1.01562 17.5694 1.01562 15.0382V10.8432V6.64818C1.01562 4.10132 1.90954 2.51221 3.13721 1.80666C4.36609 1.1004 6.1936 1.12735 8.3942 2.39416C8.3944 2.39428 8.3946 2.3944 8.3948 2.39451L12.0218 4.49135L15.6499 6.58886Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                             </i>
                                          </a>
                                       </div>
                                    </div>
                                    <h5 class="tpdescription__product-title">SẢN PHẨM CHẤT LƯỢNG TUYỆT VỜI</h5>
                                    <p>Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi. </p>
                                    <p>Duis semper erat mauris, sed egestas purus commodo. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="nav-information" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
                                 <div class="tpdescription__content">
                                    <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen &amp; Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                 </div>
                                 <div class="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                                    <div class="tpdescription__product-info">
                                       <h5 class="tpdescription__product-title">Chi tiết Sản Phẩm</h5>
                                       <ul class="tpdescription__product-info">
                                          <li>Chất liệu: Nhựa, Gỗ</li>
                  <li>Chân: Gỗ sồi sơn mài và sơn đen</li>
                  <li>Kích thước và Trọng lượng: Chiều cao: 80 cm, Trọng lượng: 5.3 kg</li>
                  <li>Chiều dài: 48cm</li>
                  <li>Chiều sâu: 52 cm</li>
                                       </ul>
                                       <p>Lemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut <br> fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem <br> sequi nesciunt.</p>
                                    </div>
                                    <div class="tpdescription__product-thumb">
                                       <img src="../assets/img/product/product-single-1.png" alt="">
                                    </div>
                                 </div>
                                 <div class="tpdescription__video">
                                    <h5 class="tpdescription__product-title">Chi tiết Sản Phẩm</h5>
                                    <p>Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi. </p>
                                 </div>
                              </div>




                              <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
    <div class="tpreview__wrapper">
        <h4 class="tpreview__wrapper-title">1 đánh giá cho Gà tươi ngon rẻ</h4>
        <div class="tpreview__comment">
            <div class="tpreview__comment-img mr-20">
                <img src="../assets/img/testimonial/test-avata-1.png" alt="">
            </div>
            <div class="tpreview__comment-text">
                <div class="tpreview__comment-autor-info d-flex align-items-center justify-content-between">
                    <div class="tpreview__comment-author">
                        <span>admin</span>
                    </div>
                    <div class="tpreview__comment-star">
                        <i class="icon-star_outline1"></i>
                        <i class="icon-star_outline1"></i>
                        <i class="icon-star_outline1"></i>
                        <i class="icon-star_outline1"></i>
                        <i class="icon-star_outline1"></i>
                    </div>
                </div>
                <span class="date mb-20">--Ngày 9 tháng 4 năm 2022: </span>
                <p>rất tốt</p>
            </div>
        </div>
        <div class="tpreview__form">
            <h4 class="tpreview__form-title mb-25">Thêm đánh giá </h4>
            <form action="#">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="tpreview__input mb-30">
                            <input type="text" placeholder="Tên">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="tpreview__input mb-30">
                            <input type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="tpreview__star mb-20">
                            <h4 class="title">Đánh giá của bạn</h4>
                            <div class="tpreview__star-icon">
                                <a href="#"><i class="icon-star_outline1"></i></a>
                                <a href="#"><i class="icon-star_outline1"></i></a>
                                <a href="#"><i class="icon-star_outline1"></i></a>
                                <a href="#"><i class="icon-star_outline1"></i></a>
                                <a href="#"><i class="icon-star_outline1"></i></a>
                            </div>
                        </div>
                        <div class="tpreview__input mb-30">
                            <textarea name="text" placeholder="Tin nhắn"></textarea>
                            <div class="tpreview__submit mt-30">
                                <button class="tp-btn">Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
                                    </div>
                                 </div>
                              </div>
                           </div>   
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-2 col-md-12">
                     <div class="tpsidebar pb-30">
                        <div class="tpsidebar__warning mb-30">
    <ul>
        <li>
            <div class="tpsidebar__warning-item">
                <div class="tpsidebar__warning-icon">
                    <i class="icon-package"></i>
                </div>
                <div class="tpsidebar__warning-text">
                    <p>Miễn phí vận chuyển áp dụng <br> cho tất cả các đơn hàng trên $90</p>
                </div>
            </div>
        </li>
        <li>
            <div class="tpsidebar__warning-item">
                <div class="tpsidebar__warning-icon">
                    <i class="icon-shield"></i>
                </div>
                <div class="tpsidebar__warning-text">
                    <p>Đảm bảo 100% hữu cơ <br> từ các trang trại tự nhiên</p>
                </div>
            </div>
        </li>
        <li>
            <div class="tpsidebar__warning-item">
                <div class="tpsidebar__warning-icon">
                    <i class="icon-package"></i>
                </div>
                <div class="tpsidebar__warning-text">
                    <p>Hoàn trả trong vòng 60 ngày <br> nếu bạn thay đổi ý định</p>
                </div>
            </div>
        </li>
    </ul>
</div>

                        <div class="tpsidebar__banner mb-30">
                           <img src="../assets/img/shape/sidebar-product-1.png" alt="">
                        </div>
                        <div class="tpsidebar__product">
    <h4 class="tpsidebar__title mb-15">Sản phẩm gần đây</h4>
    <div class="tpsidebar__product-item">
        <div class="tpsidebar__product-thumb p-relative">
            <img src="../assets/img/product/sidebar-pro-1.jpg" alt="">
            <div class="tpsidebar__info bage">
                <span class="tpproduct__info-hot bage__hot">HOT</span>
            </div>
        </div>
        <div class="tpsidebar__product-content">
            <span class="tpproduct__product-category">
                <a href="shop-details-3.html">Trái cây tươi</a>
            </span>
            <h4 class="tpsidebar__product-title">
                <a href="shop-details-3.html">Măng cụt tươi 100% hữu cơ từ Việt Nam</a>
            </h4>
            <div class="tpproduct__rating" style="margin:5px;">
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
            </div>
            <div class="tpproduct__price">
                <span>$56.00</span>
                <del>$19.00</del>
            </div>
        </div>
    </div>
    <div class="tpsidebar__product-item">
        <div class="tpsidebar__product-thumb p-relative">
            <img src="../assets/img/product/sidebar-pro-2.jpg" alt="">
            <div class="tpsidebar__info bage">
                <span class="tpproduct__info-hot bage__hot">HOT</span>
            </div>
        </div>
        <div class="tpsidebar__product-content">
            <span class="tpproduct__product-category">
                <a href="shop-details-3.html">Trái cây tươi</a>
            </span>
            <h4 class="tpsidebar__product-title">
                <a href="shop-details-3.html">Măng cụt tươi 100% hữu cơ từ Việt Nam</a>
            </h4>
            <div class="tpproduct__rating" style="margin:5px;">
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
            </div>
            <div class="tpproduct__price">
                <span>$56.00</span>
                <del>$19.00</del>
            </div>
        </div>
    </div>
    <div class="tpsidebar__product-item">
        <div class="tpsidebar__product-thumb p-relative">
            <img src="../assets/img/product/sidebar-pro-3.jpg" alt="">
            <div class="tpsidebar__info bage">
                <span class="tpproduct__info-hot bage__hot">HOT</span>
            </div>
        </div>
        <div class="tpsidebar__product-content">
            <span class="tpproduct__product-category">
                <a href="shop-details-3.html">Trái cây tươi</a>
            </span>
            <h4 class="tpsidebar__product-title">
                <a href="shop-details-grid.html">Măng cụt tươi 100% hữu cơ từ Việt Nam</a>
            </h4>
            <div class="tpproduct__rating" style="margin:5px;">
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
                <a href="#"><i class="icon-star_outline1"></i></a>
            </div>
            <div class="tpproduct__price">
                <span>$56.00</span>
                <del>$19.00</del>
            </div>
        </div>
    </div>
</div>

                     </div>
                  </div>
               </div>
            </div>
         </section>

        <ProductSlider title='Related Products' option='' fullscreen='true' :hasProcess="false" :slideOnShow='6'/>
</template>
<style scoped>
.tpdetails__product {
    background-color: var(--tp-common-white);
    padding: 35px 40px 45px 40px;
    border-radius: 10px;
}
.tpdetails__title-box {
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #E6ECF0;
}

.tpdetails__title {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: var(--tp-heading-primary);
}
.tpdetails__brand li {
    list-style: none;
    display: inline-block;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #455770;
    padding-right: 20px;
    position: relative;
    margin-right: 15px;
}

.tpdetails__brand li::before {
    position: absolute;
    content: "";
    right: 0;
    height: 12px;
    width: 1px;
    background-color: #E6ECF0;
    top: 50%;
    transform: translateY(-50%);
}
.tpdetails__brand li a {
    display: inline-block;
    font-weight: 500;
    color: var(--tp-heading-secondary);
}
.tpdetails__brand li i {
    margin-right: -5px;
    font-size: 14px;
    color: var(--tp-text-1);
}
.icon-star_outline1:before {
    content: "\e91f";
}
.tpdetails__brand li b {
    font-weight: 500;
    text-transform: uppercase;
    color: var(--tp-text-3);
    margin-left: 5px;
}
.tpdetails__brand li span {
    font-weight: 500;
    color: var(--tp-heading-secondary);
    display: inline-block;
}
.tpproduct-details__nab .tab-pane {
    position: relative;
}
.tpproduct__info {
    position: absolute;
    top: 17px;
    left: 17px;
}
.bage__hot {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-text-4);
    border-radius: 2px;
    color: var(--tp-theme-2);
    padding: 3px 9px;
}
.bage__discount {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-theme-3);
    border-radius: 2px;
    color: var(--tp-common-white);
    padding: 3px 9px;
}
.tpproduct-details__nab .nav-tabs {
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
}
.tpproduct-details__nab .nav-tabs .nav-link.active {
    border-color: var(--tp-heading-secondary);
}
.tpproduct-details__nab .nav-tabs .nav-link img {
    height: 60px;
    width: 60px;
    object-fit: cover;
}
.tpproduct-details__nab .nav-tabs .nav-link {
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0 5px;
    border: 1px solid #E6ECF0;
    border-radius: 5px;
}
.product__details-price-box {
    padding-bottom: 25px;
    border-bottom: 1px solid #E6ECF0;
    margin-bottom: 30px;
}
.product__details-price {
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: #EA0D42;
}
.product__details-info-list li {
    font-family: var(--tp-ff-jost);
    list-style: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--tp-text-body);
    position: relative;
    padding-left: 18px;
}
.product__details-info-list{
    padding:0;
}
.product__details-info-list li::after {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--tp-text-body);
    border-radius: 50%;
}
.product__details-cart {
    padding-bottom: 20px;
    border-bottom: 1px solid #E6ECF0;
    margin-bottom: 30px;
}

.product__details-quantity b {
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: #2D2A6E;
    flex: 0 0 auto;
    margin-right: 8px;
}
.product__details-count {
    flex: 0 0 auto;
    background-color: #F3F3F9;
    border-radius: 30px;
    display: inline-block;
    border: 1px solid #EBEFF4;
    padding: 10px 29px;
    color: var(--tp-text-body);
    cursor: pointer;
}
.fa-minus:before {
    content: "\f068";
    font: normal normal normal 14px/1 FontAwesome;
    margin-right:5px;
}
.fa-plus:before {
    content: "\f067";
    font: normal normal normal 14px/1 FontAwesome;
    margin-left:5px;
}

.product__details-count input {
    background-color: #F3F3F9;
    border: none;
    width: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--tp-text-body);
}
.product__details-btn {
    flex: 0 0 auto;
}
.product__details-btn a {
    font-family: var(--tp-ff-jost);
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
    color: var(--tp-common-white);
    background-color: var(--tp-heading-secondary);
    padding: 13px 97px;
    border-radius: 30px;
    display: inline-block;
}
.product__details-check {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.product__details-check li {
    list-style: none;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
    margin-right: 25px;
    margin-bottom: 5px;
}
.tpproduct__product-category a{
   color:inherit;
}
.icon-share-2:before {
    content: "\f064";
    font: normal normal normal 12px / 1 FontAwesome;
}
.product__details-check{
    padding:0;
}
.product__details-check a{
    color:inherit;
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 12px;
}
.product__details-stock li {
    list-style: none;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: var(--tp-text-body);
    margin-bottom: 5px;
}

.product__details-stock li i {
    color: #00B853;
    font-style: normal;
}
.product__details-stock ul{
    padding:0;
}
.product__details-payment {
    background-color: var(--tp-grey-8);
    padding: 20px;
    border-radius: 5px;
}
.product__details-payment img {
    max-width: 100%;
}
.product__details-payment span {
    display: block;
    margin-top: 5px;
}
.product__details-payment {
    background-color: var(--tp-grey-8);
    padding: 20px;
    border-radius: 5px;
}
.tpdescription__box {
    background-color: var(--tp-common-white);
    padding: 20px 40px 16px 40px;
    border-radius: 10px;
}
.tpdescription__box-center {
    border-bottom: 1px solid #E6ECF0;
    margin-bottom: 30px;
}
.tpdescription__box-center .nav-tabs {
    border: none;
    outline: 0;
}
.tpdescription__box-center .nav-tabs .nav-link.active {
    color: var(--tp-heading-secondary);
    border-bottom: 2px solid var(--tp-heading-secondary);
}

.tpdescription__box-center .nav-tabs .nav-link {
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #79819C;
    padding: 0 0 14px 0;
    margin: 0 22px;
}
.tpdescription__content p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--tp-text-body);
}
.tpdescription__product-title {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
}
.tpdescription__product-info li {
    list-style: none;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--tp-text-body);
}
.tpdescription__product-info{
    padding:0;
}
.tpdescription__product-info p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--tp-text-body);
}
.tpdescription__product-thumb img {
    border-radius: 5px;
    max-width: 100%;
}
.tpdescription__video-wrapper img {
    border-radius: 5px;
}

.tpreview__wrapper-title {
    font-size: 24px;
    color: var(--tp-heading-primary);
    margin-bottom: 20px;
    font-weight: 600;
}
.tpreview__comment {
    display: flex;
    margin-bottom: 20px;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--tp-border-1);
}
.tpreview__comment-img {
    flex: 0 0 auto;
}

.tpreview__comment-text {
    flex: 0 0 auto;
    border: 1px solid var(--tp-border-1);
    border-radius: 10px;
    padding: 10px;
}
.tpreview__comment-author {
    font-weight: 600;
    color: var(--tp-heading-primary);
    font-size: 13px;
    text-transform: uppercase;
    flex: 0 0 auto;
    margin-right: 10px;
}
.tpreview__comment-star {
    flex: 0 0 auto;
}
.tpreview__comment-star i {
    font-size: 14px;
    color: var(--tp-text-1);
}
.icon-star_outline1:before {
    margin-right:5px;
    content: "\f005";
    font: normal normal normal 14px/1 FontAwesome;
}
.tpreview__comment-text .date {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
}
.tpreview__form-title {
    color: var(--tp-heading-primary);
    font-weight: 600;
    font-size: 20px;
}
.tpreview__input input {
    height: 60px;
    width: 100%;
    border: 1px solid var(--tp-border-1);
    border-radius: 30px;
    padding: 5px 30px;
}
.tpreview__star .title {
    font-size: 16px;
    font-weight: 600;
    color: var(--tp-heading-primary);
}
.tpreview__star-icon i {
    color: var(--tp-heading-primary);
}
.tpreview__input textarea {
    width: 100%;
    padding: 10px;
    height: 220px;
    border: 1px solid var(--tp-border-1);
    border-radius: 10px;
    outline: 0;
}
.tpsidebar__warning {
    border: 1px solid #E8C3C3;
    border-radius: 10px;
    padding: 25px 30px;
}
.tpsidebar__warning ul li {
    list-style: none;
    padding-bottom: 30px;
    margin-bottom: 26px;
    border-bottom: 1px dashed #E8C3C3;
}
.tpsidebar__warning-item {
    text-align: center;
}
.tpsidebar__warning-icon i {
    color: #B45353;
    font-size: 20px;
}
.icon-package:before {
    content: "\f466";
    font: normal normal normal 16px/1 FontAwesome;

}
.icon-shield:before {
    content: "\f3ed";
    font: normal normal normal 16px/1 FontAwesome;
}

.tpsidebar {
    margin-left: -60px;
}

.tpsidebar__warning ul{
    padding:0;
}
.tpsidebar__warning-text p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #B45353;
    margin-bottom: 0px;
}
.tpsidebar__banner img {
    max-width: 100%;
}

.tpsidebar__product {
    background: var(--tp-common-white);
    border-radius: 10px;
    padding: 35px 30px 25px 30px;
}
.tpsidebar__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.03em;
    color: var(--tp-heading-primary);
}
.tpsidebar__product-item {
    border-bottom: 1px dashed #E6ECF0;
    margin-bottom: 15px;
    padding-bottom: 12px;
}
.tpsidebar__product-thumb img {
    max-width: 100%;
}
.tpsidebar__info {
    position: absolute;
    top: 0;
    left: 0;
}
.bage__hot {
    font-weight: 500;
    font-size: 12px;
    background-color: var(--tp-text-4);
    border-radius: 2px;
    color: var(--tp-theme-2);
    padding: 3px 9px;
}
.tpsidebar__product-title a{
    word-break: break-word;
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--tp-heading-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.tpproduct__rating a i {
    margin-right: -5px;
    font-size: 14px;
    color: var(--tp-text-1);
}
.tpproduct__price span {
    color: var(--tp-theme-2);
    font-weight: 500;
    font-size: 18px;
}
.tpproduct__price del {
    font-weight: 400;
    font-size: 14px;
}
/* Responsive */
@media (max-width: 767.98px) {
    .tpdetails__area{
        margin-right:0;
    }
    .tpdetails__title{
        font-size:24px;
    }
    .tpdetails__brand{
        padding:0;
    }
    .product__details{
        padding-top:20px;
    }
    .product__details-quantity{
        display:block !important;
        justify-content:center;
        align-items:center;
    }
    .product__details-btn a{
        padding:13px 40px;
        margin-left:20%;
        margin-top:30px;
    }
    .tpdetails__product{
        padding: 20px 20px 16px 20px;
    }
    .tpdetails__brand li{
        padding-right:0;
        margin:0;
    }
    .tpdescription__box-center .nav-tabs .nav-link {
        margin: 0 8px 10px 8px;
        font-size: 13px;
    }
    .tpdescription__box {
        padding: 20px 20px 16px 20px;
    }
    .tpdescription__product-wrapper {
        flex-wrap: wrap;
    }
    .tpsidebar {
        margin-left: 0;
    }
    .tpsidebar__banner img{
        width:100%;
    }
}
</style>
