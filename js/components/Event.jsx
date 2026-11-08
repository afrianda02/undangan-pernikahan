function Event() {
  const D = window.WEDDING;
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const target = new Date(D.date);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  const Item = ({label, val}) => (
    <div className="bg-white rounded-lg shadow p-3 w-20 border border-pink-200">
      <div className="text-2xl font-bold">{val}</div>
      <div className="text-xs text-stone-500">{label}</div>
    </div>
  );

  return (
    <section id="acara" className="py-16 px-6 bg-pink-50 relative overflow-hidden">
      <div className="watermark gunungan-center absolute inset-0"></div>
      <div className="watermark itik-sides absolute inset-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-6 text-pink-700">Acara</h2>
        <div className="flex justify-center gap-3 mb-10">
          <Item label="Hari" val={days} />
          <Item label="Jam" val={hours} />
          <Item label="Menit" val={mins} />
          <Item label="Detik" val={secs} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-serif text-xl mb-2">Akad Nikah</h3>
            <p className="text-stone-600">{D.dateLabel}</p>
            <p className="text-stone-600">{D.akad.time}</p>
            <p className="font-medium mt-2">{D.akad.place}</p>
            <p className="text-sm text-stone-500">{D.akad.address}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-serif text-xl mb-2">Resepsi</h3>
            <p className="text-stone-600">{D.dateLabel}</p>
            <p className="text-stone-600">{D.resepsi.time}</p>
            <p className="font-medium mt-2">{D.resepsi.place}</p>
            <p className="text-sm text-stone-500">{D.resepsi.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
