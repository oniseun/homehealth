import React from "react";
import { useRouter } from "next/router";
import products_data from "@/data/products-data";

const AnswerQuestion = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL

  // Find the current product based on the ID
  const product = products_data.find((item) => item.id === id);

  // If no product is found or there are no FAQs, show a fallback message
  if (!product || !product.faq) {
    return <p>No FAQs available for this product.</p>;
  }

  return (
    <>
      <div className="faq-accordion">
        <div className="accordion" id="accordionExample">
          {product.faq.map((item, index) => (
            <div key={index} className="accordion-items">
              <h2 className="accordion-header" id={`faq-${index}`}>
                <button
                  className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse-${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`faq-${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;