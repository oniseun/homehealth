import Link from "next/link";
import React from "react";
import products_data from "@/data/products-data";

const ShopArea = () => {
  return (
    <>
      <div className="shop-area pt-120 pb-130">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="tpproduct">
                <span>Showing {products_data.length} results</span>
              </div>
            </div>
          </div>
          <div className="row">
            {products_data.map((product) => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-md-4">
                <div
                  className="tpshopitem mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="tpshopitem__thumb p-relative fix mb-35">
                    <Link href={`/products/${product.id}`}>
                      <img src={product.productImage} alt={product.productTitle} />
                    </Link>
                    {product.product_news && (
                      <span className="tpshopitem__product-base">
                        {product.product_news}
                      </span>
                    )}
                    <div className="tpshopitem__thumb-icon">
                      <Link href={`/products/${product.id}`}>
                        <i className="fal fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tpshopitem__content text-left">
                    <span className="tpshopitem__title mb-10 fw-bold">
                      <Link href={`/products/${product.id}`}>
                        {product.productTitle}
                      </Link>
                    </span>
                    <p className="mb-10">{product.shortDescription}</p>
                    <div className="tpshopitem__review text-danger fw-bold">{product.category.toUpperCase()}
           
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopArea;