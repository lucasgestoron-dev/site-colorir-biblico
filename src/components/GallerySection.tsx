import { useEffect, useState } from "react";
import sampleNoah from "@/assets/sample-noah-real.jpg";
import sampleNativity from "@/assets/sample-nativity-real.jpg";
import sampleDavid from "@/assets/sample-david-real.jpg";
import sampleMoses from "@/assets/sample-moses-real.jpg";
import sampleDaniel from "@/assets/sample-daniel-real.jpg";
import sampleJonah from "@/assets/sample-jonah-real.jpg";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Reveal from "@/components/Reveal";

const samples = [
  { src: sampleNoah, title: "A Arca de Noé" },
  { src: sampleMoses, title: "A Travessia do Mar Vermelho" },
  { src: sampleDavid, title: "Davi e Golias" },
  { src: sampleDaniel, title: "Daniel na Cova dos Leões" },
  { src: sampleJonah, title: "Jonas e o Grande Peixe" },
  { src: sampleNativity, title: "O Nascimento de Jesus" },
];

const checkoutLink = "https://pay.cakto.com.br/fmajp36_722955";

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const previous = () => setSelected((current) => current === null ? 0 : (current - 1 + samples.length) % samples.length);
  const next = () => setSelected((current) => current === null ? 0 : (current + 1) % samples.length);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? 0 : (current - 1 + samples.length) % samples.length);
      if (event.key === "ArrowRight") setSelected((current) => current === null ? 0 : (current + 1) % samples.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <section id="samples" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/60 scroll-mt-20">
      <div className="container">
        <Reveal className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-widest">Páginas reais do PDF</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Veja os desenhos antes de comprar</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Clique em qualquer página para abrir e conferir os detalhes do material.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {samples.map((sample, index) => (
            <Reveal key={sample.title} delay={(index % 3) * 90}>
              <button type="button" onClick={() => setSelected(index)} className="group relative w-full bg-white p-2.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30" aria-label={`Ampliar página: ${sample.title}`}>
                <div className="relative aspect-[210/297] overflow-hidden rounded-lg border border-slate-100 bg-white">
                  <img src={sample.src} alt={`Página para colorir: ${sample.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" decoding="async" />
                  <span className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="hidden md:flex opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all bg-white text-slate-900 rounded-full px-4 py-2 text-sm font-black shadow-xl items-center gap-2"><Maximize2 className="w-4 h-4" /> Ampliar</span>
                  </span>
                  <span className="md:hidden absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 text-[11px] font-black text-slate-800 shadow-md border border-slate-200/80">
                    <Maximize2 className="w-3.5 h-3.5 text-primary" /> Toque para ampliar
                  </span>
                </div>
                <span className="block py-3 px-1 text-center text-slate-800 text-sm font-bold">{sample.title}</span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-5">
            <div className="bg-white inline-flex items-center gap-3 px-6 md:px-8 py-4 rounded-2xl shadow-sm border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <p className="text-slate-700 font-medium text-left">Estes são 6 exemplos. O PDF inclui <strong className="text-primary">mais 24 desenhos bíblicos</strong>.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-slate-800 font-bold">Gostou das páginas? Receba o PDF completo por R$ 7,90.</p>
              <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-base font-black text-white border-2 border-green-400 shadow-[0_5px_0_rgb(21,128,61)] transition-all duration-150 hover:bg-green-600 hover:translate-y-0.5 hover:shadow-[0_3px_0_rgb(21,128,61)] active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300">
                QUERO OS 30 DESENHOS
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-slate-500">Pagamento único • produto digital</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="w-[calc(100%-1.5rem)] max-w-5xl h-[92vh] p-3 md:p-5 bg-[#f8fafc] border-0 rounded-2xl flex flex-col gap-3">
          <DialogTitle className="text-center text-base md:text-lg font-bold pr-8">{selected !== null ? samples[selected].title : "Página do material"}</DialogTitle>
          {selected !== null && (
            <div className="relative min-h-0 flex-1 flex items-center justify-center px-0 md:px-14">
              <img src={samples[selected].src} alt={`Página ampliada: ${samples[selected].title}`} className="max-w-full max-h-full object-contain rounded-md shadow-xl bg-white" />
              <button type="button" onClick={previous} className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30" aria-label="Ver desenho anterior"><ChevronLeft className="w-6 h-6" /></button>
              <button type="button" onClick={next} className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30" aria-label="Ver próximo desenho"><ChevronRight className="w-6 h-6" /></button>
            </div>
          )}
          <p className="text-center text-sm font-bold text-slate-500">{selected !== null ? `${selected + 1} de ${samples.length}` : ""}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
