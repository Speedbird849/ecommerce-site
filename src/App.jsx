import { useMemo, useState } from "react";
import { Carousel } from "nuka-carousel";
import "./App.css";
import wood from "./assets/wood.png";
import what from "./assets/what.jpg";
import hd600 from "./assets/hd600tp.webp";
import kbear from "./assets/kbear.jpg";
import wavetechnica from "./assets/wavetechnica.jpg";
import audiozonea4 from "./assets/audiozonea4.jpg";
import cobaltc1 from "./assets/cobaltc1.jpeg";
import categoryHeadphones from "./assets/category-headphones.jpg";
import categoryEarphones from "./assets/category-earphones.webp";
import categorySpeakers from "./assets/category-speakers.webp";
import categoryDacs from "./assets/category-dacs.jpg";
import iem from "./assets/iem.png";
import iem2 from "./assets/iem2.webp";
import iem3 from "./assets/iem3.jpg";
import bose from "./assets/bose.webp";
import soundbar1 from "./assets/soundbar1.jpg";
import soundbar2 from "./assets/soundbar2.jpg";
import soundbar3 from "./assets/soundbar3.jpg";
import home from "./assets/home.webp";
import fiio from "./assets/fiio.jpg";
import dac from "./assets/dac.jpg";
import dac1 from "./assets/dac1.jpg";
import dac2 from "./assets/dac2.webp";
import dac3 from "./assets/dac3.webp";

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
    description: "High-end hybrid-driver IEM",
    price: 2799,
    oldPrice: 3999,
    image: kbear,
    alt: "KBear Tourbillon Pro",
  },
  {
    id: "bose-solo-5",
    name: "Bose Solo 5",
    description: "Compact cinematic soundbar",
    oldPrice: 11999,
    price: 10499,
    image: bose,
    alt: "Bose Solo 5",
  },
  {
    id: "fiio-m15",
    name: "FiiO M15",
    description: "Portable hi-res audio player",
    price: 8499,
    image: fiio,
    alt: "FiiO M15",
  },
];

const categoryPages = {
  headphones: {
    title: "Headphones",
    summary: "Open-back classics, wireless daily drivers, and comfort-first over-ears.",
    image: categoryHeadphones,
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
    summary: "Portable, detailed, and stage-ready options for every kind of listener.",
    image: categoryEarphones,
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
        description: "Comfort-fit earphones",
        price: 2199,
        image: iem3,
        alt: "Sonic S5",
      },
    ],
  },
  speakers: {
    title: "Speakers and Home Audio",
    summary: "From compact soundbars to desktop stereo pairs for immersive sessions.",
    image: categorySpeakers,
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
    summary: "Cleaner output, extra power, and richer dynamics for focused listening.",
    image: categoryDacs,
    items: [
      {
        id: "fiio-m15",
        name: "FiiO M15",
        description: "Portable hi-res audio player",
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

const heroSlides = [
  {
    id: "slide-iem",
    eyebrow: "Fresh arrival",
    title: "AntCritical TZ-3 IEMs",
    description: "Compact shell, neutral tuning, and enough detail for long evening sessions.",
    oldPrice: 3999,
    price: 2799,
    image: iem,
    category: "earphones",
  },
  {
    id: "slide-headphone",
    eyebrow: "Studio clarity",
    title: "Wave-Technica W50x-BT",
    description: "Wireless convenience with disciplined mids and controlled bass response.",
    oldPrice: 5999,
    price: 5499,
    image: wavetechnica,
    category: "headphones",
  },
  {
    id: "slide-speaker",
    eyebrow: "Home upgrade",
    title: "Bose Solo 5 Soundbar",
    description: "Dialogue-forward tuning designed for modern living-room setups.",
    oldPrice: 11999,
    price: 10499,
    image: soundbar1,
    category: "speakers",
  },
];

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

  const incrementCartItem = (productId) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItem = (productId) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId)
    );
  };

  const openCart = (event) => {
    event?.preventDefault();
    setActivePage("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openHome = (event) => {
    event?.preventDefault();
    setActivePage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openHomeSection = (sectionId) => (event) => {
    event?.preventDefault();

    if (activePage !== "home") {
      setActivePage("home");
    }

    window.setTimeout(() => {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, activePage === "home" ? 0 : 80);
  };

  const openCategory = (categoryKey) => (event) => {
    event?.preventDefault();
    setActivePage(categoryKey);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <header className="topbar">
        <button className="brand-link" type="button" onClick={openHome}>
          <h1 className="brand">
            <span>Audio</span>Zone
          </h1>
        </button>

        <nav className="menu" aria-label="Primary navigation">
          <button className="menu-link" type="button" onClick={openHome}>
            Home
          </button>
          <button
            className="menu-link"
            type="button"
            onClick={openHomeSection("categories")}
          >
            Categories
          </button>
          <button
            className="menu-link"
            type="button"
            onClick={openHomeSection("featured")}
          >
            Featured
          </button>
          <button
            className="menu-link"
            type="button"
            onClick={openHomeSection("contact")}
          >
            Contact
          </button>
        </nav>

        <button className="cart-link" type="button" aria-label="Open cart" onClick={openCart}>
          <svg
            className="cart-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3 4h2l2.3 9.1a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.5L22 7H7" />
            <circle cx="10" cy="19" r="1.4" />
            <circle cx="18" cy="19" r="1.4" />
          </svg>
          <span>Cart ({totalItems})</span>
        </button>
      </header>

      {activePage === "home" ? (
        <main className="home-page" id="home">
          <section className="hero-shell" aria-label="Hero highlights">
            <Carousel
              className="hero-carousel"
              autoplay
              autoplayInterval={3200}
              wrapMode="wrap"
              scrollDistance="slide"
              showArrows
            >
              {heroSlides.map((slide) => (
                <section
                  className="hero-slide"
                  key={slide.id}
                  style={{
                    backgroundImage: `linear-gradient(105deg, rgba(18, 37, 45, 0.88) 10%, rgba(24, 53, 62, 0.62) 56%, rgba(27, 63, 74, 0.4) 100%), url(${slide.image})`,
                  }}
                >
                  <p className="hero-eyebrow">{slide.eyebrow}</p>
                  <h2>{slide.title}</h2>
                  <p className="hero-copy">{slide.description}</p>
                  <p className="hero-price">
                    <span className="old-price">{formatPrice(slide.oldPrice)}</span>
                    <span className="sale-price">{formatPrice(slide.price)}</span>
                  </p>
                  <button
                    className="primary-btn"
                    type="button"
                    onClick={openCategory(slide.category)}
                  >
                    Shop Now
                  </button>
                </section>
              ))}
            </Carousel>
          </section>

          <section className="panel story-block">
            <div className="story-image">
              <img src={wood} alt="Wood grain texture" />
            </div>
            <div className="story-copy">
              <p className="section-label">Who we are</p>
              <h3>Built for people who notice the details.</h3>
              <p>
                Most stores optimize for volume. We optimize for listening. Every product
                in AudioZone is tested for comfort, consistency, and long-session fatigue.
              </p>
              <p>
                Since 2026, we have curated focused collections for Indian listeners who
                want clean tuning, reliable build quality, and gear that ages well.
              </p>
            </div>
          </section>

          <section className="panel" id="featured">
            <div className="panel-header">
              <p className="section-label">Featured products</p>
              <h3>Current picks for everyday critical listening.</h3>
            </div>
            <div className="product-grid">
              {featuredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.alt} />
                  </div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-desc">{product.description}</p>
                  <p className="product-price">
                    {product.oldPrice ? (
                      <span className="old-price">{formatPrice(product.oldPrice)}</span>
                    ) : null}
                    <span className="sale-price">{formatPrice(product.price)}</span>
                  </p>
                  <button
                    className="add-to-cart-btn"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="categories">
            <div className="panel-header">
              <p className="section-label">Collections</p>
              <h3>Find your listening style.</h3>
            </div>
            <div className="category-grid">
              {Object.entries(categoryPages).map(([categoryKey, category]) => (
                <button
                  className="category-card"
                  key={categoryKey}
                  type="button"
                  onClick={openCategory(categoryKey)}
                >
                  <img src={category.image} alt={category.title} />
                  <div className="category-card-content">
                    <p className="section-label">Category</p>
                    <h4>{category.title}</h4>
                    <p>{category.summary}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="panel story-block story-block--reverse">
            <div className="story-image">
              <img src={what} alt="Person listening to music" />
            </div>
            <div className="story-copy">
              <p className="section-label">Why AudioZone</p>
              <h3>Curated, not crowded.</h3>
              <p>
                You do not need a thousand options. You need a short list that sounds
                right for your library, your room, and your routine.
              </p>
              <p>
                We keep the catalog focused and useful, so choosing gear feels calm and
                informed rather than overwhelming.
              </p>
            </div>
          </section>
        </main>
      ) : activePage === "cart" ? (
        <main className="cart-page" id="cart">
          <section className="cart-items-panel">
            <div className="panel-header">
              <p className="section-label">Your selection</p>
              <h2>Cart</h2>
            </div>
            {cartItems.length === 0 ? (
              <p className="cart-empty">
                Your cart is empty. Add products from featured or category pages.
              </p>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <div className="cart-item-media">
                      <img src={item.image} alt={item.alt} />
                    </div>
                    <div className="cart-item-content">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className="cart-item-controls">
                        <button
                          className="cart-qty-btn"
                          type="button"
                          aria-label={`Decrease quantity for ${item.name}`}
                          onClick={() => decrementCartItem(item.id)}
                        >
                          -
                        </button>
                        <span className="cart-item-quantity">Qty: {item.quantity}</span>
                        <button
                          className="cart-qty-btn"
                          type="button"
                          aria-label={`Increase quantity for ${item.name}`}
                          onClick={() => incrementCartItem(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="cart-remove-btn"
                          type="button"
                          aria-label={`Remove ${item.name} from cart`}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <svg
                            className="cart-remove-icon"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M2 2L10 10M10 2L2 10" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="cart-item-total">{formatPrice(item.price * item.quantity)}</p>
                  </article>
                ))}
              </div>
            )}
          </section>

          <aside className="cart-summary-panel">
            <div className="panel-header">
              <p className="section-label">Order summary</p>
              <h3>Checkout</h3>
            </div>
            <p className="summary-line">
              <span>Items</span>
              <span>{totalItems}</span>
            </p>
            <p className="summary-line summary-total">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </p>
            <div className="cart-actions">
              <button className="cart-secondary-btn" type="button" onClick={openHome}>
                Continue Shopping
              </button>
              <button className="checkout-btn" type="button">
                Checkout
              </button>
            </div>
          </aside>
        </main>
      ) : (
        <main className="category-page">
          <section className="category-hero">
            <img src={activeCategory.image} alt={activeCategory.title} />
            <div className="category-hero-content">
              <p className="section-label">Category spotlight</p>
              <h2>{activeCategory.title}</h2>
              <p>{activeCategory.summary}</p>
              <button className="category-back-btn" type="button" onClick={openHome}>
                Back to Home
              </button>
            </div>
          </section>

          <section className="panel">
            <div className="panel-header">
              <p className="section-label">Shop collection</p>
              <h3>{activeCategory.title}</h3>
            </div>
            <div className="product-grid">
              {activeCategory.items.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.alt} />
                  </div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-desc">{product.description}</p>
                  <p className="product-price">
                    {product.oldPrice ? (
                      <span className="old-price">{formatPrice(product.oldPrice)}</span>
                    ) : null}
                    <span className="sale-price">{formatPrice(product.price)}</span>
                  </p>
                  <button
                    className="add-to-cart-btn"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="footer" id="contact">
        <p>Need help choosing your setup? Reach us at support@audiozone.in.</p>
        <a className="footer-link" href="https://github.com/Speedbird849/ecommerce-site">
          © 2026 AudioZone. Designed by Aryan Gupta. All rights reserved.
        </a>
      </footer>
    </div>
  );
}

export default App;