function Location() {
  const D = window.WEDDING;
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-3xl mb-6 text-pink-700">Lokasi</h2>
      <p className="text-stone-600 mb-4">{D.resepsi.place}<br/>{D.resepsi.address}</p>
      <a href={D.mapsUrl} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 btn-primary rounded-full text-sm">Buka Google Maps</a>
    </section>
  );
}

function Gallery({ started }) {
  const D = window.WEDDING;
  const photos = D.gallery;
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (!started || paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % photos.length), 5000);
    return () => clearInterval(t);
  }, [started, paused, photos.length]);
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {photos.map((g, i) => (
          <div key={i} className="min-w-full h-screen relative">
            <img src={g} alt={"foto " + (i+1)} className="w-full h-full object-cover transition-opacity duration-700" style={{ opacity: i === idx ? 1 : 0.6 }} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {photos.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={"w-2.5 h-2.5 rounded-full transition-all " + (i === idx ? "bg-pink-500 h-6" : "bg-white/60")} aria-label={"foto " + (i+1)}></button>
        ))}
      </div>
      <div className="absolute top-6 left-0 right-0 text-center text-white/90 font-serif text-2xl z-10 drop-shadow">Galeri</div>
    </section>
  );
}

function RSVP() {
  const [form, setForm] = React.useState({ name: "", count: 1, attend: "hadir" });
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    console.log("RSVP:", form);
    setSent(true);
  };
  return (
    <section className="py-16 px-6 max-w-xl mx-auto">
      <h2 className="font-serif text-3xl mb-6 text-center text-pink-700">Konfirmasi Kehadiran</h2>
      {sent ? (
        <p className="text-center text-green-700">Terima kasih, konfirmasi Anda telah diterima.</p>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <input required placeholder="Nama" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border rounded px-3 py-2" />
          <input type="number" min="1" value={form.count} onChange={e=>setForm({...form,count:e.target.value})} className="w-full border rounded px-3 py-2" placeholder="Jumlah tamu" />
          <select value={form.attend} onChange={e=>setForm({...form,attend:e.target.value})} className="w-full border rounded px-3 py-2">
            <option value="hadir">Hadir</option>
            <option value="tidak">Tidak Hadir</option>
          </select>
          <button className="w-full btn-primary rounded py-2">Kirim</button>
        </form>
      )}
    </section>
  );
}

function Gift() {
  const D = window.WEDDING;
  const copy = (num) => { navigator.clipboard.writeText(num); alert("Nomor rekening disalin"); };
  return (
    <section className="py-16 px-6 bg-pink-100 text-center relative overflow-hidden">
      <div className="watermark gunungan-center absolute inset-0"></div>
      <div className="watermark itik-sides absolute inset-0"></div>
      <div className="relative z-10">
      <h2 className="font-serif text-3xl mb-6 text-pink-700">Amplop Digital</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
        {D.rekening.map((r, i) => (
          <div key={i} className="card p-6">
            <p className="font-medium text-pink-700">{r.bank}</p>
            <p className="text-stone-600 text-lg">{r.number}</p>
            <p className="text-stone-500 text-sm mb-3">a.n. {r.name}</p>
            <button onClick={() => copy(r.number)} className="px-6 py-2 btn-primary rounded-full text-sm">Salin Nomor Rekening</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
 
function Footer() {
  const D = window.WEDDING;
  return (
    <footer className="py-8 text-center text-sm text-stone-500">
      Terima kasih atas doa & restunya.<br/>
      {D.groom.nickname} & {D.bride.nickname}
    </footer>
  );
}
