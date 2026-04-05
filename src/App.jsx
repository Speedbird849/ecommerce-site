import { useMemo, useState } from "react";
import "./App.css";
import { Carousel } from 'nuka-carousel';
import wood from "./wood.png";
import what from "./what.jpg";
import hd600 from "./hd600tp.webp";
import kbear from "./kbear.jpg";
import wavetechnica from "./wavetechnica.jpg";
import audiozonea4 from "./audiozonea4.jpg";
import cobaltc1 from "./cobaltc1.jpeg";
import iem from "./iem.png";
import iem2 from "./iem2.webp";
import iem3 from "./iem3.jpg";
import bose from "./bose.webp";
import soundbar1 from "./soundbar1.jpg";
import soundbar2 from "./soundbar2.jpg";
import soundbar3 from "./soundbar3.jpg";
import home from "./home.webp";
import fiio from "./fiio.jpg";
import dac from "./dac.jpg";
import dac1 from "./dac1.jpg";
import dac2 from "./dac2.webp";
import dac3 from "./dac3.webp";

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

const categoryPages = {
  headphones: {
    title: "Headphones",
    image: wavetechnica,
    items: [
      {
        id: "hd600",
        name: "Sennheiser HD600",
        description: "Open-back studio reference headphones",
        price: 6999,
        image: hd600,
        alt: "Sennheiser HD600",
      },
      {
        id: "wave-w50x-bt",
        name: "Wave-Technica W50x-BT",
        description: "Wireless monitoring headphones",
        price: 5499,
        oldPrice: 5999,
        image: wavetechnica,
        alt: "Wave-Technica W50x-BT",
      },
      {
        id: "audiozone-a4",
        name: "AudioZone A4",
        description: "Comfort-first everyday over-ears",
        price: 3499,
        image: audiozonea4,
        alt: "AudioZone A4",
      },
      {
        id: "cobalt-c1",
        name: "Cobalt C1",
        description: "Balanced tuning for long sessions",
        price: 4299,
        image: cobaltc1,
        alt: "Cobalt C1",
      },
    ],
  },
  earphones: {
    title: "Earphones and IEMs",
    image: iem2,
    items: [
      {
        id: "kbear-tourbillon-pro",
        name: "KBear Tourbillon Pro",
        description: "Hybrid driver IEM with detailed mids",
        price: 2799,
        oldPrice: 3999,
        image: kbear,
        alt: "KBear Tourbillon Pro",
      },
      {
        id: "tz-thunder-v2",
        name: "TZ Thunder v2",
        description: "Bass-forward daily-use IEM",
        price: 7999,
        oldPrice: 9999,
        image: iem2,
        alt: "TZ Thunder v2",
      },
      {
        id: "antcritical-tz-3",
        name: "AntCritical TZ-3",
        description: "Compact IEM with neutral signature",
        price: 2799,
        oldPrice: 3999,
        image: iem,
        alt: "AntCritical TZ-3",
      },
      {
        id: "sonic-s5",
        name: "Sonic S5",
        description: "Comfort-fit earphones for long listening",
        price: 2199,
        image: iem3,
        alt: "Sonic S5",
      },
    ],
  },
  speakers: {
    title: "Speakers and Home Audio",
    image: soundbar1,
    items: [
      {
        id: "bose-solo-5",
        name: "Bose Solo 5",
        description: "Compact home theater soundbar",
        price: 10499,
        oldPrice: 11999,
        image: soundbar1,
        alt: "Bose Solo 5",
      },
      {
        id: "roomtone-r7",
        name: "RoomTone R7",
        description: "Living-room friendly stereo speakers",
        price: 8999,
        image: soundbar2,
        alt: "RoomTone R7",
      },
      {
        id: "pulsebar-p3",
        name: "PulseBar P3",
        description: "TV soundbar with dialogue boost",
        price: 6999,
        image: soundbar3,
        alt: "PulseBar P3",
      },
      {
        id: "atmo-mini",
        name: "Atmo Mini",
        description: "Desktop speaker pair for music and movies",
        price: 5199,
        image: home,
        alt: "Atmo Mini",
      },
    ],
  },
  dacs: {
    title: "DACs and AMPs",
    image: dac1,
    items: [
      {
        id: "fiio-m15",
        name: "FiiO M15",
        description: "Portable Hi-Res Audio Player",
        price: 8499,
        image: dac1,
        alt: "FiiO M15",
      },
      {
        id: "zen-air-dac",
        name: "Zen Air DAC",
        description: "Warm desktop DAC for daily listening",
        price: 6999,
        image: dac2,
        alt: "Zen Air DAC",
      },
      {
        id: "ampbox-a2",
        name: "AmpBox A2",
        description: "Compact headphone amplifier",
        price: 5799,
        image: dac3,
        alt: "AmpBox A2",
      },
      {
        id: "daclink-d1",
        name: "DACLink D1",
        description: "USB DAC with clean neutral output",
        price: 4999,
        image: dac,
        alt: "DACLink D1",
      },
    ],
  },
};

function App() {
  const [activePage, setActivePage] = useState("home");
  const [cartItems, setCartItems] = useState([]);

  const activeCategory = categoryPages[activePage];

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const formatPrice = (value) => `₹${value.toLocaleString("en-IN")}`;

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
    event?.preventDefault();
    setActivePage("cart");
  };

  const openHome = (event) => {
    event?.preventDefault();
    setActivePage("home");
  };

  const openCategory = (categoryKey) => (event) => {
    event.preventDefault();
    setActivePage(categoryKey);
  };

  return (
    <div className="page">
      <header className="topbar">
        <a href="#home" onClick={openHome}><h1 className="brand">Audio<span>Zone</span></h1></a>
        <div className="header-actions">
          <nav className="menu">
            <a href="#home" onClick={openHome}>Home</a>
            <a href="#categories" onClick={openHome}>Categories</a>
            <a href="#featured" onClick={openHome}>Featured</a>
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
                <button type="button" onClick={openCategory("earphones")}>Shop Now</button>
              </section>
              <section className="hero hero2">
                <p className="tagline">Cinema sound, compact footprint</p>
                <h2>Bose Solo 5 Soundbar</h2>
                <p className="hero-price"><span className="old-price">₹11999</span><span className="sale-price">₹10499</span></p>
                <button type="button" onClick={openCategory("speakers")}>Shop Now</button>
              </section>
              <section className="hero hero3">
                <p className="tagline">Reference-grade portable audio</p>
                <h2>FiiO M15</h2>
                <p className="hero-price"><span className="sale-price">₹8499</span></p>
                <button type="button" onClick={openCategory("dacs")}>Shop Now</button>
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

            <section className="categories" id="featured">
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
              <a className="card-link" href="#headphones" onClick={openCategory("headphones")}>
                <article className="card card1">
                  <p>Headphones</p>
                </article>
              </a>
              <a className="card-link" href="#earphones" onClick={openCategory("earphones")}>
                <article className="card card2">
                  <p>Earphones and IEMs</p>
                </article>
              </a>
              <a className="card-link" href="#speakers" onClick={openCategory("speakers")}>
                <article className="card card3">
                  <p>Speakers and Home Audio</p>
                </article>
              </a>
              <a className="card-link" href="#dacs" onClick={openCategory("dacs")}>
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
      ) : activePage === "cart" ? (
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
      ) : (
        <main className="category-page">
          <section className="category-header">
            <button className="category-back-btn" type="button" onClick={openHome}>
              Back to Home
            </button>
            <img src={activeCategory.image} alt={activeCategory.title} />
            <div className="category-header-content">
              <p className="who-label">CATEGORY</p>
              <h2>{activeCategory.title}</h2>
            </div>
          </section>

          <section className="categories">
            <h3 className="cat-label">SHOP {activeCategory.title.toUpperCase()}</h3>
            <div className="category-grid">
              {activeCategory.items.map((product) => (
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
      )}

      <footer className="footer">
        <a href="https://github.com/Speedbird849/ecommerce-site">&copy; 2026 AudioZone. Designed by Aryan Gupta. All rights reserved.</a>
      </footer>
    </div>
  );
}

export default App;