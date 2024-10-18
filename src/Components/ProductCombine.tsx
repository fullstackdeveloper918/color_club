import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import varientData from "../constant/variant.json";
 import image from "../assets/images/image (9).png"
 import heart from "../assets/images/image (10).png"
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
  const artist: any = localStorage.getItem("artist");
  let asd = JSON.parse(artist);

  const navigate = useNavigate();
  const push = () => {
    navigate(`/cart`);
  };
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
              <span className="bi bi-arrow-left"></span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"/></svg> BACK
            </button>
          </Link>
        </div>
      </div>

      {/* Nail Artist Profile */}
      <div className="row justify-content-center text-white mt-3">
        <div className="d-flex gap-3  mediumResponsive">
          {/* mobile structure started*/}

          {/* mobile structure ended*/}

          <div>
            {!isMobile?
            <div className="flexBox">
              {selectedProducts.slice(0, 2).map((res: any, index: number) => (
                <div className="colo-md-6 ">
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
            </div>:""}
          </div>

          <div className=" bg-dark p-5 rounded position-relative p-sm-3 innerProductPopup w-100">
            <div className="row innerProduct">
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
                <div className="d-flex gap-2">
{isMobile?
                <img
                  src="https://via.placeholder.com/100"
                  alt="Bessie Nail Artist"
                  className="rounded-circle"
                  style={{height:"40px"}}
                  />:""}
                <h6 className="mt-2 mb-1">Your color theme for today is</h6>
                  </div>
                <h2> <img
                 src="https://9c35bd-26.myshopify.com/cdn/shop/files/Happy.png?v=1727257700" alt="" style={{height:"28px"}}
                  className="rounded-circle"
                
                  />Joyful Exploration
                   <img
                 src={image} alt="" style={{height:"30px"}}
                  className="rounded-circle"
                
                  />
                   <img
                 src={heart} alt="" style={{height:"30px"}}
                  className="rounded-circle"
                
                  />
                  </h2>
              </div>
              <div className=" col-sm-12">
                <p>
                  {/* Hey, I'm {asd}, your local nail artist! Choose Mysterious
                  Delight for a fabulous look. Mix it with other colors to
                  create a unique, visually pleasing nail design. Explore new
                  styles and bring joy to your nails! */}
                  Picture yourself as a bold adventurer in a purple enchanted forest, setting off on a blue fantastical journey. Every step is an adventure, every turn a chance to explore the unknown. Let's bravely move forward with a joyful heart!
                </p>
                <a href="/cart" className="">
                  <button className="whitBtn">Add all product to bag</button>
                </a>
                {/* {isMobile?} */}
                <div className="d-flex justify-content-between">
                  <a href="/" className="">
                    <button className="tryBtn tryagain">Try Again</button>
                  </a>
                  <div className="">
                    <button className="tryBtn sharebtn">
                      <input
                        type="hidden"
                        className="product_id"
                        value={selectedProducts[0]?.link}
                      />
                      SHARE
                    </button>
                  </div>
                </div>
                <button className="pinkBtn sharebtn">  <input
                        type="hidden"
                        className="product_id"
                        value={selectedProducts[0]?.link}
                      />SHARE TODAY'S COLOR Today</button>
                        <a href="/cart" className="">
                <button className="pinkBtn">ADD TODAY'S COLOR TO BAG</button></a>
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

        <div className="container mt-5">
          <div className="flexBox">
            {/* Left Section with User Info */}
            {!isMobile ? (
              <div
                className="colo-lg-6  flexBox pt-5"
                style={{
                  boxShadow: "none",
                  border: "0",
                  background: "#F5F5F5",
                }}
              >
                <div className="col-md-3 col-sm-12 text-center">
                  <img
                    src="https://via.placeholder.com/100" // Replace with the actual image
                    alt="Bessie Nail Artist"
                    className="rounded-circle"
                  />
                  <p className="mt-2 mb-1 text-black">Beetles Nail Artist</p>
                  <h5 style={{ color: "#dc41a1" }}>{asd}</h5>
                </div>
                <div>
                  <h2 style={{ color: "#000" }}>Congratulations! 😄</h2>
                  <p style={{ color: "#000" }}>
                    You’ve found the color that suits your mood today. Many
                    people use colors associated with happiness to create their
                    nails! You can draw inspiration from that. We included the
                    colors in the Boett’s combination kit, which includes gels
                    in a wide range of colors and some tools. This way, you can
                    experiment with different colors every day!
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}

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
                  {colors?.slice(0, 2).map((res: any) => (
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
          <div className="d-flex justify-content-between">
            {!isMobile?
          <h3 className="text-left mt-4 text-black">
            See what colors make others happy
          </h3>:
          <h3 className="text-left mt-4 text-black">
            Check out other sisters'<br></br> creation with this theme
          </h3>}
        

          </div>
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
            <div className="justify-content-end">
            <p className="text-black mt-4 btnSeeMore">SEE MORE <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"/></svg></p>
            </div>
          {isMobile ? (
              <div
                className="col-md-6 col-sm-12 p-3 mobileCards"
                style={{
                  boxShadow: "none",
                  border: "0",
                  background: "#F5F5F5",
                }}
              >
                <h3 className="text-black">You might be intrested</h3>
                <div className="card mb-3 text-center flexRow cardsss border-0">
                  {colors?.slice(0, 2).map((res: any) => (
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
