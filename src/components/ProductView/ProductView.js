import React, { useEffect, useState } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  const [sideOpen, toggleSideOpen] = useState(true);
  const [selectedProduct, changeSelectedProduct] = useState();

  useEffect(() => {
    if (!sideOpen && selectedProduct) {
      toggleSideOpen(true);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!sideOpen) {
      changeSelectedProduct();
    }
  }, [sideOpen]);
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectedProduct && selectedProduct.id === item.id}
              onClick={() => changeSelectedProduct(item)}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => toggleSideOpen(!sideOpen)}
            style={{ cursor: "pointer" }}
          >
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
