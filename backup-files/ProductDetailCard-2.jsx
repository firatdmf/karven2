import "./ProductDetailCard.css";
import { useState, useEffect } from "react";
function ProductDetailCard() {
  const variantClick = (e) => {
    let url = new URL(e.currentTarget.src);
    let path = url.pathname;
    console.log(path);
    setvariantUrl(path);
  };
  const fabricData = {
    sku: "12471",
    size: "300 cm",
    imgUrl: [
      "/images/fabrics/1002.jpg",
      "/images/fabrics/1003.jpg",
      "/images/fabrics/1006.jpg",
      "/images/fabrics/1006-2.jpg",
      "/images/fabrics/1008.jpg",
    ],
    stock: 103.94,
    type: ["embroidery", "sheer"],
  };

  const imageSrc = [
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg",
    "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
  ];

  useEffect(() => {
    setvariantUrl(fabricData["imgUrl"][0]);
  }, []);

  const [variantUrl, setvariantUrl] = useState("");

  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  return (
    <div className="ProductDetailCardPage">
      <div className="card-wrapper">
        <div className="card">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                {/* <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                  alt="shoe image"
                /> */}
                {/* <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                    alt="shoe image"
                  /> */}
                {fabricData["imgUrl"].map((item, index) => {
                  return <img key={index} src={item} alt="" />;
                })}
                {/* {fabricData["imgUrl"].map((item, index) => {
                  return <img key={index} src={item} alt="" />;
                })} */}
              </div>
            </div>
            <div className="img-select">
              {/* <div className="img-item">
                <a href="#" data-id="1">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                    alt="shoe image"
                  />
                </a>
              </div> */}
              {fabricData["imgUrl"].map((item, index) => {
                return (
                  <div className="img-item" key={index}>
                    <a href="" data-id={index + 1}>
                      <img src={item} alt="" />
                    </a>
                  </div>
                );
              })}
              {/* {fabricData["imgUrl"].map((item, index) => {
                return (
                  <div key={index} className="img-item">
                    <a href="#" data-id="1">
                      <img src={item} alt="" />
                    </a>
                  </div>
                );
              })} */}
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title">{fabricData["sku"]}</h2>
            {/* {fabricData["type"].map((item, index) => { */}
               <div  className="product-link">{fabricData["type"].join(', ')}</div>
            {/* })} */}

            {/* <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div> */}

            {/* <div className="product-price">
              <p className="last-price">
                Old Price: <span>$257.00</span>
              </p>
              <p className="new-price">
                New Price: <span>$249.00 (5%)</span>
              </p>
            </div> */}

            <div className="product-detail">
              {/* <h2>about this item: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p> */}
              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            {/* <div className="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Compare
              </button>
            </div> */}

            {/* <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
