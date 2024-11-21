import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import products_data from "@/data/products-data";
import AnswerQuestion from "./answer-question";

const setting = {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const ProductDetailsArea = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [productCount, setProductCount] = useState(1);

  // Find the current product based on the ID
  const product = products_data.find((item) => item.id === id);

  if (!product) return <p>Product not found</p>; // Show message if no product matches the ID

  // Filter related products based on category or subCategory
  const relatedProducts = products_data.filter(
    (item) =>
      item.id !== product.id &&
      (item.category === product.category || item.subCategory === product.subCategory)
  );

  const addBtn = () => {
    setProductCount((prev) => prev + 1);
  };
  const minusBtn = () => {
    if (productCount > 1) {
      setProductCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <section className="shop-area pt-120 pb-70">
        <div className="container">
          <div className="shop-left-right ml-130 mr-130">
            <div className="row">
              {/* Product Image */}
              <div className="col-lg-4 col-md-6">
                <div className="productthumb mb-40 wow fadeInRighLeft" data-wow-delay=".4s">
                  <img src={product.productImage} alt={product.productTitle} />
                </div>
              </div>

              {/* Product Details */}
              <div className="col-lg-8 col-md-6">
                <div className="product mb-40 ml-20 wow fadeInRighRight" data-wow-delay=".4s">
                  <div className="product__details-content mb-40">
                    <h2 className="product-dtitle mb-20">{product.productTitle}</h2>
                    <p>{product.shortDescription}</p>

                    <div className="product-dinfo mt-25"><p className="tpshopitem__review text-danger fw-bold">{product.category.toUpperCase()}

                    </p>
                      <span className="review-count">({" " + product.subCategory})</span>
                    </div>
                    <div className="pro-quan-area d-sm-flex align-items-center mb-15">
                      <div className="product-quantity-title mr-25">
                        <label>Quantity</label>
                      </div>
                      <div className="tp-product-quantity mt-10 mb-10">
                        <span className="cart-minus" onClick={minusBtn}>
                          <i className="fa-solid fa-arrow-left"></i>
                        </span>
                        <input className="tp-cart-input" type="text" value={productCount} readOnly />
                        <span className="cart-plus" onClick={addBtn}>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                    <div className="product-button">
                      <Link href="/contact" legacyBehavior>
                        <a className="btn btn-warning btn-lg">Get a Quote</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs for Product Details, Additional Info, and FAQ */}
            <div className="productdetails pt-35 pb-75">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-additional-tab">
                    <div className="pro-details-nav mb-40">
                      <ul className="nav nav-tabs pro-details-nav-btn" id="myTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-links active"
                            id="product-details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#product-details"
                            type="button"
                            role="tab"
                            aria-controls="product-details"
                            aria-selected="true"
                          >
                            Product Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-links"
                            id="additional-info-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#additional-info"
                            type="button"
                            role="tab"
                            aria-controls="additional-info"
                            aria-selected="false"
                          >
                            Additional Info
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-links"
                            id="faq-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#faq"
                            type="button"
                            role="tab"
                            aria-controls="faq"
                            aria-selected="false"
                          >
                            FAQ
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content tp-content-tab" id="myTabContent-2">
                      <div
                        className="tab-pane fade show active"
                        id="product-details"
                        role="tabpanel"
                        aria-labelledby="product-details-tab"
                      >
                        <div>
                          {product.productDetails.map((detail, index) => (
                            <div key={index} className="product-detail-section">
                              <h3 className="mb-15">{detail.sectionTitle}</h3>
                              <p className="fs-5  lh-lg">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="additional-info"
                        role="tabpanel"
                        aria-labelledby="additional-info-tab"
                      >
                        <div className="product__details-info table-responsive">
                          <table className="table table-striped">
                            <tbody>
                              {product.additionalData?.map((info, index) => (
                                <tr key={index}>
                                  <td className="add-info">{info.key}</td>
                                  <td className="add-info-list">{info.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                        <div className="shop-faq">
                          <AnswerQuestion />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="tpproductitem">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="product-dtitle mb-50">Related Products</h5>
                </div>
              </div>
              <Swiper {...setting} modules={[Navigation]} className="swiper-container shop-slider-active">
                {relatedProducts.map((related) => (
                  <SwiperSlide key={related.id}>
                    <div className="swiper-slide">
                      <div className="tpshopitem mb-50">
                        <div className="tpshopitem__thumb p-relative fix mb-35">
                          <Link href={`/products/${related.id}`}>
                            <img src={related.productImage} alt={related.productTitle} />
                          </Link>
                        </div>
                        <div className="tpshopitem__content text-center">
                          <span className="tpshopitem__title mb-5">
                            <Link href={`/products/${related.id}`}>{related.productTitle}</Link>
                          </span>
                          <p>{related.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsArea;