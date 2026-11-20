import config from "../config.js";

export default function Navbar({ onBookNow }) {
  const initial = (config.brand || "B").trim().charAt(0).toUpperCase();
  return (
    <header className="site-header">
      <a className="brand-lockup" href="/" aria-label={`${config.brand} home`}>
        <span className="brand-symbol">{initial}</span>
        <span className="brand-name">{config.brand}</span>
      </a>
      <nav className="desktop-nav"><a href="/#services">Services</a><a href="/#how-it-works">How it works</a></nav>
      <button className="header-book-button" onClick={onBookNow}>Book an appointment <span>↗</span></button>
    </header>
  );
}
