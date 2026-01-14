import sampleNoah from "@/assets/sample-noah.jpg";
import sampleNativity from "@/assets/sample-nativity.jpg";
import sampleDavid from "@/assets/sample-david.jpg";
import sampleMoses from "@/assets/sample-moses.jpg";
import sampleDaniel from "@/assets/sample-daniel.jpg";
import sampleJonah from "@/assets/sample-jonah.jpg";
import { Check } from "lucide-react";

const samples = [
  { src: sampleNoah, title: "Arca de Noé" },
  { src: sampleNativity, title: "Nascimento de Jesus" },
  { src: sampleDavid, title: "Davi e Golias" },
  { src: sampleMoses, title: "Moisés no Mar Vermelho" },
  { src: sampleDaniel, title: "Daniel na Cova dos Leões" },
  { src: sampleJonah, title: "Jonas e a Baleia" },
];

const GallerySection = () => {
  return (
    // PASSO 3: Mudei para bg-slate-50 (cinza azulado bem leve) para quebrar o "liso" do bege 
    // e dar destaque total aos desenhos brancos.
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            Conteúdo Exclusivo
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dê uma espiadinha por dentro 🎨
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            São 20 desenhos <span className="font-bold text-slate-900">exclusivos</span>, criados com traços nítidos e ideais para a coordenação motora das crianças.
          </p>
        </div>

        {/* PASSO 3: Adicionei sombras mais fortes e bordas para parecerem papéis reais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {samples.slice(0, 4).map((sample, index) => (
            <div
              key={sample.title}
              className="group relative bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
            >
              <div className="aspect-[3/4] overflow-hidden rounded border border-slate-100">
                <img
                  src={sample.src}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Selo de "Exclusivo" em cima de cada imagem */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md">
                <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
              </div>

              <div className="mt-4 text-center pb-2">
                <p className="text-slate-800 text-sm font-bold">
                  {sample.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PASSO 3: Elemento de Urgência/Escassez logo abaixo das fotos */}
        <div className="mt-16 text-center">
          <div className="bg-white inline-block px-8 py-4 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-700 font-medium">
              👉 <span className="text-primary font-bold">+ 16 desenhos inéditos</span> no arquivo completo que você libera hoje!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
