"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPuzzlePiece,
  FaBook,
  FaUsers,
  FaFileInvoice,
  FaChartBar,
  FaMoneyBillWave,
  FaCircleCheck,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

const API_BASE =
  process.env.NEXT_PUBLIC_CONTACT_API ||
  "https://taucapitales-contacto.vercel.app";

export default function ContactoPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      rut: (form.elements.namedItem("rut") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(`${API_BASE}/api/contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();

      if (res.ok) {
        setSuccess(true);
        (document.getElementById("form-contacto") as HTMLFormElement)?.reset();
      } else {
        alert("❌ Hubo un problema al enviar el formulario.\n\nServidor: " + text);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  // === Testimonios ===
  const testimonios = [
    {
      nombre: "María González",
      texto:
        "Tau Capitales nos ayudó a ordenar nuestras finanzas y obtener liquidez en días clave.",
    },
    {
      nombre: "Pedro Rojas",
      texto:
        "Su equipo es cercano y muy profesional. La asesoría contable ha sido clave para mi pyme.",
    },
    {
      nombre: "Carolina Fernández",
      texto:
        "Gracias al factoring logramos cumplir con nuestros proveedores sin afectar la caja.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonios.length);
    }, 5000); // rota cada 5 segundos
    return () => clearInterval(interval);
  }, [testimonios.length]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* === Formulario (2/3 izquierda) === */}
      <div className="md:col-span-2">
        <h2 className="text-base md:text-lg font-semibold text-sky-800 mb-3">
          Completa el formulario y Pablo Alvarez te contactará a la brevedad.
        </h2>

        {success && (
          <p className="mb-3 text-green-600 text-sm font-medium">
            ✅ ¡Mensaje enviado correctamente! Revisa tu correo.
          </p>
        )}

        <form id="form-contacto" onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            required
            className="border p-2 w-full rounded text-sm"
          />
          <input
            type="text"
            name="rut"
            placeholder="Rut de tu empresa"
            required
            className="border p-2 w-full rounded text-sm"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            className="border p-2 w-full rounded text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="border p-2 w-full rounded text-sm"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            required
            className="border p-2 w-full rounded text-sm h-28"
          />

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center text-sm"
          >
            {loading && (
              <svg
                className="animate-spin h-4 w-4 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Enviando…" : "Enviar"}
          </button>
        </form>

        {/* === Testimonios (debajo del formulario) === */}
        <div className="mt-10 bg-sky-50 border border-sky-100 rounded-lg p-4 text-center shadow-sm">
          <h3 className="text-sky-900 font-semibold text-base mb-2">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-sky-800/90 text-sm italic">
            “{testimonios[current].texto}”
          </p>
          <p className="text-sky-700 text-xs mt-1 font-medium">
            — {testimonios[current].nombre}
          </p>
        </div>
      </div>

      {/* === Sidebar Servicios (1/3 derecha) === */}
      <aside className="md:sticky md:top-4 h-fit bg-white/70 backdrop-blur-sm border border-sky-200 rounded-xl p-3 shadow-sm">
        <h3 className="text-lg font-semibold text-sky-900 mb-1.5 flex items-center gap-2">
          <FaPuzzlePiece className="text-sky-700" /> Nuestros Servicios
        </h3>
        <p className="text-sky-800/90 text-[12px] mb-3 leading-snug">
          Asesoría integral: contabilidad, laboral, tributaria, financiera, factoring, confirming y gestión de cobranza.
        </p>

        <div className="space-y-2">
          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaBook className="text-sky-700" /> Contabilidad
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              Cumplimiento normativo y claridad financiera. Informes y estados para decisiones seguras.
            </p>
          </section>

          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaUsers className="text-sky-700" /> Laboral
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              Contratos, remuneraciones y fiscalizaciones. Menos riesgos y cumplimiento total.
            </p>
          </section>

          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaFileInvoice className="text-sky-700" /> Tributaria
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              Planificación y cumplimiento para pagar lo justo y a tiempo. Defensas ante SII y regularizaciones.
            </p>
          </section>

          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaChartBar className="text-sky-700" /> Financiera
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              KPIs, flujos y presupuestos para mejorar liquidez y control. Negociación bancaria efectiva.
            </p>
          </section>

          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaMoneyBillWave className="text-sky-700" /> Factoring
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              Liquidez inmediata anticipando facturas. Financiamiento flexible y capital eficiente.
            </p>
          </section>

          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaCircleCheck className="text-sky-700" /> Confirming
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              Anticipos a proveedores con trazabilidad y mejores condiciones. Pago ordenado y transparente.
            </p>
          </section>

          <section className="rounded-lg border border-sky-100 p-2.5">
            <h4 className="text-sm md:text-base font-semibold text-sky-900 mb-0.5 flex items-center gap-2">
              <FaFileInvoiceDollar className="text-sky-700" /> Gestión de Cobranza
            </h4>
            <p className="text-[12px] text-sky-900/90 leading-snug">
              Recuperación preventiva y extrajudicial. Seguimiento claro y reportes periódicos.
            </p>
          </section>
        </div>

        <div className="mt-3">
          <Link
            href="/servicios"
            className="inline-block bg-sky-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-sky-800"
          >
            Ver todos los servicios
          </Link>
        </div>
      </aside>
    </div>
  );
}