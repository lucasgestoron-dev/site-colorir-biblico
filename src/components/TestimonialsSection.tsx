import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda S.",
    location: "São Paulo, SP",
    avatar: "👩‍👧",
    rating: 5,
    text: "Meus filhos amaram! Agora pedem para colorir toda noite antes de dormir. É lindo ver eles aprendendo as histórias da Bíblia assim.",
  },
  {
    name: "Patrícia M.",
    location: "Belo Horizonte, MG",
    avatar: "👩‍👦‍👦",
    rating: 5,
    text: "Finalmente uma atividade que tira meus meninos do celular! Eles ficam concentrados por horas e ainda aprendem sobre Deus.",
  },
  {
    name: "Camila R.",
    location: "Curitiba, PR",
    avatar: "👩‍👧‍👦",
    rating: 5,
    text: "Comprei achando que era só mais um livro, mas superou demais! Os desenhos são lindos e minha filha adora contar as histórias pra gente.",
  },
  {
    name: "Amanda L.",
    location: "Rio de Janeiro, RJ",
    avatar: "👩‍👧‍👧",
    rating: 5,
    text: "Melhor investimento que fiz! Por menos de R$8 tenho material pra semanas. Imprimo quantas vezes quiser. Recomendo muito!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          O que as mamães estão dizendo 💬
        </h3>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Milhares de famílias já estão usando o Colorir Bíblico em casa!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* Header with avatar and info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
