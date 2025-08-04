import Card from '@/components/ui/Cards'

export default function Projetos() {
  return (
    <section id="projetos" className="w-full min-h-screen p-8 sm:p-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black dark:text-white">Meus Projetos</h2>
        <p className="text-slate-600 mt-2 dark:text-white">Aqui estão alguns projetos que desenvolvi.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <Card
          imageUrl="/images/MetaCash.png"
          title="MetaCash"
          description="Um programa desenvolvido em Python que tem como foco facilitar a gestão de finanças pessoais."
          linkHref="https://github.com/Nicolas-Monteiro/Metacash.git" 
          linkText="Ver no GitHub"
        />

        <Card
          imageUrl="/images/UniCar.png" 
          title="Unicar"
          description="Um aplicativo de caronas voltado ao âmbito universitário (inicialmente apenas a UFRPE)"
          linkHref="#"
          linkText="Ver Demonstração"
        />

        <Card
          imageUrl="/images/ProSense.png" 
          title="ProSense"
          description="Uma landing page desevolvida com html/css/javascript, de uma empresa B2B de consultoria"
          linkHref="https://lucass55.github.io/Pro-Sense-Consultoria/"
          linkText="Ver Detalhes"
        />

      </div>
    </section>
  );
}