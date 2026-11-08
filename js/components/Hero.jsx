function Hero({ onStart }) {
  const D = window.WEDDING;
  const guest = window.getGuestName();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-pink-50 via-pink-100 to-[#eaf2e6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 30%, #f4a7c3 0, transparent 40%), radial-gradient(circle at 80% 70%, #c9ddc0 0, transparent 40%)'}}></div>
      <div className="watermark gunungan-center absolute inset-0"></div>
      <div className="watermark itik-sides absolute inset-0"></div>
      <p className="uppercase tracking-[0.4em] text-pink-600 text-sm mb-4 fade-in">Undangan Pernikahan</p>
      <h1 className="font-script text-5xl md:text-7xl text-pink-700 mb-2 fade-in">{D.groom.nickname} & {D.bride.nickname}</h1>
      <p className="text-stone-600 mb-8 fade-in">{D.dateLabel}</p>
      <div className="border-t border-pink-200 pt-6 mt-2 fade-in">
        <p className="text-stone-500 text-sm mb-1">Kepada Yth.</p>
        <p className="text-xl font-medium text-pink-700">{guest}</p>
      </div>
      <a href="#acara" onClick={(e)=>{e.preventDefault(); onStart && onStart();}} className="mt-10 px-6 py-3 btn-primary rounded-full text-sm">Lihat Detail</a>
    </section>
  );
}