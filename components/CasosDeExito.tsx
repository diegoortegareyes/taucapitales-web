import { FaArrowTrendUp } from "react-icons/fa6";

type Caso = {
  empresa: string;
  rubro: string;
  desafio: string;
  solucion: string;
  resultado: string;
};

const casos: Caso[] = [
  {
    empresa: "María González",
    rubro: "Pyme textil",
    desafio:
      "Ciclos de pago de 60 días de sus clientes retail generaban tensión constante de caja.",
    solucion:
      "Implementamos factoring recurrente sobre sus facturas principales, con evaluación ágil mes a mes.",
    resultado: "Mejoró su flujo de caja y creció sin endeudarse con bancos.",
  },
  {
    empresa: "Carlos Pérez",
    rubro: "Transporte",
    desafio:
      "Necesitaba financiar combustible y mantención de flota antes de recibir el pago de sus servicios.",
    solucion:
      "Diseñamos una solución de liquidez flexible, adaptada a la estacionalidad de su operación.",
    resultado: "Asesoría cercana y clara, con una solución ajustada a su realidad.",
  },
  {
    empresa: "Fernanda López",
    rubro: "Servicios TI",
    desafio:
      "Facturas a empresas grandes con plazos de pago extensos frenaban la contratación de nuevos proyectos.",
    solucion:
      "Anticipamos sus facturas más relevantes, con un proceso simple y sin fricciones.",
    resultado: "Proceso simple, eficiente y transparente de principio a fin.",
  },
];

export default function CasosDeExito() {
  return (
    <section className="rounded-2xl border p-6 md:p-8">
      <div className="flex items-center gap-2">
        <FaArrowTrendUp className="text-sky-700" />
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">
          Casos de éxito
        </h2>
      </div>
      <p className="mt-2 text-gray-700 max-w-3xl">
        Resultados reales de pymes chilenas que trabajaron con nosotros para
        resolver problemas concretos de liquidez y gestión.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {casos.map((c) => (
          <article
            key={c.empresa}
            className="rounded-2xl border bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100 p-5 flex flex-col"
          >
            <p className="font-semibold text-sky-900">{c.empresa}</p>
            <p className="text-xs uppercase tracking-wide text-sky-700/80">
              {c.rubro}
            </p>

            <div className="mt-4 space-y-3 text-sm text-sky-900/90">
              <div>
                <p className="font-medium text-sky-900">Desafío</p>
                <p>{c.desafio}</p>
              </div>
              <div>
                <p className="font-medium text-sky-900">Solución</p>
                <p>{c.solucion}</p>
              </div>
            </div>

            <p className="mt-4 pt-4 border-t border-sky-100 text-sm text-sky-800 italic">
              “{c.resultado}”
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
