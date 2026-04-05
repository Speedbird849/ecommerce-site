import { useMemo, useState } from "react";
import "./App.css";
import { Carousel } from 'nuka-carousel';
import wood from "./wood.png";
import what from "./what.jpg";
import hd600 from "./hd600tp.webp";
import kbear from "./kbear.jpg";
import bose from "./bose.webp";
import fiio from "./fiio.jpg";

const featuredProducts = [
  {
    id: "hd600",
    name: "Sennheiser HD600",
    description: "Studio reference headphones",
    price: 6999,
    image: hd600,
    alt: "Sennheiser HD600",
  },
  {
    id: "kbear-tourbillon-pro",
    name: "KBear Tourbillon Pro",
    description: "High-End IEMs",
    price: 2799,
    oldPrice: 3999,
    image: kbear,
    alt: "KBear Tourbillon Pro",
  },
  {
    id: "bose-solo-5",
    name: "Bose Solo 5",
    description: "Best-in-class Soundbar",
    oldPrice: 11999,
    price: 10499,
    image: bose,
    alt: "Bose Solo 5",
  },
  {
    id: "fiio-m15",
    name: "FiiO M15",
    description: "Portable Hi-Res Audio Player",
    price: 8499,
    image: fiio,
    alt: "FiiO M15",
  },
];

function App() {
  const [activePage, setActivePage] = useState("home");
  const [cartItems, setCartItems] = useState([]);

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const formatPrice = (value) => `₹${value}`;

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const openCart = (event) => {
    event.preventDefault();
    setActivePage("cart");
  };

  const openHome = (event) => {
    event.preventDefault();
    setActivePage("home");
  };

  return (
    <div className="page">
      <header className="topbar">
        <a href="#home" onClick={openHome}><h1 className="brand">Audio<span>Zone</span></h1></a>
        <div className="header-actions">
          <nav className="menu">
            <a href="#home" onClick={openHome}>Home</a>
            <a href="#categories">Categories</a>
            <a href="#featured">Featured</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cart-link" href="#cart" aria-label="Open cart" onClick={openCart}>
            <span aria-hidden="true">🛒</span> Cart ({totalItems})
          </a>
        </div>
      </header>

      {activePage === "home" ? (
        <>
          <main>
            <Carousel className="hero-carousel" autoplay={true} autoplayInterval={3000} wrapMode="wrap" scrollDistance="slide" showArrows>
              <section className="hero hero1">
                <p className="tagline">Introducing the All New</p>
                <h2>AntCritical TZ-3 IEMs</h2>
                <p className="hero-price"><span className="old-price">₹3999</span><span className="sale-price">₹2799</span></p>
                <button type="button">Shop Now</button>
              </section>
              <section className="hero hero2">
                <p className="tagline">Good sound doesn't have to be expensive</p>
                <h2>The Wave-Technica W50x-BT</h2>
                <p className="hero-price"><span className="old-price">₹5999</span><span className="sale-price">₹5499</span></p>
                <button type="button">Shop Now</button>
              </section>
              <section className="hero hero3">
                <p className="tagline">Grab a free case with the new</p>
                <h2>TZ Thunder v2</h2>
                <p className="hero-price"><span className="old-price">₹9999</span><span className="sale-price">₹7999</span></p>
                <button type="button">Shop Now</button>
              </section>
            </Carousel>
            <div className="who">
              <section className="whoimg">
                <img src={wood} alt="wood stool" />
              </section>
              <section className="whotext" id="about">
                <p className="who-label">WHO WE ARE</p>
                <h3>For People Who Choose Music</h3>
                <p>Most people are happy if a song plays. Some people care about how it sounds. They notice when something's off, and they care enough to do something about it. They want to understand why a song moves them.
                </p>
                <p>
                  We built AudioZone for them. Since 2026, we've been curating the world's finest headphones for India. We don't carry everything. Just what we've listened to and believe in. The best, not the biggest.
                </p>
                <p>
                  We've spent 15 years helping people find that moment. It happens with the songs you already love. Heard again, for the first time.
                </p>
              </section>
            </div>

            <section className="categories" id="categories  ">
              <h3 className="cat-label">FEATURED PRODUCTS</h3>
              <div className="category-grid">
                {featuredProducts.map((product) => (
                  <article className="cardfeat" key={product.id}>
                    <img src={product.image} alt={product.alt} />
                    <p><b>{product.name}</b></p>
                    <p className="desc">{product.description}</p>
                    <p>
                      {product.oldPrice ? <span className="old-price">{formatPrice(product.oldPrice)}</span> : null}
                      {product.oldPrice ? " " : null}
                      <span className="sale-price">{formatPrice(product.price)}</span>
                    </p>
                    <button className="add-to-cart-btn" type="button" onClick={() => addToCart(product)}>Add to Cart</button>
                  </article>
                ))}
              </div>
            </section>
          </main>

          <section className="categories" id="categories">
            <h3 className="cat-label">POPULAR CATEGORIES</h3>
            <div className="category-grid">
              <a className="card-link" href="/#">
                <article className="card card1">
                  <p>Headphones</p>
                </article>
              </a>
              <a className="card-link" href="/#">
                <article className="card card2">
                  <p>Earphones and IEMs</p>
                </article>
              </a>
              <a className="card-link" href="/#">
                <article className="card card3">
                  <p>Speakers and Home Audio</p>
                </article>
              </a>
              <a className="card-link" href="/#">
                <article className="card card4">
                  <p>DACs and AMPs</p>
                </article>
              </a>
            </div>
          </section>

          <div className="what">
            <section className="whattext" id="about">
              <p className="who-label">WHY AUDIOZONE?</p>
              <h3>Because Music Moves Us.</h3>
              <p>We're huge music fans, just like you. Whether you are an audiophile seeking the finest listening experience or a professional in need of reliable equipment, our range combines cutting-edge technology with elegant design.
              </p>
              <p>
                We built AudioZone in 2026. Since then, we've been curating the world's finest headphones for India. We don't carry everything. Just what we've listened to and believe in. The best, not the biggest.
              </p>
            </section>
            <section className="whatimg">
              <img src={what} alt="wood stool" />
            </section>
          </div>
        </>
      ) : (
        <main className="cart-page" id="cart">
          <section className="cart-items-panel">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="cart-empty">Your cart is empty. Add products from the featured section.</p>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.alt} />
                    <div className="cart-item-content">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <p className="cart-item-total">{formatPrice(item.price * item.quantity)}</p>
                  </article>
                ))}
              </div>
            )}
          </section>

          <aside className="cart-summary-panel">
            <h3>Order Summary</h3>
            <p className="summary-line">
              <span>Items</span>
              <span>{totalItems}</span>
            </p>
            <p className="summary-line summary-total">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </p>
            <button className="add-to-cart-btn" type="button" onClick={openHome}>Continue Shopping</button>
          </aside>
        </main>
      )}

      <footer className="footer">
        <a href="https://github.com/Speedbird849/ecommerce-site">&copy; 2026 AudioZone. Designed by Aryan Gupta. All rights reserved.</a>
      </footer>
    </div>
  );
}

export default App;