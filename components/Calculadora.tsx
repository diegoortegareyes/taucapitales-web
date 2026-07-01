"use client";

import { useMemo, useState } from "react";
import { FaCalculator } from "react-icons/fa6";

function formatCLP(n: number) {
  if (!isFinite(n)) return "$0";
  return n.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });
}

export default function Calculadora() {
  const [monto, setMonto] = useState<number>(5000000);
  const [tasaMensual, setTasaMensual] = useState<number>(1.8);
  const [dias, setDias] = useState<number>(45);

  const { costo, anticipo, neto } = useMemo(() => {
    const montoNum = Number.isFinite(monto) ? monto : 0;
    const tasaDiaria = tasaMensual / 30;
    const costoCalc = montoNum * (tasaDiaria / 100) * dias;
    const anticipoCalc = montoNum * 0.9; // anticipo referencial: 90% del valor de la factura
    const netoCalc = anticipoCalc - costoCalc;
    return { costo: costoCalc, anticipo: anticipoCalc, neto: netoCalc };
  }, [monto, tasaMensual, dias]);

  return (
    <section className="rounded-2xl border p-6 md:p-8 bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100">
      <div className="flex items-center gap-2">
        <FaCalculator className="text-sky-700" />
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">
          Simula tu anticipo de factoring
        </h2>
      </div>
      <p className="mt-2 text-sm text-sky-900/80 max-w-2xl">
        Calcula de forma referencial cuánto podrías recibir al anticipar una
        factura. Es solo una estimación: la tasa y el anticipo final dependen
        de la evaluación de cada operación.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label htmlFor="monto" className="block text-sm font-medium text-sky-900">
              Monto de la factura (CLP)
            </label>
            <input
              id="monto"
              type="number"
              min={0}
              step={10000}
              value={monto}
              onChange={(e) => setMonto(Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label htmlFor="tasa" className="block text-sm font-medium text-sky-900">
              Tasa de descuento mensual referencial: {tasaMensual.toFixed(1)}%
            </label>
            <input
              id="tasa"
              type="range"
              min={0.8}
              max={3.5}
              step={0.1}
              value={tasaMensual}
              onChange={(e) => setTasaMensual(Number(e.target.value))}
              className="mt-2 w-full accent-sky-700"
            />
          </div>

          <div>
            <label htmlFor="dias" className="block text-sm font-medium text-sky-900">
              Días hasta el vencimiento: {dias} días
            </label>
            <input
              id="dias"
              type="range"
              min={15}
              max={120}
              step={5}
              value={dias}
              onChange={(e) => setDias(Number(e.target.value))}
              className="mt-2 w-full accent-sky-700"
            />
          </div>
        </div>

        {/* Resultado */}
        <div className="rounded-xl bg-white border border-sky-100 p-5 space-y-3 shadow-sm">
          <div className="flex justify-between text-sm text-sky-900/80">
            <span>Monto de la factura</span>
            <span className="font-medium text-sky-900">{formatCLP(monto)}</span>
          </div>
          <div className="flex justify-between text-sm text-sky-900/80">
            <span>Anticipo estimado (90%)</span>
            <span className="font-medium text-sky-900">{formatCLP(anticipo)}</span>
          </div>
          <div className="flex justify-between text-sm text-sky-900/80">
            <span>Costo estimado del factoring</span>
            <span className="font-medium text-sky-900">− {formatCLP(costo)}</span>
          </div>
          <div className="pt-3 border-t border-sky-100 flex justify-between items-center">
            <span className="text-sm font-semibold text-sky-900">
              Recibirías aprox.
            </span>
            <span className="text-2xl font-bold text-sky-900">
              {formatCLP(neto)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
