import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import varientData from "../constant/variant.json";
import beetriceData from "../constant/beetrice.json";
import bellaData from "../constant/bella.json";
type ArtistImage = {
  src: string;
  name: string;
};

type ArtistImages = {
  [key: string]: ArtistImage[];
};
const ProductDetail = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [colors, setColors] = useState<any[]>([]);
  // const artist = localStorage.getItem("artist");
  useEffect(() => {
    const products = localStorage.getItem("selectedProducts");
    if (products) {
      setSelectedProducts(JSON.parse(products));
    }
  }, []);
  const color1=varientData?.varient
  
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(selectedColor, "selectedColor");

  const handleColorClick = (color: any) => {
    setSelectedColor(color);
    setModalVisible(true);
  };
  const navigate = useNavigate();
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
    navigate("/product-color-combination");
    setModalVisible(false);
  };
  const handleRemoveColor = (index: any) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    setSelectedProducts(updatedProducts);
  };
  console.log(selectedProducts, "selectedProducts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleArtistClick = (artist: string) => {
    console.log(artist, "uuu");
    window.location.href = window.location.href;
    localStorage.setItem("artist", JSON.stringify(artist));
    setSelectedArtist(artist);
    setIsModalOpen(false);
    
  };

  // useEffect(() => {

  //   if (products) {
  //     setArtist(JSON.parse(products));
  //   }
  // }, []);

  const artist:any = localStorage.getItem("artist");
  let asd=JSON.parse(artist)
console.log(asd,"asd");

useEffect(() => {
  const artist:any = localStorage.getItem("artist");
  let artist1;

  try {
    artist1 = JSON.parse(artist);
  } catch (e) {
    console.error("Failed to parse artist from localStorage", e);
    artist1 = null; // Handle parsing error
  }

  console.log(artist1, "Current Artist");

  let selectedColors:any = [];
  console.log(artist1?.length, "Artist Length");
  
  console.log(artist1 === "Beatrise", "Comparison Result with Beatrise");
  console.log(artist1 === "Bella", "Comparison Result with Bella");
  console.log(varientData, "Variant Data");
  console.log(beetriceData, "Beetrice Data");
  console.log(bellaData, "Bella Data");
  console.log(artist1 === "Bessie", "tyuertuie");

  if (artist1 === "Bessie") {
      selectedColors = varientData.varient || [];
  } else if (artist1 === "Beatrise") {
      selectedColors = beetriceData.beetrice || [];
  } else if (artist1 === "Bella") {
      selectedColors = bellaData.bella || [];
  }

  console.log(selectedColors, "Colors from artist");
  setColors(selectedColors);
}, []);
const xyz=varientData.varient
  console.log(colors, "kkkkkk");
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
          <div className=" bg-dark p-5 rounded position-relative p-sm-3 innerProductPopup w-100">
            <div className="row ">
              <div
                className="col-md-3 col-sm-12 text-center"
                onClick={openModal}
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Bessie Nail Artist"
                  className="rounded-circle"
                />
                <p className="mt-2 mb-1">Beetles Nail Artist</p>
                <h5 style={{ color: "#dc41a1" }}>{asd||"Bessie"}</h5>
              </div>

              {/* Modal */}
              {isModalOpen && (
                <div
                  className="modal fade show"
                  style={{ display: "block" }}
                  tabIndex={-1}
                  aria-labelledby="bessieModalLabel"
                  aria-hidden={!isModalOpen}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="bessieModalLabel">
                          {asd} - Beetles Nail Artist
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body d-flex gap-5 text-center justify-content-center">
                        <div
                          className=""
                          onClick={() => handleArtistClick("Bessie")}
                        >
                          <img
                            src="https://via.placeholder.com/100"
                            alt="Bessie Nail Artist"
                            className="rounded-circle mb-3"
                          />
                          <p className="text-black">Bessie</p>
                        </div>
                        <div
                          className=""
                          onClick={() => handleArtistClick("Beatrise")}
                        >
                          <img
                            src="https://via.placeholder.com/100"
                            alt="Beatrise Nail Artist"
                            className="rounded-circle mb-3"
                          />
                          <p className="text-black">Beatrise</p>
                        </div>
                        <div
                          className=""
                          onClick={() => handleArtistClick("Bella")}
                        >
                          <img
                            src="https://via.placeholder.com/100"
                            alt="Bella Nail Artist"
                            className="rounded-circle mb-3"
                          />
                          <p className="text-black">Bella</p>
                        </div>
                      </div>

                      {/* Show images based on selected artist */}

                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isModalOpen && <div className="modal-backdrop fade show"></div>}
              {/* Backdrop */}
              <div className="col-md-9 col-sm-12">
                <p>
                  Hey, I'm Bessie, your local nail artist! Choose Mysterious
                  Delight for a fabulous look. Mix it with other colors to
                  create a unique, visually pleasing nail design. Explore new
                  styles and bring joy to your nails!
                </p>
              </div>
            </div>

            <div className="row text-center mt-4 color-pailet">
              {selectedProducts?.length < 2 ? (
                <div className="col">
                  <div className="d-flex justify-content-center">
                    {colors.length > 0 ? (
                      colors.map((color, index) => (
                        <div
                          key={index}
                          className="color-circle"
                          style={{ backgroundColor: color.hex_code }}
                          onClick={() => handleColorClick(color)}
                        ></div>
                      ))
                    ) : (
                      xyz.map((color, index) => (
                        <div
                          key={index}
                          className="color-circle"
                          style={{ backgroundColor: color.hex_code }}
                          onClick={() => handleColorClick(color)}
                        ></div>
                      ))
                    
                    )}
                  </div>
                  {/* <button className="btn btn-link mt-3" style={{ color: "#f06" }}>
                I Just Want One Color <span>&gt;</span>
              </button> */}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="blockWrapper">
              <Link
                className="justify-content-center mt-5 items-center "
                to={`/product-color-combination`}
              >
                <button className="items-center btnCart">
                  I just want one color to express an emotion.
                </button>
              </Link>
              <Link
                className="justify-content-center mt-5 items-center "
                to={`/`}
              >
                <button className="items-center btnCart">
                  I would like to choose a different color for the first one.
                </button>
              </Link>
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
                      <Link
                        to="/product-color-combination"
                        onClick={handleSelectColor}
                      >
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
