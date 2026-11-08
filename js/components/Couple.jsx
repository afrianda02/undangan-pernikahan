function Couple() {
  const D = window.WEDDING;
  const Card = ({p}) => (
    <div className="text-center card p-6 relative overflow-hidden">
      <div className="watermark gunungan-center absolute inset-0"></div>
      <div className="watermark itik-sides absolute inset-0"></div>
      <img src={p.photo} alt={p.name} className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-pink-200 shadow relative z-10" />
      <div className="flex justify-center mt-3 relative z-10">
        {p === D.groom ? (
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-pink-600"><path d="M12 2 L22 20 L12 16 L2 20 Z" fill="currentColor" opacity="0.7"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-matcha-500" style={{color:'#8fb083'}}><path d="M12 2 C16 6 20 12 12 22 C4 12 8 6 12 2 Z" fill="currentColor" opacity="0.7"/></svg>
        )}
      </div>
      <h3 className="font-serif text-2xl mt-2 text-pink-700 relative z-10">{p.name}</h3>
      <p className="text-stone-500 text-sm mt-1 relative z-10">{p.parents}</p>
    </div>
  );
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-center font-serif text-3xl mb-10 text-pink-700">Mempelai</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Card p={D.groom} />
        <Card p={D.bride} />
      </div>
    </section>
  );
}