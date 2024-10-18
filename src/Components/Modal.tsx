import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Modal = ({closeModal, selectedProducts, selectedIndex }:any) => {
  const handleSelectColor = () => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let leftValue:any;

if (window.innerWidth >= 770 && window.innerWidth < 1000) {
  leftValue = `${selectedIndex * 85}px`;
} else if (window.innerWidth >= 1000 && window.innerWidth < 1200) {
  leftValue = `${selectedIndex * 120}px`;
} else if (window.innerWidth >= 1200 && window.innerWidth < 1400) {
  leftValue = `${selectedIndex * 135}px`;
} else if (window.innerWidth >= 1400 && window.innerWidth < 1600) {
  leftValue = `${selectedIndex * 157}px`;
} else if (window.innerWidth >= 1600 && window.innerWidth < 1800) {
  leftValue = `${selectedIndex * 185}px`;
} else {
  leftValue =  `${selectedIndex * 230}px`;
}

  const style = !isMobile ? {
    display: "block",
    position: 'absolute',
    left: leftValue,
    top: '0%',
    // transform: 'translateY(-50%)'
  } : {} as any;
  return (
    <div
      className="fade show "
      style={style}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="popup_product">
        <div className="popup_productcontent">
          <div className="popup_productheader"  onClick={closeModal}>
            <button
              type="button"
              className="btn-close"
             
              aria-label="Close"
            ></button>
          </div>
          <div className="popup_body">
            {selectedProducts?.length > 0 ? (
              selectedProducts.map((product:any) => (
                <div className="text-center" key={product.id}>
                  <div>
                    <img
                      src={product.image || ""}
                      alt="product image not available"
                    />
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>
                </div>
              ))
            ) : (
              <p>No products available for this color.</p>
            )}
          </div>
          <div className="popup-footer">
            <Link to={"/product-detail"} onClick={handleSelectColor}>
              <button
                type="button"
                className="btn text-black btn-outline-secondary rounded-5"
              >
                SELECT THIS COLOR
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
