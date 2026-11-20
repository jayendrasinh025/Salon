import config from "../config.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main"><div><a className="brand-lockup footer-brand" href="/"><span className="brand-symbol">{(config.brand || "B").trim().charAt(0).toUpperCase()}</span><span className="brand-name">{config.brand}</span></a><p className="footer-tagline">Making your next appointment a little easier.</p></div><div className="footer-contact"><span>GET IN TOUCH</span><p>{config.location}</p>{config.phone && <p>{config.phone}</p>}{config.instagram && <a href={config.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}</div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {config.brand}. All rights reserved.</span><a href="/book">Book an appointment ↗</a></div>
    </footer>
  );
}
