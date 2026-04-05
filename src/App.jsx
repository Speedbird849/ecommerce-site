import "./App.css";
import { Carousel } from 'nuka-carousel';
import wood from "./wood.png";
import what from "./what.jpg"

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <h1 className="brand">Audio<span>Zone</span></h1>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#deals">Deals</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

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
              We built Audio Zone for them. Since 2026, we've been curating the world's finest headphones for India. We don't carry everything. Just what we've listened to and believe in. The best, not the biggest.
            </p>
            <p>
              We've spent 15 years helping people find that moment. It happens with the songs you already love. Heard again, for the first time.
            </p>
          </section>
        </div>

        <section className="categories" id="categories">
          <h3 className="cat-label">POPULAR CATEGORIES</h3>
          <div className="category-grid">
            <article className="card card1">
              <p>Headphones</p>
            </article>
            <article className="card card2">
              <p>Earphones and IEMs</p>
            </article>
            <article className="card card3">
              <p>Speakers and Home Audio</p>
            </article>
            <article className="card card4">
              <p>DACs and AMPs</p>
            </article>
          </div>
        </section>

        <div className="what">
          <section className="whattext" id="about">
            <p className="who-label">WHO WE ARE</p>
            <h3>For People Who Choose Music</h3>
            <p>Most people are happy if a song plays. Some people care about how it sounds. They notice when something's off, and they care enough to do something about it. They want to understand why a song moves them.
            </p>
            <p>
              We built Audio Zone for them. Since 2026, we've been curating the world's finest headphones for India. We don't carry everything. Just what we've listened to and believe in. The best, not the biggest.
            </p>
          </section>
          <section className="whatimg">
            <img src={what} alt="wood stool" />
          </section>
        </div>

        <section className="categories" id="feat">
          <h3 className="cat-label">FEATURED PRODUCTS</h3>
          <div className="category-grid">
            <article className="card card1">
              <p>Headphones</p>
            </article>
            <article className="card card2">
              <p>Earphones and IEMs</p>
            </article>
            <article className="card card3">
              <p>Speakers and Home Audio</p>
            </article>
            <article className="card card4">
              <p>DACs and AMPs</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <a href="https://github.com/Speedbird849/ecommerce-site">&copy; 2026 AudioZone. Designed by Aryan Gupta. All rights reserved.</a>
      </footer>
    </div>
  );
}

export default App;