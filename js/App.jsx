function App() {
  const D = window.WEDDING;
  const [started, setStarted] = React.useState(false);
  const audioRef = React.useRef(null);
  const sections = ["hero","couple","event","location","gallery","rsvp","gift","footer"];
  const [active, setActive] = React.useState(0);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = container.querySelectorAll(".snap-section");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          const idx = Array.from(els).indexOf(e.target);
          if (idx >= 0) setActive(idx);
        }
      });
    }, { threshold: 0.5, root: container });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (started && audioRef.current && D.music) {
      audioRef.current.play().catch(() => {});
    }
  }, [started]);

  const scrollTo = (i) => {
    const container = containerRef.current;
    const els = container.querySelectorAll(".snap-section");
    els[i]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStart = () => {
    setStarted(true);
    scrollTo(1);
  };

  return (
    <div ref={containerRef} className="snap-container">
      {D.music && <audio ref={audioRef} src={D.music} loop />}
      <nav className="dots-nav" aria-label="navigasi section">
        {sections.map((s, i) => (
          <button key={s} className={"dot " + (active === i ? "active" : "")} onClick={() => scrollTo(i)} aria-label={s}></button>
        ))}
      </nav>
      <div className="snap-section reveal"><Hero onStart={handleStart} /></div>
      <div className="snap-section reveal"><Couple /></div>
      <div className="snap-section reveal"><Event /></div>
      <div className="snap-section reveal"><Location /></div>
      <div className="snap-section reveal"><Gallery started={started} /></div>
      <div className="snap-section reveal"><RSVP /></div>
      <div className="snap-section reveal"><Gift /></div>
      <div className="snap-section reveal"><Footer /></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);