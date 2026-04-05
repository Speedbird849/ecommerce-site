import "./App.css";
import { Carousel } from 'nuka-carousel';

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
        <Carousel className="hero-carousel" autoplay={true} autoplayInterval={5000} wrapMode="wrap" scrollDistance="slide" showArrows>
          <section className="hero hero1">
            <p className="tagline">Introducing the All New</p>
            <h2>AntCritical TZ-3 IEMs</h2>
            <button type="button">Shop Now</button>
          </section>
          <section className="hero hero2">
            <p className="tagline">Good sound doesn't have to be expensive</p>
            <h2>The Wave-Technica W50x-BT</h2>
            <button type="button">Shop Now</button>
          </section>
          <section className="hero hero3">
            <p className="tagline">Grab a free case with the new</p>
            <h2>TZ Thunder v2</h2>
            <button type="button">Shop Now</button>
          </section>
        </Carousel>

        <div className="who">
          
        </div>

        <section className="categories" id="categories">
          <h3>Popular Categories</h3>
          <div className="category-grid">
            <article className="card">Clothing</article>
            <article className="card">Electronics</article>
            <article className="card">Home & Kitchen</article>
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