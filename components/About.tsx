import { ScrollFloat } from './ScrollFloat';

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-36 w-full max-w-7xl mx-auto px-6 lg:px-12 bg-creme relative border-t border-bege/40">
      
      {/* Intro statement block imitating the Baseland Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
         
         {/* Pill Badge */}
         <div className="lg:col-span-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] border border-bege/80 px-4 py-2 rounded-full inline-block bg-white/40 font-semibold text-terracota">
               Filosofia
            </span>
         </div>

         {/* Huge Editorial Statement */}
         <div className="lg:col-span-10 flex flex-col gap-8">
            <ScrollFloat delay={0.1} yOffset={30}>
               <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-preto leading-[1.12] tracking-tight text-left">
                  Grandes projetos só fazem sentido se unirem a <span className="italic text-terracota font-normal">poesia estética</span> ao absoluto <span className="italic text-ocre font-normal">rigor técnico</span> da obra.
               </h3>
            </ScrollFloat>

            {/* Supportive Paragraph Grid - Written to Conversion & Editorial hybrid constraints */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-bege/60 pt-8 mt-4">
               <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A15C4C] mb-3 font-semibold">
                     O Chic é Funcionar e Ser Viável
                  </p>
                  <p className="text-sm font-light text-preto/70 leading-relaxed">
                     Com 5 anos de experiência e controle rigoroso no canteiro de obras, Caroline Monteiro entende que um projeto premium só é verdadeiramente chique se for executável e respeitar seu orçamento. Em Fortaleza e Ceará, traduzimos ideias em cronogramas reais e planilhas transparentes, evitando surpresas indesejáveis.
                  </p>
               </div>
               <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A15C4C] mb-3 font-semibold">
                     Luz, Vento e Alma Cearense
                  </p>
                  <p className="text-sm font-light text-preto/70 leading-relaxed">
                     Projetar para a nossa região exige sensibilidade climática: dominar a incidência solar, integrar a brisa litorânea constante e valorizar texturas táteis que trazem frescor e conforto térmico. Criamos refúgios elegantes e acolhedores que celebram a leveza do nosso estilo de vida, com um olhar cosmopolita de quem vive o mundo.
                  </p>
               </div>
            </div>
         </div>

      </div>

      {/* Grid of Values/Strengths underneath in beautiful minimal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20">
         
         {/* Strength 1 */}
         <ScrollFloat 
            delay={0} 
            yOffset={30}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-bege/60 shadow-sm flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md cursor-default"
         >
            <div>
               <span className="font-mono text-xs text-terracota mb-3 block">01 / DESIGN INTELIGENTE</span>
               <h4 className="font-serif text-2xl text-preto mb-3">Estilo de Vida Local</h4>
            </div>
            <p className="text-xs font-light text-preto/70 leading-relaxed">
               Luz natural abundante e ventilação cruzada como pilares. Desenhamos lares frescos que abraçam a alma cearense e otimizam o seu bem-estar diário.
            </p>
         </ScrollFloat>

         {/* Strength 2 */}
         <ScrollFloat 
            delay={0.15} 
            yOffset={30}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-bege/60 shadow-sm flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md cursor-default"
         >
            <div>
               <span className="font-mono text-xs text-ocre mb-3 block">02 / PARCERIA E AFETO</span>
               <h4 className="font-serif text-2xl text-preto mb-3">Arquitetura Acessível</h4>
            </div>
            <p className="text-xs font-light text-preto/70 leading-relaxed">
               Acreditamos que possuir um projeto assinado, autoral e sob medida deve ser um investimento justo e viável, sintonizado com sua realidade financeira.
            </p>
         </ScrollFloat>

         {/* Strength 3 */}
         <ScrollFloat 
            delay={0.3} 
            yOffset={30}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-bege/60 shadow-sm flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-md cursor-default"
         >
            <div>
               <span className="font-mono text-xs text-[#5D6B54] mb-3 block">03 / SEGURANÇA NA OBRA</span>
               <h4 className="font-serif text-2xl text-preto mb-3">Dominando o Canteiro</h4>
            </div>
            <p className="text-xs font-light text-preto/70 leading-relaxed">
               Sua reforma em mãos experientes de verdade. Cuidamos das planilhas, compatibilizações técnicas e alinhamento milimétrico com os construtores.
            </p>
         </ScrollFloat>

      </div>

    </section>
  );
}
