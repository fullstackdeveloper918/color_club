import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import varientData from "../constant/variant.json";

const ProductDetail = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const products = localStorage.getItem("selectedProducts");
    if (products) {
      setSelectedProducts(JSON.parse(products));
    }
  }, []);
  console.log(selectedProducts, "sdfasdfasdffasdf");
  const colors = varientData?.varient;
  console.log(colors, "kkkkkk");
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(selectedColor, "selectedColor");

  const handleColorClick = (color: any) => {
    setSelectedColor(color);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedColor(null);
  };
  //   const handleSelectColor = () => {
  //     const existingProductsString = localStorage.getItem('selectedProducts');
  //     const existingProducts = existingProductsString ? JSON.parse(existingProductsString) : [];
  //     existingProducts.push(selectedColor);
  //     localStorage.setItem('selectedProducts', JSON.stringify(existingProducts));
  //     setModalVisible(false);
  // };
  const handleSelectColor = () => {
    const existingProductsString = localStorage.getItem("selectedProducts");
    const existingProducts = existingProductsString
      ? JSON.parse(existingProductsString)
      : [];
    existingProducts.push(selectedColor);
    localStorage.setItem("selectedProducts", JSON.stringify(existingProducts));
    setSelectedProducts(existingProducts);
    setModalVisible(false);
  };
  const handleRemoveColor = (index: any) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };
  return (
    <div className="container mt-5 ">
      {/* Heading */}
      <div className="row text-center cololabs_sec">
        <div className="col">
          <h1 className="mb-3 ">
            Find Your <span>Colors</span> Today
          </h1>
          <div className="mt-4 tabs_click">
          <button
            className={`btn btn-link active`}
            // onClick={() => handleTabChange("emotions")}
          >
            Choose by Emotions
          </button>
          <span className="mx-2">|</span>
          <button
            className={`btn btn-link `}
            // onClick={() => handleTabChange("trends")}
          >
            Choose by Trends
          </button>
        </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="row">
        <div className="col-1">
          <Link to={"/"}>
            <button className="btn btn-link backBtn">
              <span className="bi bi-arrow-left"></span> BACK
            </button>
          </Link>
        </div>
      </div>

      {/* Nail Artist Profile */}
      <div className="row justify-content-center text-white mt-3">
        <div className="d-flex gap-3  mediumResponsive">
        <div className="flexBox">
        {selectedProducts.slice(0,2).map((res: any, index: number) => (
            <div className="colo-md-6">
              <div className="text-center">
                <div className="d-flex">
                  <h6 className="mt-2 text-black">COLOR {index + 1}</h6>
                  <button
                    className="btn "
                    style={{ border: "none", color: "red" }}
                    onClick={() => handleRemoveColor(index)}
                  >
                    -
                  </button>
                </div>
                <div className="text-center">
                <img
                  src={res?.image} // Replace with actual image
                  alt="Color 1"
                  className="rounded"
                />
                <h6 className="text-black">{res?.name}</h6>
                
              </div>
            
             <button className="btn btn-outline-secondary btn-sm mt-4 btnCart">
                ADD TO BAG
              </button>
              </div>
            </div>
          ))}
          </div>
        <div className=" bg-dark p-5 rounded position-relative p-sm-3 innerProductPopup w-100">
          <div className="row ">
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="https://via.placeholder.com/100" // Replace with the actual image
                alt="Bessie Nail Artist"
                className="rounded-circle"
              />
              <p className="mt-2 mb-1">Beetles Nail Artist</p>
              <h5 style={{color:"#dc41a1"}}>Bessie</h5>
            </div>
            <div className="col-md-9 col-sm-12">
              <p>
              Hey, I'm Bessie, your local nail artist! Choose Mysterious
                Delight for a fabulous look. Mix it with other colors to create
                a unique, visually pleasing nail design. Explore new styles and
                bring joy to your nails!
              </p>
            </div>
          </div>

          {/* Color Options */}
          {/* <div className="row text-center mt-4">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div
                className="color-circle"
                style={{ backgroundColor: '#8E8EB5' }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: '#F4A75E' }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: '#5FC6D0' }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: '#CA80C5' }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: '#83D07E' }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: '#72D2C7' }}
              ></div>
            </div>
            <button className="btn btn-link mt-3" style={{ color: '#f06' }}>
              I Just Want One Color <span>&gt;</span>
            </button>
          </div>
        </div> */}
          <div className="row text-center mt-4">
            
            <div className="col">
              <div className="d-flex justify-content-center">
                {colors.length > 0
                  ? colors.map((color: any, index: any) => (
                      <div
                        key={index}
                        className="color-circle"
                        style={{ backgroundColor: color.hex_code }}
                        onClick={() => handleColorClick(color)}
                      ></div>
                    ))
                  : ""}
              </div>
              {/* <button className="btn btn-link mt-3" style={{ color: "#f06" }}>
                I Just Want One Color <span>&gt;</span>
              </button> */}
            </div>
          </div>
          {/* model move  */}

        {modalVisible && (
        <div
          className=" fade show"
          style={{ display: "block" }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="popup_product">
            <div className="popup_productcontent">
              <div className="popup_productheader">
                {/* <h5 className="modal-title" id="exampleModalLabel">
                  Products for {selectedColor?.name}
                </h5> */}
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="popup_body">
                <div>
                  <img
                    src={selectedColor?.image || ""}
                    alt="product image not available"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                {/* <h5>{selectedColor?.name}</h5> */}
                <a
                  href={selectedColor?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedColor?.name}
                </a>
              </div>
              <div className="popup-footer">
                <Link to="/product-detail" onClick={handleSelectColor}>
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
      )}
        </div>


      </div>
      </div>

      {/* Color Picker Section */}
      {/* <div className="row justify-content-center mt-5">
        <div className="col-md-8 d-flex align-items-center justify-content-around">
          {selectedProducts.map((res: any, index: number) => (
            <div className="">
              <div className="text-center">
                <div className="d-flex">
                  <h6 className="mt-2">COLOR {index + 1}</h6>
                  <button
                    className="btn "
                    style={{ border: "none", color: "red" }}
                    onClick={() => handleRemoveColor(index)}
                  >
                    -
                  </button>
                </div>
                <img
                  src={res?.image} // Replace with actual image
                  alt="Color 1"
                  className="rounded"
                />
                +
              </div>
              <button className="btn btn-outline-secondary btn-sm mt-2">
                ADD COLOR TO BAG
              </button>
            </div>
          ))}
         
        </div>
      </div> */}
     
      {/* {modalVisible && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>} */}
    </div>
  );
};

export default ProductDetail;
