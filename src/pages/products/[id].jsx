import ProductDetails from "@/components/product-details";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import LayoutTwo from "@/layout/layout-2";
import { useRouter } from "next/router";
import products_data from "@/data/products-data";

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the specific product data
  const productData = products_data.find((item) => item.id === id) || {};
  const {
    productTitle = "Product Details",
    shortDescription = "Explore our product line for advanced solutions.",
    category = "Health & Technology",
    subCategory = "General",
  } = productData;

  return (
    <Wrapper>
      <SEO
        pageTitle={`${productTitle} - ${category} / ${subCategory} - Products | HomeHealth`}
        description={`Learn more about ${productTitle} in the ${category} and ${subCategory} categories. Explore HomeHealth Products for advanced solutions.`}
        ogTitle={`${productTitle} - ${category} / ${subCategory} - Products | HomeHealth`}
        ogDescription={`Detailed information about ${productTitle}, categorized under ${category} and ${subCategory}. Explore our HomeHealth Products for better health innovations.`}
        ogUrl={`/products/${id}`}
        keywords={`${productTitle}, ${category}, ${subCategory}, Products, HomeHealth, HomeHealth Products, Innovations`}
      />
      <LayoutTwo>
        <ProductDetails />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;