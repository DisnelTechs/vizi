import Hero from "@/components/Hero";
import { getSoluciones } from "@/components/lib/utils";
import SolutionsAccordion from "@/components/SolutionsAccordion";

const Soluciones = async () => {
  const soluciones = await getSoluciones();
  console.log(soluciones);

  if (!soluciones) {
    return <div>No hay soluciones disponibles</div>;
  }

  return (
    <section>
      <Hero
        title="Soluciones"
        subtitle="Variadas propuestas con un alto valor agregado"
      />
      <section className="px-5 lg:px-0 lg:max-w-4xl mx-auto py-20">
        <SolutionsAccordion solutions={soluciones} />
      </section>
    </section>
  );
};

export default Soluciones;
