type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "¿Qué es el factoring y cómo me ayuda?",
    a: "Es un mecanismo financiero que te permite ceder tus facturas por cobrar a Tau Capitales a cambio de un anticipo inmediato, en vez de esperar 30, 60 o 90 días a que tu cliente pague. Mejora tu flujo de caja sin endeudamiento bancario.",
  },
  {
    q: "¿Qué diferencia hay entre factoring y confirming?",
    a: "El factoring anticipa el pago de facturas que emitiste tú (cuentas por cobrar). El confirming es el proceso inverso: gestionamos y anticipamos el pago a tus proveedores, mejorando tus condiciones y relaciones comerciales.",
  },
  {
    q: "¿Qué documentos necesito para empezar?",
    a: "En general: facturas por ceder, antecedentes de tu empresa (RUT, escritura, cédula del representante) y estados financieros básicos. Nuestro equipo te guía paso a paso para que sea simple.",
  },
  {
    q: "¿Cuánto demora el proceso de evaluación?",
    a: "La evaluación inicial suele tomar entre 24 y 48 horas hábiles una vez que recibimos tus antecedentes completos. La rapidez es una de nuestras prioridades.",
  },
  {
    q: "¿Atienden pymes de cualquier rubro?",
    a: "Sí, trabajamos con pymes y empresas de distintos rubros en todo Chile: comercio, servicios, transporte, construcción, manufactura y más.",
  },
  {
    q: "¿La calculadora de factoring es una oferta formal?",
    a: "No. Es una simulación referencial para que tengas una idea del anticipo estimado. La tasa y condiciones finales dependen de la evaluación de cada operación; no constituye una oferta comercial vinculante.",
  },
];

export default function Faq() {
  return (
    <section className="rounded-2xl border p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">
        Preguntas frecuentes
      </h2>
      <p className="mt-2 text-gray-700">
        Resolvemos las dudas más comunes sobre factoring, confirming y
        nuestros servicios de gestión empresarial.
      </p>

      <div className="mt-6 divide-y divide-sky-100">
        {faqs.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-sky-900 marker:content-none">
              <span>{item.q}</span>
              <span
                aria-hidden
                className="shrink-0 rounded-full border border-sky-200 text-sky-700 h-6 w-6 flex items-center justify-center text-sm transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
