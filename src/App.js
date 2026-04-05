import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <h1 className="brand">ShopEase</h1>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#deals">Deals</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="tagline">Simple. Fast. Everyday Shopping.</p>
          <h2>Everything you need in one place</h2>
          <button type="button">Shop Now</button>
        </section>

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
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
