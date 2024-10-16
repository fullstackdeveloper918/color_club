import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import varientData from "../constant/variant.json";
const ProductCombine = () => {
  const [selectedProducts, setSelectedProducts] = useState<any>([]);

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
    const updatedProducts = selectedProducts.filter(
      (_: any, i: number) => i !== index
    );
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };
  console.log(selectedProducts, "selectedProducts");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mt-5 ">
      {/* Heading */}
      <div className="row text-center cololabs_sec">
        <div className="col">
          <h1 className="mb-3 ">
            Find Your <span>Colors</span> Today
          </h1>
          <div className="mt-4 tabs_click" aria-disabled>
            <button
              className={`btn btn-link active`}
              // onClick={() => handleTabChange("emotions")}
            >
              Choose by Emotions
            </button>
            <span className="mx-2">|</span>
            <Link to={`/`}>
              <button
                className={`btn btn-link `}
                // onClick={() => handleTabChange("trends")}
              >
                Choose by Trends
              </button>
            </Link>
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
          {!isMobile ? (
            <div className="flexBox">
              {selectedProducts.slice(0, 2).map((res: any, index: number) => (
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
                      <input
                        type="hidden"
                        className="varient_id"
                        value={res?.varient_id}
                      />
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className=" bg-dark p-5 rounded position-relative p-sm-3 innerProductPopup w-100">
            <div className="row ">
              <div className=" ">
                <div className="colorsWrapper mb-3">
                  <div
                    className="color1"
                    style={{
                      backgroundColor: `${selectedProducts[0]?.hex_code}`,
                    }}
                  ></div>
                  <div
                    className="color2"
                    style={{
                      backgroundColor: `${selectedProducts[1]?.hex_code}`,
                    }}
                  ></div>
                </div>
                <h6 className="mt-2 mb-1">Color theme for today</h6>
                <h2>Joyfull</h2>
              </div>
              <div className=" col-sm-12">
                <p>
                  Hey, I'm Bessie, your local nail artist! Choose Mysterious
                  Delight for a fabulous look. Mix it with other colors to
                  create a unique, visually pleasing nail design. Explore new
                  styles and bring joy to your nails!
                </p>
                <button className="whitBtn">Add all product to bag</button>
                <div className="d-flex justify-content-between">
                  <a href="/" className="">
                    <button className="tryBtn">Try Again</button>
                  </a>
                  <button className="tryBtn">SHARE</button>
                </div>
                <button className="pinkBtn">Share Color Today</button>
                <button className="pinkBtn">Add Color Today</button>
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

        <div className="container mt-5">
          <div className="flexBox">
            {/* Left Section with User Info */}
            <div
              className="colo-lg-6  flexBox pt-5"
              style={{ boxShadow: "none", border: "0", background: "#F5F5F5" }}
            >
              <div className="col-md-3 col-sm-12 text-center">
                <img
                  src="https://via.placeholder.com/100" // Replace with the actual image
                  alt="Bessie Nail Artist"
                  className="rounded-circle"
                />
                <p className="mt-2 mb-1 text-black">Beetles Nail Artist</p>
                <h5 style={{ color: "#dc41a1" }}>Bessie</h5>
              </div>
              <div>
                <h2 style={{ color: "#000" }}>Congratulations! 😄</h2>
                <p style={{ color: "#000" }}>
                  You’ve found the color that suits your mood today. Many people
                  use colors associated with happiness to create their nails!
                  You can draw inspiration from that. We included the colors in
                  the Boett’s combination kit, which includes gels in a wide
                  range of colors and some tools. This way, you can experiment
                  with different colors every day!
                </p>
              </div>
            </div>

            {/* Right Section with Product Info */}
            {!isMobile ? (
              <div
                className="col-md-6 col-sm-12 p-3"
                style={{
                  boxShadow: "none",
                  border: "0",
                  background: "#F5F5F5",
                }}
              >
                <div className="card mb-3 text-center flexRow border-0">
                  {colors?.slice(0,2).map((res: any) => (
                    <div className="card-body ">
                      <div className="text-center">
                        <img
                          src={res?.image} // Replace with actual image
                          alt="Color 1"
                          className="rounded"
                        />
                        <h6 className="text-black">{res?.name}</h6>
                      </div>
                      <button className="btn btn-outline-secondary btn-sm mt-4 btnCart">
                        <input
                          type="hidden"
                          className="varient_id"
                          value={res?.varient_id}
                        />
                        ADD TO BAG
                      </button>
                    </div>
                  ))}
                </div>

                {/* <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">ALL IN ONE KIT</h5>
              <button className="btn btn-secondary">SEE MORE</button>
            </div>
          </div> */}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Colors Section */}
          <h3 className="text-left mt-4 text-black">
            See what colors make others happy
          </h3>
          <div className=" mt-3 gridBox">
            <div className="width50">
              <img
                src="https://9c35bd-26.myshopify.com/cdn/shop/articles/p_2674_large.png?v=1728451468"
                alt="Color1"
                className="img-fluid"
              />
            </div>
            <div className="width50">
              <img
                src="https://9c35bd-26.myshopify.com/cdn/shop/articles/p_2674_large.png?v=1728451468"
                alt="Color1"
                className="img-fluid"
              />
            </div>
            <div className="width50">
              <img
                src="https://9c35bd-26.myshopify.com/cdn/shop/articles/p_2674_large.png?v=1728451468"
                alt="Color1"
                className="img-fluid"
              />
            </div>
            <div className="width50">
              <img
                src="https://9c35bd-26.myshopify.com/cdn/shop/articles/p_2674_large.png?v=1728451468"
                alt="Color1"
                className="img-fluid"
              />
            </div>
            <div className="mobileNone width50">
              <img
                src="https://9c35bd-26.myshopify.com/cdn/shop/articles/p_2674_large.png?v=1728451468"
                alt="Color1"
                className="img-fluid"
              />
            </div>
            <div className="mobileNone width50">
              <img
                src="https://9c35bd-26.myshopify.com/cdn/shop/articles/p_2674_large.png?v=1728451468"
                alt="Color1"
                className="img-fluid"
              />
            </div>
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

export default ProductCombine;
