import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

const benefits = [
  { number: "01", title: "Choose what you need", copy: "Explore services and find the right option for you." },
  { number: "02", title: "Pick a convenient time", copy: "See available appointments and choose a slot that works." },
  { number: "03", title: "You're all set", copy: "Share your details and receive your booking confirmation." },
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(node); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export default function LandingPage() {
  const navigate = useNavigate();
  const book = () => navigate("/book");
  const bookService = (service) => navigate(`/book?service=${service.id}`);

  return (
    <div className="site-shell">
      <Navbar onBookNow={book} />
      <main>
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> APPOINTMENTS, MADE SIMPLE</div>
              <h1>Make time for<br /><span>what matters.</span></h1>
              <p className="hero-description">A better way to book your next visit. Explore our services, choose a time that suits you, and confirm your appointment in just a few steps.</p>
              <div className="hero-actions">
                <button className="button-primary" onClick={book}>Book an appointment <span aria-hidden="true">↗</span></button>
                <a className="text-link" href="#services">Explore services <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-note"><span className="note-check">✓</span> Easy online booking <span className="note-separator">·</span> No waiting on calls</div>
            </div>
            <div className="hero-visual" aria-label="Appointment booking preview">
              <div className="visual-glow" />
              <div className="booking-preview">
                <div className="preview-topline"><span className="preview-brand-mark">{(config.brand || "B").charAt(0).toUpperCase()}</span><span className="preview-status"><i /> Booking made easy</span><span className="preview-menu">•••</span></div>
                <div className="preview-heading"><span className="preview-kicker">YOUR NEXT VISIT</span><h2>Find your<br />perfect time.</h2><p>Choose a service to get started.</p></div>
                <div className="preview-service"><span className="service-icon">✳</span><span><b>{config.services[0]?.name || "Your service"}</b><small>{config.services[0]?.duration || 30} min · Available online</small></span><span className="service-arrow">↗</span></div>
                <div className="preview-calendar"><div className="calendar-heading"><b>November 2026</b><span>‹ &nbsp; ›</span></div><div className="calendar-days">{["M","T","W","T","F","S","S"].map((d,i)=><span key={i}>{d}</span>)}</div><div className="calendar-dates">{[16,17,18,19,20,21,22].map((d,i)=><span key={d} className={i===4?"date-active":""}>{d}</span>)}</div></div>
                <div className="preview-footer"><span><i /> Slots available</span><b>Continue <span>→</span></b></div>
              </div>
              <div className="floating-chip chip-top"><span>✦</span><div><b>Quick & easy</b><small>Book in a few steps</small></div></div>
              <div className="floating-chip chip-bottom"><span className="chip-check">✓</span><div><b>You're confirmed</b><small>Your time, your choice</small></div></div>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><div className="scroll-line" /><span>01 / 03</span></div>
        </section>

        <section className="services-section section-wrap" id="services">
          <Reveal>
            <div className="section-heading-row"><div><div className="eyebrow dark-eyebrow">01 — WHAT WE OFFER</div><h2>Services designed<br />around <em>you.</em></h2></div><p className="section-intro">Take a look at our available services and find the one that's right for you. Booking your next visit is just a few clicks away.</p></div>
            <div className="services-grid">{config.services.map((service, index) => <div className="service-item" key={service.id}><div className="service-index">0{index + 1}</div><ServiceCard service={service} selected={false} onClick={() => bookService(service)} /><button className="service-book-link" onClick={() => bookService(service)}>Book this service <span>↗</span></button></div>)}</div>
          </Reveal>
        </section>

        <section className="process-section" id="how-it-works">
          <div className="section-wrap process-inner"><Reveal><div className="eyebrow">02 — HOW IT WORKS</div><div className="process-heading"><h2>Your time.<br /><em>Your way.</em></h2><p>We've kept the process simple, so you can spend less time arranging and more time doing what you came for.</p></div><div className="steps-grid">{benefits.map((item)=><div className="step-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></div>)}</div></Reveal></div>
        </section>

        <section className="final-cta section-wrap"><Reveal><div className="cta-panel"><div className="cta-decoration">✳</div><div className="eyebrow dark-eyebrow">READY WHEN YOU ARE</div><h2>Let's get you<br /><em>booked in.</em></h2><p>Choose your service and a time that works for you. We'll take care of the rest.</p><button className="button-primary" onClick={book}>Book an appointment <span>↗</span></button></div></Reveal></section>
      </main>
      <Footer />
    </div>
  );
}
