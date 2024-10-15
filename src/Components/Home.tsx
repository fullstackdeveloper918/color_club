import React, { useState } from "react";
import logo from "./logo.svg";
import "../App.css";
import data from "../constant/data.json";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Home = () => {
  const [activeTab, setActiveTab] = useState<"emotions" | "trends">("emotions");
  const [activeEmojiIndex, setActiveEmojiIndex] = useState(0); // State to track active emoji
  const [emojiName, setEmojiName] = useState("");
  const [colors, setColors] = useState<any>([]); // State to track colors
  const [showModal, setShowModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const productData: any = data.moods;
  console.log(activeEmojiIndex, "activeEmojiIndex");

  const colorSets = [
    [
      "#F9DC24",
      "#F3E792",
      "#E8B51A",
      "#F3B71B",
      "#FFA400",
      "#E3C565",
      "#FFC88F",
      "#FFEC84",
    ], // Happy
    [
      "#B2EBF2",
      "#9DC9EB",
      "#007FFF",
      "#78A5A3",
      "#006B54",
      "#AFEEEE",
      "#B0E0E6",
      "#C1CDC1",
    ], // Peaceful
    [
      "#7B3F00",
      "#AF9483",
      "#D7B99E",
      "#D08466",
      "#D2B48C",
      "#D68A59",
      "#D4B996",
      "#D2B48C",
    ], // Satisfied
    [
      "#78A5A3",
      "#9FD989",
      "#00B140",
      "#297B57",
      "#006B54",
      "#FFEF00",
      "#D4ED91",
      "#B8B67E",
    ], // Hopeful
    [
      "#FF8C00",
      "#FF7F50",
      "#FF6F00",
      "#E25822",
      "#A10000",
      "#FFB7C5",
      "#8A2BE2",
      "#DAA520",
    ], // Excited
    [
      "#CEC3E6",
      "#E6A8D7",
      "#B57EDC",
      "#B48395",
      "#9966CC",
      "#6F2DA8",
      "#614051",
      "#DDA0DD",
    ], // Cool
    [
      "#EA738D",
      "#D32F2F",
      "#D2042D",
      "#C21E56",
      "#C71585",
      "#FF69B4",
      "#FF2400",
      "#B22222",
    ], // Love-filled
    [
      "#F2C1D1",
      "#F8BBD0",
      "#E6A6BE",
      "#F778A1",
      "#D8A1B7",
      "#DDA0DD",
      "#89CFF0",
      "#F5C7C5",
    ], // Playful
  ];
  const xyz = [
    "#F9DC24",
    "#F3E792",
    "#E8B51A",
    "#F3B71B",
    "#FFA400",
    "#E3C565",
    "#FFC88F",
    "#FFEC84",
  ];
  const checkData = {
    mood: "Happy",
    products: [
      {
        "id": "Product 001",
        "name": "Canary Yellow #a649 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/gel-nail-polish-15ml-cl345",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/93a50e3355cf4ab8923e8fff9f18a726_compact.jpg",
        "color_name": "Super Lemon",
        "hex_code": "#F9DC24",
        "varient_id":"49246359421274"
      },
      {
        "id": "Product 002",
        "name": "Vannilla Frosting #a809 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/vannilla-frosting-15ml-gel-polish",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/93a50e3355cf4ab8923e8fff9f18a726_compact.jpg",
        "color_name": "Lemon Verbena",
        "hex_code": "#F3E792",
         "varient_id" : "34678668778"
      },
      {
        "id": "Product 005",
        "name": "Clara Ochre #a247 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/clara-ochre",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/e65d12e815b64180942be1c5517d4751_compact.jpg",
        "color_name": "Elfin Yellow",
        "hex_code": "#E8B51A",
        "varient_id":"49246356439386"
      },
      {
        "id": "Product 006",
        "name": "Beetles Cat Eye Gel Polish: Chameleon Magic Effect, 15ML Nail Soak Off UV Gel",
        "link": "https://9c35bd-26.myshopify.com/products/saturn-b740-cat-eye-15ml-gel-polish",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/48875e067933456cbc30e438e2d908dd_compact.jpg",
        "color_name": "Buttercup",
        "hex_code": "#F3B71B",
        "varient_id":"49246387634522"
      },
      {
        "id": "Product 008",
        "name": "Glitter Orange Glow in the Dark |15ml Nail Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/glitter-orange-glow-in-the-dark-15ml-nail-gel-polish",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/93a50e3355cf4ab8923e8fff9f18a726_compact.jpg",
        "color_name": "Sunshine Orange",
        "hex_code": "#FFA400",
        "varient_id":""
      },
      {
        "id": "Product 009",
        "name": "Champagne Gold#b545 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/champagne-gold-b545-15ml-gel-polish",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/050b91679aa64b578367a62319d1ed50_compact.jpg",
        "color_name": "Pale Gold",
        "hex_code": "#E3C565",
        "varient_id":"49246359781722"
      },
      {
        "id": "Product 010",
        "name": "Confetti Party #b574 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/confetti-party-b574-15ml-crystal-colorful-confetti-gel-polish",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/1e68a695d69f497f8e02019883ad78e6_compact.png",
        "color_name": "Warm Apricot",
        "hex_code": "#FFC88F",
        "varient_id":"49246356734298"
      },
      {
        "id": "Product 014",
        "name": "Lemon Chiffon #a735 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/lemon-chiffon-15ml-gel-polish-1",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/93a50e3355cf4ab8923e8fff9f18a726_compact.jpg",
        "color_name": "Creamy Daffodil",
        "hex_code": "#FFEC84",
        "varient_id":""
      },
      {
        "id": "Product 016",
        "name": "Pearlescent Champagne#d037 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/pearlescent-champagne-d037-15ml-gel-polish",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/93a50e3355cf4ab8923e8fff9f18a726_compact.jpg",
        "color_name": "Golden Cream",
        "hex_code": "#F3E5AB",
        "varient_id":""
      },
      {
        "id": "Product 017",
        "name": "Tammy Tangerine #a467 |15ml Gel Polish",
        "link": "https://9c35bd-26.myshopify.com/products/gel-nail-polish-15ml-cl303",
        "image":"https://9c35bd-26.myshopify.com/cdn/shop/files/93a50e3355cf4ab8923e8fff9f18a726_compact.jpg",
        "color_name": "Orange Zest",
        "hex_code": "#FB9902",
        "varient_id":"49246373642586"
      }
    ],
  };
  const emojis = [
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/Happy.png?v=1727257700",
      name: "Happy",
    },
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/satishfied.png?v=1727257788",
      name: "Peaceful",
    },
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/Hopeful.png?v=1727257904",
      name: "Satisfied",
    },
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/3ad64903095a4368e1af61451a328d7_1.png?v=1728637110",
      name: "Hopeful",
    },
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/Cool.png?v=1727258120",
      name: "Excited",
    },
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/Inlove.png?v=1727258208",
      name: "Cool",
    },
    {
      emoji:
        "https://9c35bd-26.myshopify.com/cdn/shop/files/Cute.png?v=1727258342",
      name: "Love-filled",
    },
    {
      emoji:
        "https:////9c35bd-26.myshopify.com/cdn/shop/files/Hopeful_f35cc36c-90e8-4860-960c-d2898bc7672e.png?v=1728637242",
      name: "Playful",
    },
  ];
  const trendColors: any = {
    "2024 Color Trends": [
      "#D50032",
      "#C62828",
      "#B71C1C",
      "#FFABAB",
      "#FF6F61",
      "#FF8C8C",
      "#FF4D4D",
    ],
    "Summer Color Trend": [
      "#FFD700",
      "#FFA500",
      "#FF4500",
      "#FF6347",
      "#FF7F50",
      "#FFB6C1",
      "#FF69B4",
    ],
    "Sarah Bland Trend": [
      "#32CD32",
      "#3CB371",
      "#2E8B57",
      "#228B22",
      "#ADFF2F",
      "#7FFF00",
      "#7CFC00",
    ],
  };

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handleEmojiClick = (index: any, item: any) => {
    console.log(item.name, "jkkjkjk");
    setEmojiName(item.name);

    // Make sure to access the correct color set
    const selectedColors = colorSets[index];

    // Ensure that selectedColors is defined before setting it to state
    if (selectedColors) {
      setColors(selectedColors);
    } else {
      setColors([]); // Default to an empty array if undefined
    }

    setActiveEmojiIndex(index); // Set the active emoji index
  };
  // const moodData = productData.find((mood:any) => mood.mood === emojiName);
  // console.log(moodData,moodData);

  const handleColorClick = (color: any) => {
    console.log(color, "color");

    const moodData = productData?.find((mood: any) => mood?.mood === emojiName);
    console.log(moodData, "moodData");
    const checkProduct = moodData ? moodData : checkData;
    // if (moodData) {
    const products = checkProduct?.products?.filter(
      (product: any) => product?.hex_code === color
    );
    console.log(products, "products");

    setSelectedProducts(products);
    setShowModal(true); // This will trigger the modal to open
    // }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProducts([]);
  };

  const [activeTrend, setActiveTrend] = useState("2024 Color Trends");

  const handleTrendClick = (trend: string) => {
    setActiveTrend(trend);
    setColors(trendColors[trend]); // Update colors based on selected trend
  };
  console.log(selectedProducts, "selectedProducts");
  console.log(showModal, "showModal");
  // const handleSelectColor = () => {
  localStorage.setItem("category", JSON.stringify(emojiName));
  // };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="container text-center py-5 cololabs_sec">
        <h1 className="display-4 font-weight-bold">
          Find your <span>Color</span> Today
        </h1>
        <div className="mt-4 tabs_click">
          <button
            className={`btn btn-link ${
              activeTab === "emotions" ? "active" : ""
            }`}
            onClick={() => handleTabChange("emotions")}
          >
            Choose by Emotions
          </button>
          <span className="mx-2">|</span>
          <button
            className={`btn btn-link ${activeTab === "trends" ? "active" : ""}`}
            onClick={() => handleTabChange("trends")}
          >
            Choose by Trends
          </button>
        </div>

        {activeTab === "emotions" && (
          <div>
            <div className="mt-4 emoji-container">
              {emojis.map((item, index) => (
                <span
                  key={index}
                  role="img"
                  aria-label={item.name.toLowerCase()}
                  className={`emoji ${
                    activeEmojiIndex === index ? "active" : ""
                  }`}
                  title={item.name} // Tooltip on hover
                  onClick={() => handleEmojiClick(index, item)} // Click event
                  style={{
                    margin: "0 5px",
                    fontSize: "24px",
                    cursor: "pointer",
                  }} // Style adjustments
                >
                  <div className="emojii">
                    <img src={item.emoji} alt="" className="" />
                  </div>
                  <p>{item.name}</p>
                </span>
              ))}
            </div>
            <p className="bottom_emoji">
              We’ve picked out some{" "}
              <span className="font-weight-bold text-danger">
                {emojiName || "Happy"}
              </span>{" "}
              colors for you. Choose the one that resonates with you the most!
            </p>

            <div
              className="color_labsec"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {showModal===false?
              <>
              {!isHovered && (
                <h2 className="pick_mood">Pick A Mood To Find Your Colors</h2>
              )}
              </>:""}
              <div className="color-pallte">
                {colors.length > 0
                  ? colors.map((color: any, index: any) => (
                      <div className="coloors" key={index}>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            backgroundColor: color,
                            color: "#fff",
                            cursor: "pointer",
                            width: "100%",
                            height: "100px",
                            fontSize: "24px",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handleColorClick(color)}
                        >
                          {/* {color}  */}
                        </button>
                      </div>
                    ))
                  : xyz.map((color: any, index: any) => (
                      <div className="coloors" key={index}>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            backgroundColor: color,
                            color: "#fff",
                            cursor: "pointer",
                            width: "100%",
                            height: "100px",
                            fontSize: "24px",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handleColorClick(color)}
                        >
                          {/* {color}  */}
                        </button>
                      </div>
                    ))}
              </div>
              {showModal && (
                <Modal
                  emojiName={emojiName}
                  closeModal={closeModal}
                  selectedProducts={selectedProducts}
                />
              )}
            </div>
          </div>
        )}

        {activeTab === "trends" && (
          <div>
            <div className="d-flex mt-2 chooseby_trend">
              <h3
                onClick={() => handleTrendClick("2024 Color Trends")}
                className={`trend-item ${
                  activeTrend === "2024 Color Trends" ? "active" : ""
                }`}
              >
                2024 Color Trends
              </h3>
              <span className="mx-2">|</span>
              <h3
                onClick={() => handleTrendClick("Summer Color Trend")}
                className={`trend-item ${
                  activeTrend === "Summer Color Trend" ? "active" : ""
                }`}
              >
                Summer Color Trend
              </h3>
              <span className="mx-2">|</span>
              <h3
                onClick={() => handleTrendClick("Sarah Bland Trend")}
                className={`trend-item ${
                  activeTrend === "Sarah Bland Trend" ? "active" : ""
                }`}
              >
                Sarah Bland Trend
              </h3>
            </div>
            {/* <div className="row mt-4">
              {colors.map((color: any, index: any) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                  <div
                    className="color-box"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div> */}
            {/* <div className="row mt-4">
              {colors?.map((color: any, index: any) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                  <div
                    className="color-box"
                    style={{
                      backgroundColor: color,
                      height: "100px",
                      width: "100%", 
                      borderRadius: "8px", 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#fff", 
                      fontSize: "24px", 
                    }}
                    onClick={() => handleColorClick(color)}
                  >
                  </div>
                </div>
              ))}
            </div> */}
            <div className="color-pallte">
              {colors.length > 0
                ? colors.map((color: any, index: any) => (
                    <div className="coloors" key={index}>
                      <button
                        type="button"
                        className="btn"
                        style={{
                          backgroundColor: color,
                          color: "#fff",
                          cursor: "pointer",
                          width: "100%",
                          height: "100px",
                          fontSize: "24px",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleColorClick(color)}
                      >
                        {/* {color}  */}
                      </button>
                    </div>
                  ))
                : xyz.map((color: any, index: any) => (
                    <div className="coloors" key={index}>
                      <button
                        type="button"
                        className="btn"
                        style={{
                          backgroundColor: color,
                          color: "#fff",
                          cursor: "pointer",
                          width: "100%",
                          height: "100px",
                          fontSize: "24px",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleColorClick(color)}
                      >
                        {/* {color}  */}
                      </button>
                    </div>
                  ))}
            </div>
          </div>
        )}
        {/* {color}*/}
      </div>
    </>
  );
};

export default Home;
