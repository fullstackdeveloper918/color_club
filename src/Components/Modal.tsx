import React from 'react'
import { Link } from 'react-router-dom'

const Modal = ({emojiName,closeModal,selectedProducts}:any) => {


    const handleSelectColor = () => {
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
      };
  return (
    <div
    className=" fade show"
    style={{ display: "block" }}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="popup_product">
      <div className="popup_productcontent">
        <div className="popup_productheader">
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
            aria-label="Close"
          ></button>
        </div>
        <div className="popup_body">
          {selectedProducts?.length > 0 ? (
            selectedProducts.map((product: any) => (
              <div className="text-center">
                <div className="" key={product.id}>
                  <img
                    src={product.image || ""}
                    alt="product image not available"
                    className=""
                  />
                </div>
                {/* <h5 className="">{product?.name}</h5> */}
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
        <div className="popup-footer ">
          {/* <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button> */}
          <Link to={"/product-detail"} onClick={handleSelectColor}>
            <button
              type="button"
              className="btn text-black  btn-outline-secondary rounded-5"
            >
              SELECT THIS COLOR
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal