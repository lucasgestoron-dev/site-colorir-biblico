import sampleNoah from "@/assets/sample-noah.jpg";
import sampleNativity from "@/assets/sample-nativity.jpg";
import sampleDavid from "@/assets/sample-david.jpg";
import sampleMoses from "@/assets/sample-moses.jpg";
import sampleDaniel from "@/assets/sample-daniel.jpg";
import sampleJonah from "@/assets/sample-jonah.jpg";

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
    // MUDANÇA: bg-background alterado para bg-orange-50 para manter o fluxo visual
    <section className="py-16 md:py-24 bg-orange-50">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          Veja algumas amostras 🎨
        </h3>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          20 desenhos exclusivos das principais histórias da Bíblia, prontos para imprimir.
        </p>

        {/* Mantendo sua configuração de 4 colunas no PC */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {samples.slice(0, 4).map((sample, index) => (
            <div
              key={sample.title}
              // Mantive bg-card nos itens para eles ficarem com o fundo branco e saltarem do bege
              className="group relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={sample.src}
                  alt={sample.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-card-foreground text-sm font-medium p-4 text-white">
                  {sample.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          + 16 desenhos incríveis no livro completo!
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
