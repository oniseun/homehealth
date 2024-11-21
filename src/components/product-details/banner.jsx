import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import products_data from "@/data/products-data";

const Banner = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL

  // Find the current product based on the ID
  const product = products_data.find((item) => item.id === id);

  // Fallback title if product not found
  const title = product ? product.productTitle : "Product Details";

  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay mb-20"
        style={{
          backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">{title}</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb__link text-xl-end">
                <span>
                  HomeHealth: <Link href="/products"> Products</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;