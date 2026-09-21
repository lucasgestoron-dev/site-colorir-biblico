import { MissingAsset } from './MissingAsset';

export function BenefitsBanner() {
  return (
    <section className="py-20 bg-[#043b6b] text-white">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-12 gap-8 items-center">
        
        <div className="md:col-span-4">
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold leading-tight">
            Mais do que atividades,<br/>
            é uma nova forma de<br/>
            se relacionar com a<br/>
            matemática.
          </h2>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {[
            "Aumenta o interesse da criança",
            "Desenvolve raciocínio lógico",
            "Trabalha diversas habilidades",
            "Atividades ilustradas e envolventes",
            "Pronto para imprimir e usar",
            "Organizado por ano escolar"
          ].map(item => (
            <div key={item} className="flex items-start gap-2 text-sm font-semibold text-sky-100">
              <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {item}
            </div>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-col items-center">
          <MissingAsset name="benefits-character.png" className="w-32 h-32 mb-2" />
          <MissingAsset name="benefits-note.png" className="w-40 h-20" />
        </div>

      </div>
    </section>
  );
}
